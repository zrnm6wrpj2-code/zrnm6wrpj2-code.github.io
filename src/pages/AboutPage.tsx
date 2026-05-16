import { PageModule } from "../components/PageModule";
import { WebCanvas } from "../components/WebCanvas";

const bio =
  "10 years of B-end project management and strategic operations management experience. Currently working in the innovation R&D department of a foreign enterprise, responsible for AI efficiency improvement in Global R&D.";

export function AboutPage() {
  return (
    <WebCanvas>
      <PageModule title="About Me" eyebrow="Profile">
        <p className="max-w-3xl text-lg leading-[1.7] text-slate-800">{bio}</p>
      </PageModule>
    </WebCanvas>
  );
}
