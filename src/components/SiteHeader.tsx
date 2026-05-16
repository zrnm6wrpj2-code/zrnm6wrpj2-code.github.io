import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Me", end: false },
  { to: "/contact", label: "Contact Me", end: false },
  { to: "/works", label: "Works", end: false },
] as const;

function desktopNavClass(isActive: boolean) {
  return [
    "inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-[0.9375rem] font-semibold tracking-tight transition-colors duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    isActive
      ? "bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200/80"
      : "text-slate-700 hover:bg-white hover:text-indigo-700",
  ].join(" ");
}

function mobileNavClass(isActive: boolean) {
  return [
    "flex min-h-14 w-full items-center rounded-lg px-4 text-base font-semibold transition-colors duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    isActive
      ? "bg-indigo-50 text-indigo-800 ring-1 ring-indigo-100"
      : "text-slate-800 hover:bg-slate-50",
  ].join(" ");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
          <Link
            to="/"
            className="group -m-2 flex flex-col rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <span className="block text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
              XIAO
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                HONG
              </span>
              QUN
            </span>
            <span className="mt-0.5 hidden text-xs font-medium text-slate-500 sm:block">
              Personal site
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => desktopNavClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-indigo-200 hover:bg-white hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-6 w-6" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />
              )}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-slate-200 bg-slate-50 md:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6"
            aria-label="Primary mobile"
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => mobileNavClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
