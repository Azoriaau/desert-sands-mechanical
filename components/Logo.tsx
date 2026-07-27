import Image from "next/image";

export function Logo({
  className,
  markClassName,
  wordmark = true,
}: {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/brand/dsm-badge.png"
        alt=""
        width={800}
        height={635}
        className={markClassName ?? "h-full w-auto shrink-0"}
        priority
      />
      {wordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95em] font-semibold uppercase tracking-[0.02em] text-fg">
            Desert Sands
          </span>
          <span className="font-display text-[0.62em] font-semibold uppercase tracking-[0.34em] text-sand">
            Mechanical
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Desert Sands Mechanical emblem"
    >
      <defs>
        <linearGradient id="dsm-sand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a5f3fc" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="9"
        fill="#0a0a0c"
        stroke="#2a2a31"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="18.5" r="6.2" fill="url(#dsm-sand)" />
      <path
        d="M7 34c3.6-4.8 6.3-7.2 9-7.2 3 0 4.2 3.4 7.4 3.4 3.4 0 4.8-4.4 8-4.4 2.6 0 5 2.2 8.6 6.2v6.5A2.5 2.5 0 0 1 37.5 41h-27A2.5 2.5 0 0 1 8 38.5Z"
        fill="url(#dsm-sand)"
      />
      <path
        d="M7 34c3.6-4.8 6.3-7.2 9-7.2 3 0 4.2 3.4 7.4 3.4 3.4 0 4.8-4.4 8-4.4 2.6 0 5 2.2 8.6 6.2"
        fill="none"
        stroke="#0a0a0c"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
