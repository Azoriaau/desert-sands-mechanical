import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { CheckList } from "@/components/Content";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Earthmoving & Plant Repairs",
  description:
    "Fixed and mobile plant repairs for mining and civil fleets, crushers, dozers, dump trucks, generators and hi-rail. 15+ years across WA. Field service available.",
  path: "/earthmoving-plant",
  keywords: [
    "earthmoving repairs WA",
    "plant mechanic Geraldton",
    "mobile plant field service",
    "Caterpillar repairs",
    "hydraulic repairs mining",
  ],
});

const offer = [
  "Comprehensive repairs for major heavy plant and earthmoving brands",
  "Electrical, hydraulic and mechanical expertise, plus basic boilermaking",
  "OEM and aftermarket tooling for complex fault resolution",
  "Workshop rated for heavy lifts, up to and including a Caterpillar D10T",
  "Hi-rail equipment servicing",
  "Groeneveld grease system repairs with specialty tooling",
  "Advanced diagnostic software for multiple manufacturers",
  "Full maintenance program management for mining and civil clients",
];

export default function EarthmovingPage() {
  return (
    <>
      <PageHero
        eyebrow="Earthmoving & Plant"
        crumb="Earthmoving & Plant"
        title="Built for the toughest jobs."
        intro="Downtime costs. We keep fleets operational in rugged, remote locations, with over 15 years across the mining and civil construction sectors. If it rolls, rips, crushes, stacks or grades, we've worked on it."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">Equipment we service</h2>
            <p className="mt-4 text-muted">
              Mobile crushers, dozers, dump trucks, generators and hi-rail gear.
              From single breakdowns to full workshop rebuilds and managed
              maintenance programs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Mobile crushers",
                "Dozers",
                "Dump trucks",
                "Generators",
                "Hi-rail gear",
                "Loaders & excavators",
              ].map((x) => (
                <div
                  key={x}
                  className="card px-4 py-3 text-sm font-medium text-fg/90"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">What we offer</h2>
            <p className="mt-4 text-muted">
              We own uptime. Skilled people, capacity for on-site emergencies
              and workshop rebuilds, and deep hydraulic-system expertise, trusted
              by operators across WA.
            </p>
            <CheckList items={offer} className="mt-8" />
          </div>
        </div>
      </section>

      <CTABand
        heading="Keep your fleet running strong"
        sub="On-site emergency, scheduled maintenance or a full rebuild, get in touch and we'll keep you moving."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: "Earthmoving & Plant Repairs",
            description:
              "Fixed and mobile plant repairs for mining and civil fleets: crushers, dozers, dump trucks, generators, hi-rail and more.",
            path: "/earthmoving-plant",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Earthmoving & Plant", path: "/earthmoving-plant" },
          ]),
        ]}
      />
    </>
  );
}
