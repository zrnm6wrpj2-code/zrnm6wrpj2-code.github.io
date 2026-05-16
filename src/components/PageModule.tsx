import type { ReactNode } from "react";

type Props = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/**
 * Clear bordered “panel” for desktop-style pages: header strip + content area.
 */
export function PageModule({
  title,
  eyebrow,
  children,
  className = "",
  contentClassName = "",
}: Props) {
  return (
    <section
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className}`.trim()}
    >
      <header className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      </header>
      <div
        className={`px-5 py-6 sm:px-8 sm:py-8 ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
