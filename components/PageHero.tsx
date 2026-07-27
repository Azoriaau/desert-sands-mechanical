import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink-2">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="container-x relative pt-12 pb-14 md:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-sand">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-fg/80" aria-current="page">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>
        )}
      </div>
    </section>
  );
}
