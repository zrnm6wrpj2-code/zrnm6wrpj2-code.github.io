import { Outlet } from "react-router-dom";
import { BlobBackground } from "../components/BlobBackground";
import { SiteHeader } from "../components/SiteHeader";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <BlobBackground />
      <SiteHeader />
      <main className="relative z-10 min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>
      <footer className="relative z-10 border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          XIAOHONGQUN — portfolio & contact
        </div>
      </footer>
    </div>
  );
}
