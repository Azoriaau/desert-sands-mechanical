import { CheckIcon } from "./icons";

export function CheckList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sand" />
          <span className="text-fg/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureCards({
  items,
}: {
  items: { title: string; body: string; icon?: React.ReactNode }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="card p-6">
          {item.icon && (
            <span
              className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded bg-sand/10 text-sand ring-1 ring-inset ring-sand/20"
              aria-hidden
            >
              {item.icon}
            </span>
          )}
          <h3 className="text-lg">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card border-l-2 border-l-sand p-6">
      <h3 className="text-lg text-sand">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
