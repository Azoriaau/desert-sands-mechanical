import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "We couldn't find that page. Head back to Desert Sands Mechanical or get in touch.",
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-6xl md:text-8xl">Dead end.</h1>
      <p className="mt-5 max-w-md text-muted">
        We couldn&rsquo;t find that page. It may have moved, or the link&rsquo;s
        seen better days. Let&rsquo;s get you back on the road.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Back to home
          <ArrowIcon className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact us
        </Link>
      </div>
    </section>
  );
}
