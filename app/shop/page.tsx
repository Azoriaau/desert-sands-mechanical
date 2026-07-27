import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The Desert Sands Mechanical online shop is coming soon. Call us in the meantime for parts and gear.",
  alternates: { canonical: "/shop" },
  robots: { index: false, follow: true },
};

export default function ShopPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="container-x relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Coming soon</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          We&rsquo;re building out our online shop. In the meantime, give us a
          call for parts, merch and gear, or drop us a line and we&rsquo;ll sort
          you out.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phoneIntl}`} className="btn btn-primary">
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
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
