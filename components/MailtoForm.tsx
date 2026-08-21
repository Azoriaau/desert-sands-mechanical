"use client";

import { useState } from "react";
import { site, services } from "@/lib/site";
import { ArrowIcon } from "./icons";

/**
 * Fallback used when NEXT_PUBLIC_CONTACT_ENDPOINT is unset: composes the
 * enquiry in the visitor's mail app instead of posting it anywhere. Kept so a
 * build without the endpoint still has a working contact page – see
 * ContactForm.tsx. Once the Azoria Leads endpoint is configured everywhere the
 * site is built, this file can go.
 */

const fieldClass =
  "w-full rounded border border-border bg-ink px-3.5 py-2.5 text-fg placeholder:text-muted/70 focus:border-sand";
const labelClass =
  "font-display text-xs uppercase tracking-widest text-muted";

export function MailtoForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Honeypot: real visitors never see this field. Pretend success so bots
    // don't learn they were filtered.
    if (String(data.get("_gotcha") ?? "") !== "") {
      setSent(true);
      e.currentTarget.reset();
      return;
    }

    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Service: ${data.get("service") ?? ""}`,
      `Vehicle / Equipment: ${data.get("rig") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    const subject = `Enquiry${data.get("service") ? ` – ${data.get("service")}` : ""}${
      data.get("name") ? ` from ${data.get("name")}` : ""
    }`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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

      {/* Honeypot – hidden from real visitors, tempting to bots. */}
      <div
        aria-hidden
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary">
          Send enquiry
          <ArrowIcon className="h-4 w-4" />
        </button>
        <p className="text-xs text-muted" aria-live="polite">
          {sent
            ? "Opening your email app – if nothing happens, email us directly."
            : "This opens your email app addressed to our office."}
        </p>
      </div>
    </form>
  );
}
