import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { hireItems, site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Equipment Hire",
  description:
    "Mine-spec and civil equipment hire in Geraldton: positracks, excavators, loaders, compaction gear, generators, pressure washers, laser levels and Starlink.",
  path: "/equipment-hire",
  keywords: [
    "equipment hire Geraldton",
    "excavator hire",
    "positrack hire",
    "generator hire",
    "mine spec equipment hire WA",
  ],
});

export default function EquipmentHirePage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment Hire"
        crumb="Equipment Hire"
        title="Gear that turns up ready to work."
        intro="Check out our range of hire equipment. Well-maintained, mine-spec and civil-ready machines and tools, available when your job is."
      />

      <section className="container-x py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl">Our hire fleet</h2>
            <p className="mt-4 text-muted">
              Rates and availability change with the season and the job. Give us
              a call and we&rsquo;ll sort the right gear for your site.
            </p>
          </div>
          <a href={`tel:${site.phoneIntl}`} className="btn btn-primary">
            <PhoneIcon className="h-4 w-4" />
            Check availability
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hireItems.map((item, i) => (
            <li key={item} className="card flex items-center gap-4 p-5">
              <span
                className="font-display text-lg font-bold text-sand/70"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium text-fg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        heading="Need something on site this week?"
        sub="Tell us the job and the location, and we'll let you know what's available and when we can have it there."
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: "Equipment Hire",
            description:
              "Mine-spec and civil equipment hire including positracks, excavators, loaders, compaction gear, generators, pressure washers and Starlink.",
            path: "/equipment-hire",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Equipment Hire", path: "/equipment-hire" },
          ]),
        ]}
      />
    </>
  );
}
