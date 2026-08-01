"use client";

import Link from "next/link";
import { LeadForm } from "@azoria/lead-form";
import { site, services } from "@/lib/site";
import { MailtoForm } from "./MailtoForm";

/**
 * Enquiries post to Azoria Leads via @azoria/lead-form.
 *
 * Both values are inlined into the client bundle at build time, so whichever
 * machine runs `next build` needs them — they are not read at runtime. Neither
 * is a secret: the ingest endpoint only accepts enquiries and can be rotated,
 * and a Turnstile site key is public by design.
 *
 * With the endpoint unset the form falls back to a mailto: composer, so a build
 * without it still has a working contact page.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldClass =
  "w-full rounded border border-border bg-ink px-3.5 py-2.5 text-fg placeholder:text-muted/70 focus:border-sand";
const labelClass =
  "font-display text-xs uppercase tracking-widest text-muted";

export function ContactForm() {
  if (!endpoint) return <MailtoForm />;

  return (
    <LeadForm
      endpoint={endpoint}
      businessName={site.name}
      services={[...services.map((s) => s.title), "Other"]}
      showRig
      turnstileSiteKey={turnstileSiteKey}
      /* The package default is written from the vendor's side — it calls the
         business "they" while promising "we'll email you", which reads wrong
         on the business's own site. Passing `notice` replaces the whole
         default including its privacy-policy link, so this carries its own. */
      notice={
        <>
          We use your details only to answer this enquiry &mdash; never sold,
          never used for marketing. You&rsquo;ll get a copy by email with a link
          to delete it at any time. See our{" "}
          <Link
            href="/privacy"
            className="text-sand underline underline-offset-2"
          >
            privacy policy
          </Link>
          .
        </>
      }
      /* Kept verbatim from the previous form — the package's defaults would
         otherwise silently reword a live client site ("Your name", "What do
         you need?"). */
      labels={{
        name: "Name",
        phone: "Phone",
        email: "Email",
        service: "Service",
        rig: "Vehicle / Equipment",
        message: "How can we help?",
        submit: "Send enquiry",
        successHeading: "Enquiry received.",
        successBody: "Thanks — we'll be in touch shortly.",
      }}
      classNames={{
        form: "card grid gap-5 p-6 md:p-8",
        row: "grid gap-5 sm:grid-cols-2",
        label: labelClass,
        input: `mt-1.5 ${fieldClass}`,
        select: `mt-1.5 ${fieldClass}`,
        textarea: `mt-1.5 ${fieldClass} resize-y`,
        notice: "text-xs text-muted",
        noticeLink: "text-sand underline underline-offset-2",
        consent: "flex items-start gap-2 text-xs text-muted",
        error: "text-sm text-ember",
        button: "btn btn-primary justify-self-start",
        success: "card p-6 md:p-8",
        successHeading: "font-display text-lg text-fg",
        successBody: "mt-2 text-sm text-muted",
      }}
    />
  );
}
