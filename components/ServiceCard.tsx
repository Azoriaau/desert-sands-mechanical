import Link from "next/link";
import type { Service } from "@/lib/site";
import { ArrowIcon } from "./icons";

export function ServiceCard({
  service,
  icon,
}: {
  service: Service;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={`/${service.slug}`}
      className="card group relative flex flex-col p-6 transition-colors hover:border-sand/60"
    >
      <span
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded bg-sand/10 text-sand ring-1 ring-inset ring-sand/20"
        aria-hidden
      >
        {icon}
      </span>
      <h3 className="text-xl">{service.title}</h3>
      <p className="mt-1 font-display text-sm uppercase tracking-wide text-sand/90">
        {service.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm uppercase tracking-wide text-fg transition-colors group-hover:text-sand">
        Learn more
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
