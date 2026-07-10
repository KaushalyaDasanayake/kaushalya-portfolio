export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300 backdrop-blur">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        Loading portfolio experience…
      </div>
    </main>
  );
}
