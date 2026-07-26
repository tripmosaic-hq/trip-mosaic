export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">Trip Mosaic</h2>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Plan journeys, manage travellers, track bookings and grow your
            travel business from one modern platform.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Product</h3>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>

            <a href="#get-started" className="transition hover:text-white">
              Get Started
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a
              href="mailto:hello@tripmosaic.com"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Trip Mosaic. All rights reserved.</p>

        <p>Built with ❤️ for modern travel teams.</p>
      </div>
    </footer>
  );
}
