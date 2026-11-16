import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#090A0F] px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold tracking-wider text-[#93c5fd] uppercase">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">This page is not on the site.</h1>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-[#2563EB] px-6 text-sm font-semibold"
        >
          Back to TOP Agency
        </Link>
      </div>
    </main>
  );
}
