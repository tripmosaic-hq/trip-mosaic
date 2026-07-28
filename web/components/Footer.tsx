const whatsappUrl =
  "https://wa.me/919183269700?text=Hi%20Trip%20Mosaic%2C%20I%20want%20help%20planning%20my%20trip.";

export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 pb-32 pt-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-amber-400/20 pb-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl font-semibold text-amber-400">
              TRIP MOSAIC
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Mountains. Memories. Crafted.
            </p>

            <p className="mt-6 max-w-md leading-7 text-neutral-400">
              Thoughtfully planned Himalayan journeys built around real
              experience, trusted partners, transparent communication and
              personal support.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Explore
            </h3>

            <nav className="mt-6 flex flex-col gap-4 text-neutral-400">
              <a href="#home" className="hover:text-amber-400">
                Home
              </a>
              <a href="#experiences" className="hover:text-amber-400">
                Flagship Journeys
              </a>
              <a href="#why-us" className="hover:text-amber-400">
                Why Trip Mosaic
              </a>
              <a href="#about" className="hover:text-amber-400">
                How We Work
              </a>
              <a href="#contact" className="hover:text-amber-400">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-neutral-400">
              <a
                href="tel:+919183269700"
                className="block hover:text-amber-400"
              >
                +91 91832 69700
              </a>
<a
  href="mailto:tripmosaic@gmail.com"
  className="block hover:text-amber-400"
>
  tripmosaic@gmail.com
</a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-amber-400"
              >
                Enquire on WhatsApp
              </a>

              <p>Direct consultation and human-reviewed planning.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 border-b border-amber-400/20 py-10 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-amber-400">
              Booking Terms
            </h4>
            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Final services, prices and availability are confirmed through the
              written quotation shared before booking.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-400">
              Cancellation & Refund
            </h4>
            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Cancellation and refund conditions depend on the selected journey
              and will be communicated clearly before payment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-400">
              Privacy
            </h4>
            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Traveller information is used only for enquiry handling, trip
              planning, booking coordination and necessary communication.
            </p>
          </div>
        </div>

        <div className="pt-8 text-sm text-neutral-600 md:flex md:items-center md:justify-between">
          <p>© 2026 Trip Mosaic. All rights reserved.</p>

          <p className="mt-3 md:mt-0">
            Travel with trust, clarity and care.
          </p>
        </div>
      </div>
    </footer>
  );
}

