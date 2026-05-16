import { ArrowRight, Sparkles } from "lucide-react";
import { PageModule } from "../components/PageModule";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { WebCanvas } from "../components/WebCanvas";

export function HomePage() {
  return (
    <WebCanvas>
      <PageModule title="Home" eyebrow="Welcome">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="mb-4 inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">
              <Sparkles className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Personal homepage
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hello~ Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                my world~
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Use the top navigation to move between sections. Primary actions
              are sized for comfortable clicking on desktop and trackpads.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <PrimaryButton to="/contact">
                Contact Me
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </PrimaryButton>
              <SecondaryButton to="/works">View works</SecondaryButton>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 shadow-inner sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <span className="text-sm font-bold text-slate-800">Site map</span>
              <span className="rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                All pages reachable from the header
              </span>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  Home
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Entry & welcome
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Start here, then jump to any module.
                </p>
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  About / Works / Contact
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Structured pages
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Each page uses clear panels and headings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </PageModule>

      <PageModule title="Highlights" eyebrow="Snapshot">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Focus
            </p>
            <p className="mt-2 text-base font-bold text-slate-900">
              B-end delivery & strategy
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Turning complex programs into measurable outcomes.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              Now
            </p>
            <p className="mt-2 text-base font-bold text-slate-900">
              AI efficiency in Global R&D
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Innovation org, multinational environment.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Note:</span> decorative
          summary only — not live metrics.
        </div>
      </PageModule>
    </WebCanvas>
  );
}
