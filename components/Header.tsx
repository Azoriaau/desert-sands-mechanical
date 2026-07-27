"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo
            className="h-16 md:h-20"
            markClassName="mt-2 h-[5.25rem] w-auto shrink-0 self-start drop-shadow-[0_6px_16px_rgba(0,0,0,0.55)] md:h-[6.5rem]"
            wordmark={false}
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`px-3 py-2 font-display text-sm uppercase tracking-wide transition-colors hover:text-sand ${
                isActive(item.href) ? "text-sand" : "text-fg/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneIntl}`}
            className="btn btn-primary hidden sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden md:inline">{site.phone}</span>
            <span className="md:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-border text-fg lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-ink-2 lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-border/60 py-3 font-display text-lg uppercase tracking-wide ${
                  isActive(item.href) ? "text-sand" : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneIntl}`}
              className="btn btn-primary mt-4"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
