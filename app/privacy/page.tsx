import Link from "next/link";
import type { Metadata } from "next";
// Subpath, not the package root: the root is "use client" for the form's
// sake, and this page is server-rendered. Keeps the countries named here in
// step with the ones in the form's collection notice.
import {
  AZORIA_PRIVACY_URL,
  privacyPolicyClause,
} from "@azoria/lead-form/disclosure";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Desert Sands Mechanical collects, uses and stores your details when you enquire through this website.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "1 August 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-xl uppercase tracking-wide text-fg">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-muted [&_a]:text-sand [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="What we collect when you contact us, why we collect it, where it's kept and how to have it deleted."
        crumb="Privacy"
      />

      <div className="container-x py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-muted">Last updated {UPDATED}.</p>

          <div className="mt-10">
            <Section title="Who we are">
              <p>
                {site.legalName} (ABN {site.abn}), {site.address.street},{" "}
                {site.address.suburb} {site.address.state}{" "}
                {site.address.postcode}. You can reach us on{" "}
                <a href={`tel:${site.phoneIntl}`}>{site.phone}</a> or at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </Section>

            <Section title="What we collect">
              <p>
                When you send an enquiry through this website we collect your
                name, phone number, email address, the service you selected,
                your vehicle or equipment details and your message.
              </p>
              <p>
                We also record which page you sent the enquiry from, your IP
                address and the date and time. That information helps us answer
                you properly and helps block automated spam.
              </p>
              <p>
                We don&rsquo;t ask for payment details through this website.
              </p>
            </Section>

            <Section title="Why we collect it">
              <p>
                Only to answer your enquiry and to carry out any work you ask us
                about. We do not sell your details, and we do not use them for
                marketing or add you to a mailing list.
              </p>
            </Section>

            <Section title="Where your enquiry is stored">
              {/* Drop-in from the package — same paragraph on every Azoria
                  client site, so the countries and Azoria's role are changed
                  in one place rather than forty. */}
              <p>
                {privacyPolicyClause()}{" "}
                <a href={AZORIA_PRIVACY_URL} target="_blank" rel="noopener">
                  Azoria&rsquo;s privacy policy
                </a>{" "}
                covers how they handle it.
              </p>
            </Section>

            <Section title="Emails we send">
              <p>
                When you enquire, we email you a copy of what you sent so you
                have a record of it and know who holds your details. We also
                email ourselves a notification so your enquiry gets picked up.
              </p>
            </Section>

            <Section title="Deleting your enquiry">
              <p>
                The copy we email you includes a link to delete your enquiry.
                Use it whenever you like and your details are deleted from the
                enquiry system.
              </p>
              <p>
                You can also email us at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
                and ask us to delete them, or to give you a copy of what we hold
                or correct anything that&rsquo;s wrong.
              </p>
              <p>
                Your enquiry is kept while we may still need it &mdash; to
                finish a job, answer follow-up questions, or meet our
                record-keeping obligations &mdash; and deleted when you ask.
              </p>
            </Section>

            <Section title="Website analytics">
              <p>
                We use Google Analytics to see how many people visit the site
                and which pages get used. It sets cookies in your browser and
                reports to us in aggregate &mdash; we don&rsquo;t use it to
                identify individual visitors.
              </p>
              <p>
                That data is processed by Google, including on servers outside
                Australia. You can opt out with Google&rsquo;s{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener"
                >
                  browser add-on
                </a>
                , or by blocking cookies in your browser settings.
              </p>
            </Section>

            <Section title="Spam protection">
              <p>
                Our contact form uses Cloudflare Turnstile to tell real people
                from bots. Cloudflare processes limited technical information
                about your browser to do that. It is configured not to set a
                tracking cookie.
              </p>
            </Section>

            <Section title="Questions or complaints">
              <p>
                Contact us on <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>{" "}
                or at <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
                and we&rsquo;ll sort it out. If you&rsquo;re not satisfied with how
                we&rsquo;ve handled it, you can contact the Office of the
                Australian Information Commissioner at{" "}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">
                  oaic.gov.au
                </a>
                .
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If we change how we handle your details we&rsquo;ll update this
                page and the date at the top.
              </p>
            </Section>
          </div>

          <p className="mt-12 text-sm text-muted">
            <Link href="/contact" className="text-sand underline underline-offset-2">
              Back to contact
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
