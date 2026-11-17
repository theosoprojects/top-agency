import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative flex min-h-[calc(100svh-4.75rem)] items-end overflow-hidden border-b border-white/10 bg-[#090A0F] text-white">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-80" />
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="site-shell relative w-full py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-white/30">/</span>
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{lede}</p>
        <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-[#93c5fd] uppercase">
          Winnipeg · Lagos · Available for new projects
        </p>
      </div>
    </section>
  );
}
