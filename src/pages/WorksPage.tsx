import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Layers,
  LineChart,
  Link2,
  Workflow,
} from "lucide-react";
import { PageModule } from "../components/PageModule";
import { WebCanvas } from "../components/WebCanvas";

type WorkItem = {
  title: string;
  description: string;
  tags: string[];
  metrics: string[];
  accent: "indigo" | "violet" | "emerald";
  icon: LucideIcon;
};

const works: WorkItem[] = [
  {
    title: "Global R&D AI efficiency program",
    description:
      "End-to-end operating model for AI-assisted research workflows—governance, adoption, and measurable cycle-time gains.",
    tags: ["AI ops", "R&D", "Change"],
    metrics: ["−18% review lead time", "12 markets"],
    accent: "indigo",
    icon: Bot,
  },
  {
    title: "B-end delivery governance redesign",
    description:
      "Portfolio rituals, risk dashboards, and executive readouts that keep complex programs aligned without slowing teams down.",
    tags: ["PMO", "Governance", "Metrics"],
    metrics: ["+26% predictability", "Quarterly cadence"],
    accent: "violet",
    icon: Layers,
  },
  {
    title: "Strategic operations playbook",
    description:
      "Lightweight templates for OKRs, initiative intake, and cross-functional prioritization tuned for enterprise constraints.",
    tags: ["Strategy", "Operations", "Templates"],
    metrics: ["40+ teams", "Single source of truth"],
    accent: "emerald",
    icon: LineChart,
  },
  {
    title: "Innovation funnel & stage gates",
    description:
      "A crisp stage-gate model with decision rights, evidence packs, and fast feedback loops for new bets.",
    tags: ["Innovation", "Process", "Gates"],
    metrics: ["3x faster decisions", "Clear DRI map"],
    accent: "indigo",
    icon: Workflow,
  },
  {
    title: "Executive narrative studio",
    description:
      "Repeatable storyline frameworks for roadmap reviews—what changed, why it matters, and what we need next.",
    tags: ["Storytelling", "Leadership", "Reviews"],
    metrics: ["Unified storyline", "Less slide debt"],
    accent: "violet",
    icon: BarChart3,
  },
  {
    title: "Vendor & partner orchestration",
    description:
      "Contracting rhythm, SLAs, and joint operating committees that scale without creating coordination drag.",
    tags: ["Partners", "SLAs", "Orchestration"],
    metrics: ["Fewer escalations", "Cleaner RACI"],
    accent: "emerald",
    icon: Link2,
  },
];

const accentThumb: Record<
  WorkItem["accent"],
  { bar: string; glow: string; iconWrap: string }
> = {
  indigo: {
    bar: "from-indigo-600 to-violet-500",
    glow: "shadow-[0_0_28px_rgba(79,70,229,0.35)]",
    iconWrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  violet: {
    bar: "from-violet-600 to-indigo-500",
    glow: "shadow-[0_0_28px_rgba(124,58,237,0.35)]",
    iconWrap: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  emerald: {
    bar: "from-emerald-500 to-indigo-600",
    glow: "shadow-[0_0_28px_rgba(16,185,129,0.25)]",
    iconWrap: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
};

export function WorksPage() {
  return (
    <WebCanvas>
      <PageModule
        title="Works"
        eyebrow="Catalogue (placeholder content)"
        contentClassName="sm:py-6"
      >
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Abstract tiles only (no stock photos). Each card is a self-contained
          module: title, description, tags, and highlight chips.
        </p>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((item) => {
          const Icon = item.icon;
          const thumb = accentThumb[item.accent];
          return (
            <li key={item.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-150 hover:border-indigo-200 hover:shadow-md">
                <div
                  className={`relative h-36 bg-gradient-to-br ${thumb.bar} ${thumb.glow}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_55%),radial-gradient(circle_at_80%_30%,white,transparent_45%)]" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold leading-snug text-slate-900">
                      {item.title}
                    </h2>
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${thumb.iconWrap}`}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                    {item.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      </PageModule>
    </WebCanvas>
  );
}
