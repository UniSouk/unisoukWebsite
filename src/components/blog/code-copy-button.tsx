"use client";

import { useRef, useState } from "react";

export function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={copy} aria-live="polite">
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
