import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/icons";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Desert Sands Mechanical in Utakarra, Geraldton. Call 0407 295 782, email the office, or send an enquiry.",
  path: "/contact",
  keywords: [
    "contact Desert Sands Mechanical",
    "diesel mechanic Geraldton contact",
    "breakdown service Geraldton",
  ],
});

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.legalName}, ${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`
)}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title="Get in touch"
        intro="Talk to the tuner about your 4WD, or the workshop about your fleet or plant. Call us, email the office, or send an enquiry and we'll get back to you."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <a
              href={`tel:${site.phoneIntl}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-sand/60"
            >
              <IconBox>
                <PhoneIcon className="h-5 w-5" />
              </IconBox>
              <div>
                <div className={metaLabel}>Phone</div>
                <div className="text-lg text-fg">{site.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-sand/60"
            >
              <IconBox>
                <MailIcon className="h-5 w-5" />
              </IconBox>
              <div className="min-w-0">
                <div className={metaLabel}>Email</div>
                <div className="truncate text-lg text-fg">{site.email}</div>
              </div>
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-sand/60"
            >
              <IconBox>
                <PinIcon className="h-5 w-5" />
              </IconBox>
              <div>
                <div className={metaLabel}>Workshop</div>
                <div className="text-fg">
                  {site.address.street}, {site.address.suburb}{" "}
                  {site.address.state} {site.address.postcode}
                </div>
                <div className="mt-0.5 text-sm text-sand">Get directions</div>
              </div>
            </a>

            <div className="card p-5">
              <div className="flex items-center gap-4">
                <IconBox>
                  <ClockIcon className="h-5 w-5" />
                </IconBox>
                <div>
                  <div className={metaLabel}>Hours</div>
                  <div className="text-fg">{site.hours.weekday}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Social href={site.social.facebook} label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </Social>
              <Social href={site.social.instagram} label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Social>
              <Social href={site.social.tiktok} label="TikTok">
                <TiktokIcon className="h-5 w-5" />
              </Social>
              <span className="ml-auto text-xs text-muted">
                ABN {site.abn}
              </span>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Desert Sands Mechanical",
            url: absoluteUrl("/contact"),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}

const metaLabel = "font-display text-xs uppercase tracking-widest text-muted";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-sand/10 text-sand ring-1 ring-inset ring-sand/20"
      aria-hidden
    >
      {children}
    </span>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded border border-border text-muted transition-colors hover:border-sand hover:text-sand"
    >
      {children}
    </a>
  );
}
