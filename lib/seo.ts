import type { Metadata } from "next";
import { site, services } from "./site";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

/** Per-page metadata with a canonical URL and page-specific OG/Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = path;
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

const streetAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

/** schema.org AutoRepair / LocalBusiness node – the anchor for local SEO. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon.svg"),
    priceRange: "$$",
    currenciesAccepted: "AUD",
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.suburb}`,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${site.legalName}, ${streetAddress}`
    )}`,
    areaServed: [
      { "@type": "City", name: "Geraldton" },
      { "@type": "AdministrativeArea", name: "Mid West, Western Australia" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [site.social.facebook, site.social.instagram, site.social.tiktok],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: absoluteUrl(`/${s.slug}`),
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-AU",
    publisher: { "@id": `${site.url}/#business` },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Geraldton" },
      { "@type": "AdministrativeArea", name: "Mid West, Western Australia" },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
