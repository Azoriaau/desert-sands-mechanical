import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-ink-2">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Logo className="h-11 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted">
            4WD dyno tuning and diesel performance, backed by full heavy
            diesel capability. Proudly servicing {site.areaServed}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={site.social.tiktok} label="TikTok">
              <TiktokIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-1">
          <h2 className="font-display text-sm uppercase tracking-widest text-muted">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-fg/85 transition-colors hover:text-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-1">
          <h2 className="font-display text-sm uppercase tracking-widest text-muted">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phoneIntl}`}
                className="flex items-start gap-2.5 text-fg/85 transition-colors hover:text-sand"
              >
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 break-all text-fg/85 transition-colors hover:text-sand"
              >
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-fg/85">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <span>
                {site.address.street}, {site.address.suburb}{" "}
                {site.address.state} {site.address.postcode}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-fg/85">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
              <span>{site.hours.weekday}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            ABN {site.abn} · Licensed Repairer, Western Australia ·{" "}
            <Link href="/privacy" className="transition-colors hover:text-sand">
              Privacy
            </Link>
          </p>
          <p>
            Website by{" "}
            <a
              href="https://azoria.com.au"
              target="_blank"
              rel="noopener"
              className="text-[#f15a24] transition-colors hover:text-sand"
            >
              Azoria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      className="inline-flex h-10 w-10 items-center justify-center rounded border border-border text-muted transition-colors hover:border-sand hover:text-sand"
    >
      {children}
    </a>
  );
}
