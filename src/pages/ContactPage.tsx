import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { PageModule } from "../components/PageModule";
import { WebCanvas } from "../components/WebCanvas";
import avatarUrl from "../../xxsh.png";

const wechatId = "1219145634";

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <WebCanvas>
      <PageModule title="Contact Me" eyebrow="Channels">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full bg-slate-200 shadow-sm ring-2 ring-indigo-500/25 ring-offset-2 ring-offset-slate-50">
              <img
                src={avatarUrl}
                alt="Xiaohongqun"
                width={144}
                height={144}
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-700">Profile</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
              Welcome to connect on WeChat.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              WeChat ID
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6">
              <p className="min-h-12 break-all font-mono text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                {wechatId}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-6 text-base font-semibold text-slate-900 transition-colors hover:border-indigo-300 hover:bg-white hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:bg-slate-100 sm:min-w-[9.5rem]"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5 text-emerald-600" strokeWidth={2} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" strokeWidth={2} />
                    Copy ID
                  </>
                )}
              </button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Add the ID in WeChat to connect. If the browser blocks clipboard
              access, select the ID and copy manually.
            </p>
          </div>
        </div>
      </PageModule>
    </WebCanvas>
  );
}
