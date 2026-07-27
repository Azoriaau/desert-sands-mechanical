import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./icons";

export function CTABand({
  heading = "Ready to wake your rig up?",
  sub = "Custom dyno tunes, 4WD servicing and performance upgrades — and if it's bigger than a ute, we've got that covered too.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div className="tread absolute inset-0 opacity-60" aria-hidden />
      <div className="container-x relative flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-3 text-muted">{sub}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phoneIntl}`} className="btn btn-primary">
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-outline">
            Contact us
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
