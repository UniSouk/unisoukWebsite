"use client";

import { FormEvent, useState } from "react";

import { ArrowRightIcon } from "@/components/ui/icon";

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  industry: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const initialFields: ContactFields = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  industry: "",
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
        "Enter a valid Indian mobile number, e.g. +91 98765 43210.";
    }
  }
  if (!fields.industry) errors.industry = "Business industry is required.";
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length > 5000) {
    errors.message = "Message must be no more than 5000 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (name: keyof ContactFields, value: string) => {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("");
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
      const coreApiUrl = process.env.NEXT_PUBLIC_CORE_API_URL;
      const response = await fetch(`${coreApiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          phoneNumber: fields.phoneNumber || undefined,
          businessIndustry: fields.industry,
          message: fields.message,
        }),
        signal: controller.signal,
      });
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "You have sent several requests. Please wait and try again.",
          );
        }
        let backendMessage: string | undefined;
        try {
          const data: { message?: string | string[] } = await response.json();
          if (Array.isArray(data.message)) {
            backendMessage = data.message.join(" ");
          } else if (typeof data.message === "string") {
            backendMessage = data.message;
          }
        } catch {
          // Response body was not JSON; fall back to the generic message below.
        }
        throw new Error(
          backendMessage ??
            "Our contact service is temporarily unavailable. Please try again shortly.",
        );
      }
      setFields(initialFields);
      setStatus("Thank you. Your message has been sent successfully.");
    } catch (error) {
      setStatus(
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Please check your connection and try again."
          : error instanceof Error
            ? error.message
            : "We could not send your message. Please try again.",
      );
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
          placeholder="+91 98765 43210"
          aria-invalid={Boolean(errors.phoneNumber)}
          aria-describedby="contact-phone-error"
          onChange={(event) => update("phoneNumber", event.target.value)}
        />
        <p className="form-field__error" id="contact-phone-error" aria-live="polite" hidden={!errors.phoneNumber}>{errors.phoneNumber}</p>
      </div>
      <div className="form-field" data-invalid={Boolean(errors.industry) || undefined}>
        <label htmlFor="contact-industry">Business industry</label>
        <select
          id="contact-industry"
          name="industry"
          value={fields.industry}
          required
          aria-invalid={Boolean(errors.industry)}
          aria-describedby="contact-industry-error"
          onChange={(event) => update("industry", event.target.value)}
        >
          <option value="" disabled>Choose a business industry</option>
          <option value="RETAIL_AND_ECOMMERCE">Retail and ecommerce</option>
          <option value="D2C_BRAND">D2C brand</option>
          <option value="MANUFACTURER_OR_DISTRIBUTOR">Manufacturer or distributor</option>
          <option value="MARKETPLACE_SELLER">Marketplace seller</option>
          <option value="PROFESSIONAL_SERVICES">Professional services</option>
          <option value="OTHER">Other</option>
        </select>
        <p className="form-field__error" id="contact-industry-error" aria-live="polite" hidden={!errors.industry}>{errors.industry}</p>
      </div>
      <div className="form-field" data-invalid={Boolean(errors.message) || undefined}>
        <label htmlFor="contact-message">Message</label>
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
        className="contact-form__status"
        role="status"
        aria-live="polite"
        hidden={!status}
      >
        {status}
      </p>
      <div className="contact-form__footer">
        <p>All fields are required except phone number. We will only use these details to respond to your enquiry.</p>
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
  onChange,
}: {
  label: string;
  name: "firstName" | "lastName" | "email";
  type?: "text" | "email";
  value: string;
  error?: string;
  onChange: (name: keyof ContactFields, value: string) => void;
}) {
  const inputId = `contact-${name === "firstName" ? "first-name" : name === "lastName" ? "last-name" : "email"}`;
  const errorId = `${inputId}-error`;
  return (
    <div className="form-field" data-invalid={Boolean(error) || undefined}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        required
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
