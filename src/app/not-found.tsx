import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center text-zinc-100">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">This page is still being discovered.</h1>
        <p className="mt-4 text-base leading-8 text-zinc-400">
          The route you requested does not exist yet, but the portfolio experience is ready to explore.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
          Return home
        </Link>
      </div>
    </main>
  );
}
