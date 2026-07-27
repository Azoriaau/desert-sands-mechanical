import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { FeatureCards } from "@/components/Content";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { testimonials } from "@/lib/site";
import { WrenchIcon, GaugeIcon, ShieldIcon, BoltIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Diesel 4WD Servicing & Performance",
  description:
    "Diesel 4WD servicing, diagnostics and performance upgrades in Geraldton. Logbook servicing to full custom dyno tunes that wake your rig up.",
  path: "/diesel-4wd",
  keywords: [
    "diesel 4WD service Geraldton",
    "4x4 servicing",
    "Hilux tune",
    "diesel performance upgrades",
    "4WD diagnostics",
  ],
});

const services = [
  {
    title: "Logbook & preventative servicing",
    body: "Manufacturer-spec servicing that keeps your warranty intact and your rig reliable, whether it's a daily driver or a remote tourer.",
    icon: <WrenchIcon className="h-5 w-5" />,
  },
  {
    title: "Fault diagnosis & driveability",
    body: "Advanced scan tools and OEM data to trace the real cause, not just the symptom. Limp modes, DTCs, poor economy and rough running sorted.",
    icon: <ShieldIcon className="h-5 w-5" />,
  },
  {
    title: "Performance upgrades",
    body: "Intakes, exhausts, cooling and supporting mods matched to your goals and installed to work together, not against each other.",
    icon: <BoltIcon className="h-5 w-5" />,
  },
  {
    title: "Custom dyno tuning",
    body: "In-house dyno tuning for real, repeatable gains in power, torque, throttle response and towing manners. Guaranteed work.",
    icon: <GaugeIcon className="h-5 w-5" />,
  },
];

export default function Diesel4wdPage() {
  const t = testimonials[0];
  return (
    <>
      <PageHero
        eyebrow="Diesel 4WDs"
        crumb="Diesel 4WDs"
        title="Built to work. Tuned to rip."
        intro="Servicing, diagnostics and performance for diesel 4WDs. From routine maintenance to full custom dyno tunes, we get your 4x4 reliable, efficient and making the numbers to match."
      />

      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">Everything your 4x4 needs</h2>
          <p className="mt-4 text-muted">
            One workshop for the whole job: keep it healthy, find the fault, add
            the power, and back it with data on the dyno.
          </p>
        </div>
        <div className="mt-10">
          <FeatureCards items={services} />
        </div>
      </section>

      {t && (
        <section className="border-t border-border bg-ink-2">
          <figure className="container-x max-w-3xl py-16 text-center md:py-20">
            <p className="eyebrow">Real results</p>
            <blockquote className="mt-6 font-display text-2xl leading-tight md:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-semibold text-fg">{t.author}</span>
              {t.detail ? ` · ${t.detail}` : ""}
            </figcaption>
            <p className="mt-6 text-sm text-muted">
              Chasing similar gains?{" "}
              <Link href="/tuning" className="text-sand hover:underline">
                See our tuning services
              </Link>
              .
            </p>
          </figure>
        </section>
      )}

      <CTABand
        heading="Get your 4WD booked in"
        sub="Servicing, diagnostics or a custom tune, tell us the vehicle and what you're after."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: "Diesel 4WD Servicing & Performance",
            description:
              "Servicing, diagnostics, performance upgrades and custom dyno tuning for diesel 4WDs.",
            path: "/diesel-4wd",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Diesel 4WDs", path: "/diesel-4wd" },
          ]),
        ]}
      />
    </>
  );
}
