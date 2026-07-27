import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { CheckList } from "@/components/Content";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Road Transport Servicing & Repairs",
  description:
    "Precision servicing and repairs for light trucks, heavy prime movers and trailers across Japanese, European and American platforms. OEM-grade tooling, Geraldton WA.",
  path: "/road-transport",
  keywords: [
    "truck repairs Geraldton",
    "prime mover servicing",
    "trailer repairs",
    "heavy vehicle mechanic",
    "diesel truck engine rebuild",
  ],
});

const repairs = [
  "Engine repairs: timing case reseals, valve stem replacements, valve adjustments and bottom-end rebuilds",
  "Transmission repairs and clutch replacements",
  "Air system diagnostics, compressor fault tracing and replacement",
  "Hydraulic system diagnostics and repairs",
  "Electrical system diagnostics and repairs",
];

const strengths = [
  "OEM-grade tooling and advanced scan tools compatible with most trucks",
  "Over 15 years of trade experience",
  "Comprehensive library of OEM manuals and literature",
  "Japanese, European and American truck platforms",
];

export default function RoadTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Road Transport"
        crumb="Road Transport"
        title="Built for big rigs. Backed by big tools."
        intro="We keep Australia's road transport fleet moving with precision servicing and maintenance for light trucks, heavy prime movers and heavy trailers, across Japanese, European and American platforms."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Repairs & servicing</h2>
            <p className="mt-4 text-muted">
              We rule out the guess work to concisely and repeatedly deliver
              professional-quality repairs, aligned with the manufacturer&rsquo;s
              design specifications rather than generic solutions.
            </p>
            <CheckList items={repairs} className="mt-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">Why fleets trust us</h2>
            <p className="mt-4 text-muted">
              Accuracy and efficient turnaround, so your trucks spend less time
              in the workshop and more time earning.
            </p>
            <CheckList items={strengths} className="mt-8" />
          </div>
        </div>
      </section>

      <CTABand
        heading="Keep your fleet earning"
        sub="Scheduled servicing or an urgent repair, talk to us about your trucks and trailers."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: "Road Transport Servicing & Repairs",
            description:
              "Servicing and repairs for light trucks, heavy prime movers and trailers across Japanese, European and American platforms.",
            path: "/road-transport",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Road Transport", path: "/road-transport" },
          ]),
        ]}
      />
    </>
  );
}
