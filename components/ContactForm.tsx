"use client";

import { useState } from "react";
import Script from "next/script";
import { site, services } from "@/lib/site";
import { ArrowIcon } from "./icons";

/**
 * Lead endpoint (Formspree, Azoria CRM, etc.). When unset, the form falls
 * back to composing an email in the visitor's mail app.
 * Both values are inlined at build time.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldClass =
  "w-full rounded border border-border bg-ink px-3.5 py-2.5 text-fg placeholder:text-muted/70 focus:border-sand";
const labelClass =
  "font-display text-xs uppercase tracking-widest text-muted";

type Status = "idle" | "sending" | "sent" | "error";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function composeMailto(data: FormData) {
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Service: ${data.get("service") ?? ""}`,
      `Vehicle / Equipment: ${data.get("rig") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    const subject = `Enquiry${data.get("service") ? ` — ${data.get("service")}` : ""}${
      data.get("name") ? ` from ${data.get("name")}` : ""
    }`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see this field. Pretend success so bots
    // don't learn they were filtered. The endpoint drops it server-side too.
    if (String(data.get("_gotcha") ?? "") !== "") {
      setStatus("sent");
      form.reset();
      return;
    }

    if (!endpoint) {
      composeMailto(data);
      setStatus("sent");
      return;
    }

    data.append("page", window.location.pathname);
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
      window.turnstile?.reset();
    } catch {
      setStatus("error");
      window.turnstile?.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card relative p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="04xx xxx xxx"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={`mt-1.5 ${fieldClass}`}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rig" className={labelClass}>
            Vehicle / Equipment
          </label>
          <input
            id="rig"
            name="rig"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="e.g. 2019 Toyota Hilux 2.8, or CAT 259D3"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`mt-1.5 ${fieldClass} resize-y`}
            placeholder="Tell us what you're after"
          />
        </div>
      </div>

      {/* Honeypot — hidden from real visitors, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {endpoint && turnstileSiteKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          <div
            className="cf-turnstile mt-6"
            data-sitekey={turnstileSiteKey}
            data-theme="dark"
          />
        </>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowIcon className="h-4 w-4" />
        </button>
        <p className="text-xs text-muted" aria-live="polite">
          {status === "sent" &&
            (endpoint
              ? "Thanks — enquiry received. We'll be in touch shortly."
              : "Opening your email app — if nothing happens, email us directly.")}
          {status === "error" && (
            <>
              Something went wrong — call{" "}
              <a href={`tel:${site.phoneIntl}`} className="text-sand">
                {site.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.email}`} className="text-sand">
                email us directly
              </a>
              .
            </>
          )}
          {status === "idle" &&
            !endpoint &&
            "This opens your email app addressed to our office."}
          {status === "idle" && endpoint && "We usually reply within one business day."}
        </p>
      </div>
    </form>
  );
}
