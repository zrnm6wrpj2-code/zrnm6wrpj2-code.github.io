export function BlobBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-indigo-400/12 to-violet-400/12 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-[20rem] w-[20rem] rounded-full bg-gradient-to-bl from-violet-400/10 to-indigo-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[18rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-t from-indigo-200/15 to-transparent blur-3xl" />
    </div>
  );
}
