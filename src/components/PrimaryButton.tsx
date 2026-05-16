import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  children: ReactNode;
  className?: string;
};

const primaryClass =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-indigo-500/20 transition-all duration-200 ease-out hover:brightness-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 active:brightness-95";

export function PrimaryButton({ to, children, className = "" }: Props) {
  const cn = `${primaryClass} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cn}>
        {children}
      </Link>
    );
  }
  return <button type="button" className={cn}>{children}</button>;
}
