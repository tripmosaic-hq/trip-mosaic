export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-wide text-white">
          TripMosaic
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

        <a
          href="#get-started"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}