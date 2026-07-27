import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { CheckList, Callout } from "@/components/Content";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Diesel Dyno Tuning",
  description:
    "In-house dyno tuning for diesel 4x4s, RWD vehicles, trucks and plant. Custom calibrations validated by real-time data. Geraldton & the Midwest, WA.",
  path: "/tuning",
  keywords: [
    "diesel dyno tuning Geraldton",
    "4WD tuning",
    "custom diesel tune",
    "truck economy tune",
    "DPF EGR delete off-road",
  ],
});

const categories = [
  "4WD engine & transmission tunes",
  "Truck performance & economy tunes",
  "Earthmoving plant & equipment tuning",
  "Emission control solutions (off-road / racing use only)",
];

export default function TuningPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuning"
        crumb="Tuning"
        title="Torque where you need it. Power when you want it."
        intro="Desert Sands Mechanical offers tuning solutions for diesel vehicles and machines. We use an in-house dynamometer to custom-tune 4x4s and rear-wheel-drive vehicles, with guaranteed work, plus specialised calibrations for trucks, earthmoving and agricultural equipment tailored to how they actually work."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">What we tune</h2>
            <p className="mt-4 text-muted">
              Whether it&rsquo;s a weekend tourer that needs to tow, a fleet
              truck chasing fuel economy, or a stock earthmover working harder
              than it was shipped to, we build the calibration around the job.
            </p>
            <CheckList items={categories} className="mt-8" />
          </div>
          <div className="space-y-5">
            <Callout title="Calibrated solutions, guaranteed by data">
              Live dyno tuning with real-time monitoring for passenger and 4x4
              vehicles, and rigorously tested, pre-validated calibration data for
              heavy applications. We rule out the guess work.
            </Callout>
            <Callout title="Tuned for work. Ready for play.">
              Low-end torque, improved fuel economy, sharper throttle response
              and transmission refinement, built for heavy hauling, agricultural
              duty and recreational off-road.
            </Callout>
            <Callout title="Emissions control — off-road / racing use only">
              Specialised emissions strategies for off-road, agricultural and
              motorsport applications on non-road-registered machinery, to
              address SCR derates, plugged DPFs and EGR issues.
            </Callout>
          </div>
        </div>
      </section>

      <CTABand
        heading="Book your vehicle in for a tune"
        sub="Tell us your platform and what you want out of it, and we'll map out the right tune. Dyno time is limited, so get in early."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: "Diesel Dyno Tuning",
            description:
              "In-house dyno tuning and custom calibration for diesel 4x4s, RWD vehicles, trucks, and earthmoving plant.",
            path: "/tuning",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tuning", path: "/tuning" },
          ]),
        ]}
      />
    </>
  );
}
