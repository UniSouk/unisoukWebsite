"use client";

import { FormEvent, useState } from "react";

import { ArrowRightIcon, CheckIcon, CloseIcon } from "@/components/ui/icon";
import { BUSINESS_CATEGORIES } from "@/constants/business-categories";

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessCategory: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFields, string>>;

/** Outcome banner shown after a submit attempt. `tone` drives the styling. */
type FormStatus = { tone: "success" | "error"; message: string } | null;

/** Success shape returned by POST /contact, e.g. `{ success: true, id, createdAt }`. */
type ContactResponseBody = {
  success?: unknown;
  message?: string | string[];
};

const initialFields: ContactFields = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  businessCategory: "",
  message: "",
};

const INDIAN_PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;

function validate(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.firstName.trim()) errors.firstName = "First name is required.";
  if (!fields.lastName.trim()) errors.lastName = "Last name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.phoneNumber.trim()) {
    const normalized = fields.phoneNumber.replace(/[\s-]/g, "");
    if (!INDIAN_PHONE_PATTERN.test(normalized)) {
      errors.phoneNumber =
        "Enter a valid Indian mobile number in the format +91 XXXXX XXXXX.";
    }
  }
  if (!fields.businessCategory)
    errors.businessCategory = "Business category is required.";
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length > 5000) {
    errors.message = "Message must be no more than 5000 characters.";
  }
  return errors;
}

function readBackendMessage(body: ContactResponseBody | null) {
  if (!body) return undefined;
  if (Array.isArray(body.message)) return body.message.join(" ");
  if (typeof body.message === "string") return body.message;
  return undefined;
}

/**
 * Visual asterisk for required fields. Hidden from assistive technology
 * because the underlying control already carries the `required` attribute,
 * so screen readers would otherwise announce the requirement twice.
 */
function RequiredMark() {
  return (
    <span aria-hidden="true" className="ml-0.5 text-[var(--orange-ink)]">
      *
    </span>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (name: keyof ContactFields, value: string) => {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus(null);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>('[aria-invalid="true"]')
          ?.focus();
      });
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setIsSubmitting(true);

    try {
      const coreApiUrl = "https://api.dev.unisouk.com";
      const response = await fetch(`${coreApiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          phoneNumber: fields.phoneNumber || undefined,
          // The backend contract still names this field `businessIndustry`,
          // so the key is kept even though the taxonomy is now categories.
          businessIndustry: fields.businessCategory,
          message: fields.message,
        }),
        signal: controller.signal,
      });
      // Read the body once: it carries the error message on failure and the
      // `success` flag on a completed submission.
      let body: ContactResponseBody | null = null;
      try {
        body = (await response.json()) as ContactResponseBody;
      } catch {
        // Response body was not JSON; fall back to the generic messages below.
      }
      const backendMessage = readBackendMessage(body);

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "You have sent several requests. Please wait and try again.",
          );
        }
        throw new Error(
          backendMessage ??
            "Our contact service is temporarily unavailable. Please try again shortly.",
        );
      }
      // The API reports the outcome in the payload, so a 2xx that is explicitly
      // `success: false` is still a failure and must not look like a send.
      if (body?.success === false) {
        throw new Error(
          backendMessage ??
            "We could not confirm your message was sent. Please try again.",
        );
      }
      setFields(initialFields);
      setStatus({
        tone: "success",
        message: "Thank you. Your message has been sent successfully.",
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof DOMException && error.name === "AbortError"
            ? "The request took too long. Please check your connection and try again."
            : error instanceof Error
              ? error.message
              : "We could not send your message. Please try again.",
      });
    } finally {
      window.clearTimeout(timeout);
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" noValidate onSubmit={submit}>
      <div className="contact-form__row">
        <Field
          label="First name"
          name="firstName"
          value={fields.firstName}
          error={errors.firstName}
          onChange={update}
        />
        <Field
          label="Last name"
          name="lastName"
          value={fields.lastName}
          error={errors.lastName}
          onChange={update}
        />
      </div>
      <Field
        label="Email address"
        name="email"
        type="email"
        value={fields.email}
        error={errors.email}
        placeholder="name@yourbusiness.com"
        onChange={update}
      />
      <div className="form-field" data-invalid={Boolean(errors.phoneNumber) || undefined}>
        <label htmlFor="contact-phone">Phone number (optional)</label>
        <input
          id="contact-phone"
          name="phoneNumber"
          type="tel"
          value={fields.phoneNumber}
          autoComplete="tel"
          placeholder="+91 XXXXX XXX21"
          aria-invalid={Boolean(errors.phoneNumber)}
          aria-describedby="contact-phone-error"
          onChange={(event) => update("phoneNumber", event.target.value)}
        />
        <p className="form-field__error" id="contact-phone-error" aria-live="polite" hidden={!errors.phoneNumber}>{errors.phoneNumber}</p>
      </div>
      <div className="form-field" data-invalid={Boolean(errors.businessCategory) || undefined}>
        <label htmlFor="contact-category">
          Business category
          <RequiredMark />
        </label>
        <select
          id="contact-category"
          name="businessCategory"
          value={fields.businessCategory}
          required
          aria-invalid={Boolean(errors.businessCategory)}
          aria-describedby="contact-category-error"
          onChange={(event) => update("businessCategory", event.target.value)}
        >
          <option value="" disabled>Choose a business category</option>
          {BUSINESS_CATEGORIES.map((category) => (
            <option value={category.value} key={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <p className="form-field__error" id="contact-category-error" aria-live="polite" hidden={!errors.businessCategory}>{errors.businessCategory}</p>
      </div>
      <div className="form-field" data-invalid={Boolean(errors.message) || undefined}>
        <label htmlFor="contact-message">
          Message
          <RequiredMark />
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={5000}
          required
          placeholder="Tell us what you would like help with"
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="contact-message-hint contact-message-error"
          onChange={(event) => update("message", event.target.value)}
        />
        <div className="form-field__meta" id="contact-message-hint">
          <span>{fields.message.length} / 5000</span>
        </div>
        <p className="form-field__error" id="contact-message-error" aria-live="polite" hidden={!errors.message}>{errors.message}</p>
      </div>
       <p
          className={`contact-form__status${status ? " flex items-center gap-2.5" : ""}`}
          data-state={status?.tone}
          role="status"
          aria-live="polite"
          hidden={!status}
        >
          {status ? (
            <span
              className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-current"
              aria-hidden="true"
            >
              {status.tone === "success" ? (
                <CheckIcon className="h-3 w-3 text-[var(--white)]" strokeWidth={3} />
              ) : (
                <CloseIcon className="h-3 w-3 text-[var(--white)]" strokeWidth={3} />
              )}
            </span>
          ) : null}
          <span>{status?.message}</span>
        </p>
      <div className="contact-form__footer">
        <p>Fields marked with an asterisk (*) are required. We will only use these details to respond to your enquiry.</p>
        <button className="button button--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
          <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
}: {
  label: string;
  name: "firstName" | "lastName" | "email";
  type?: "text" | "email";
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (name: keyof ContactFields, value: string) => void;
}) {
  const inputId = `contact-${name === "firstName" ? "first-name" : name === "lastName" ? "last-name" : "email"}`;
  const errorId = `${inputId}-error`;
  return (
    <div className="form-field" data-invalid={Boolean(error) || undefined}>
      <label htmlFor={inputId}>
        {label}
        <RequiredMark />
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        required
        placeholder={placeholder}
        autoComplete={
          name === "email"
            ? "email"
            : name === "firstName"
              ? "given-name"
              : "family-name"
        }
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        onChange={(event) => onChange(name, event.target.value)}
      />
      <p className="form-field__error" id={errorId} aria-live="polite" hidden={!error}>{error}</p>
    </div>
  );
}
