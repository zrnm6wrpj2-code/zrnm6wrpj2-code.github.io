import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  children: ReactNode;
  className?: string;
};

const secondaryClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors duration-150 ease-out hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 active:bg-slate-100";

export function SecondaryButton({ to, children, className = "" }: Props) {
  const cn = `${secondaryClass} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cn}>
        {children}
      </Link>
    );
  }
  return <button type="button" className={cn}>{children}</button>;
}
