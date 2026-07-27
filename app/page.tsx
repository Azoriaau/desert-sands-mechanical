import Link from "next/link";
import { services, stats, testimonials, site } from "@/lib/site";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  GaugeIcon,
  WrenchIcon,
  TruckIcon,
  ExcavatorIcon,
  ForkliftIcon,
  PhoneIcon,
  ArrowIcon,
  ShieldIcon,
  BoltIcon,
  ClockIcon,
  PinIcon,
} from "@/components/icons";

const serviceIcons: Record<string, React.ReactNode> = {
  tuning: <GaugeIcon className="h-6 w-6" />,
  "diesel-4wd": <WrenchIcon className="h-6 w-6" />,
  "road-transport": <TruckIcon className="h-6 w-6" />,
  "earthmoving-plant": <ExcavatorIcon className="h-6 w-6" />,
  "equipment-hire": <ForkliftIcon className="h-6 w-6" />,
};

const whyPoints = [
  {
    icon: <GaugeIcon className="h-5 w-5" />,
    title: "In-house dyno tuning",
    body: "Every 4x4 and RWD tune is developed and validated on our own dynamometer, so gains are real and repeatable.",
  },
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Licensed & guaranteed",
    body: "A licensed WA repairer with 15+ years across performance tuning, 4WDs, road transport and mining. Guaranteed work.",
  },
  {
    icon: <BoltIcon className="h-5 w-5" />,
    title: "Data over guesswork",
    body: "OEM-grade tooling, advanced scan tools and validated calibration data. We rule out the guess work.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <WhySection />
      {testimonials[0] && <TestimonialSection />}
      <ServiceAreaSection />
      <CTABand />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="dusk absolute inset-0" aria-hidden />
      <div className="container-x relative pt-14 pb-36 md:pt-20 md:pb-48">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Utakarra workshop — Geraldton &amp; the Midwest, WA
            </p>
            <h1 className="mt-6 text-5xl leading-[0.9] sm:text-7xl lg:text-[5.25rem] xl:text-8xl">
              More torque.
              <br />
              <span className="text-stroke">Less downtime.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted md:text-xl">
              Custom dyno tunes, diesel 4WD servicing and performance builds
              out of Utakarra — every job proven on our own dyno. And when the
              Midwest&rsquo;s big gear breaks down, they call us too.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={`tel:${site.phoneIntl}`}
                className="btn btn-primary text-base"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link
                href="/tuning"
                className="group inline-flex items-center gap-2 py-2 font-display text-sm font-semibold uppercase tracking-wide text-fg transition-colors hover:text-sand"
              >
                What we do
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <DynoCard />
        </div>
      </div>
      <Dunes />
    </section>
  );
}

function DynoCard() {
  return (
    <figure className="card relative z-10 overflow-hidden">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-fg">
          Dyno run — Hilux 2.8
        </span>
        <span className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Measured in-house
        </span>
      </figcaption>
      <svg
        viewBox="0 0 340 190"
        className="block w-full"
        role="img"
        aria-label="Dyno chart: power up from 177 to 215 horsepower and torque up from 450 to 530 newton metres after tuning"
      >
        {/* grid */}
        <g stroke="#2a2a31" strokeWidth="1">
          <path d="M20 20H320M20 57.5H320M20 95H320M20 132.5H320M20 170H320" />
          <path d="M20 20V170M95 20V170M170 20V170M245 20V170M320 20V170" opacity="0.5" />
        </g>
        {/* stock (dashed) */}
        <path
          d="M20 168 C 120 165 220 140 320 92"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <path
          d="M20 158 C 70 150 100 105 160 98 S 260 100 320 102"
          fill="none"
          stroke="#e4572e"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        {/* tuned (solid) */}
        <path
          d="M20 165 C 120 160 220 110 320 40"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
        />
        <path
          d="M20 150 C 70 140 95 70 150 58 S 250 62 320 62"
          fill="none"
          stroke="#e4572e"
          strokeWidth="2.5"
        />
        <g fontSize="11" fontWeight="600" textAnchor="end">
          <text x="316" y="34" fill="#22d3ee">215 hp</text>
          <text x="255" y="50" fill="#e4572e">530 Nm</text>
        </g>
        <g fontSize="9" fill="#9a9aa4">
          <text x="24" y="34">— tuned</text>
          <text x="24" y="46">-- stock</text>
        </g>
      </svg>
      <div className="grid grid-cols-3 divide-x divide-border border-t border-border text-center">
        <div className="px-2 py-4">
          <div className="font-display text-2xl font-bold text-sand">+38</div>
          <div className="mt-0.5 text-[0.65rem] uppercase tracking-widest text-muted">
            hp at the wheels
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="font-display text-2xl font-bold text-ember">+80</div>
          <div className="mt-0.5 text-[0.65rem] uppercase tracking-widest text-muted">
            Nm of torque
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="font-display text-2xl font-bold text-fg">0</div>
          <div className="mt-0.5 text-[0.65rem] uppercase tracking-widest text-muted">
            Guesswork
          </div>
        </div>
      </div>
    </figure>
  );
}

function Dunes() {
  return (
    <svg
      className="absolute bottom-0 left-0 h-40 w-full md:h-56"
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 160 C 240 110 420 200 720 150 C 1020 100 1200 190 1440 140 L1440 220 L0 220 Z"
        fill="#101013"
      />
      <path
        d="M0 195 C 300 150 520 215 820 185 C 1120 155 1260 210 1440 180 L1440 220 L0 220 Z"
        fill="#16161b"
      />
    </svg>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-border bg-ink-2">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-8 text-center">
            <div className="font-display text-3xl font-bold text-sand md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURED_SLUGS = ["tuning", "diesel-4wd"];

function ServicesSection() {
  const featured = services.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const heavy = services.filter((s) => !FEATURED_SLUGS.includes(s.slug));
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 text-4xl md:text-5xl">
          4WDs and tuning. That&rsquo;s the main game.
        </h2>
        <p className="mt-4 text-muted">
          Dyno-proven tunes and 4x4 performance are what we&rsquo;re known for.
          Every build is measured, validated and backed on our own dynamometer.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            icon={serviceIcons[service.slug]}
          />
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Also in the shed</p>
            <h3 className="mt-2 text-2xl md:text-3xl">
              Heavy diesel &amp; site support
            </h3>
          </div>
          <p className="max-w-md text-sm text-muted">
            The same workshop keeps trucks, plant and hire gear earning across
            the Midwest.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {heavy.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="card group flex items-center gap-4 p-5 transition-colors hover:border-sand/60"
            >
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-sand/10 text-sand ring-1 ring-inset ring-sand/20"
                aria-hidden
              >
                {serviceIcons[service.slug]}
              </span>
              <span className="min-w-0">
                <span className="block font-display uppercase tracking-wide text-fg">
                  {service.title}
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {service.tagline}
                </span>
              </span>
              <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-sand" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="border-t border-border bg-ink-2">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">Why Desert Sands</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Built for work. Backed by data.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            We deliver mechanical outcomes aligned with manufacturer design
            specs, not generic fixes. Accurate diagnosis, efficient turnaround,
            and results you can measure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Get a quote
            </Link>
            <Link href="/equipment-hire" className="btn btn-outline">
              View hire fleet
            </Link>
          </div>
        </div>
        <ul className="space-y-4">
          {whyPoints.map((p) => (
            <li key={p.title} className="card flex gap-4 p-5">
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded bg-sand/10 text-sand ring-1 ring-inset ring-sand/20"
                aria-hidden
              >
                {p.icon}
              </span>
              <div>
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">From the workshop floor</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Word gets around.</h2>
      </div>
      <div className="mt-10">
        <TestimonialSlider items={testimonials} />
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="border-t border-border">
      <div className="container-x grid items-center gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <PinIcon className="h-4 w-4" /> Where we work
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Proudly servicing Geraldton & the Midwest
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Based in Utakarra, we tune and service 4WDs from right across the
            Midwest — and back it up with field service for mine sites and
            civil operations statewide. Call to check coverage for your site.
          </p>
        </div>
        <div className="card p-6">
          <dl className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sand" />
              <div>
                <dt className="font-display uppercase tracking-wide text-muted">
                  Workshop
                </dt>
                <dd className="mt-0.5 text-fg">
                  {site.address.street}, {site.address.suburb}{" "}
                  {site.address.state} {site.address.postcode}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-sand" />
              <div>
                <dt className="font-display uppercase tracking-wide text-muted">
                  Hours
                </dt>
                <dd className="mt-0.5 text-fg">{site.hours.weekday}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-sand" />
              <div>
                <dt className="font-display uppercase tracking-wide text-muted">
                  Phone
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="text-fg transition-colors hover:text-sand"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
