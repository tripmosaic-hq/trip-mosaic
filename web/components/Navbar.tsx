"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#experiences" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-300/15 bg-black/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" onClick={closeMenu} className="group">
          <p className="font-serif text-xl font-semibold tracking-[0.18em] text-amber-300 sm:text-2xl">
            TRIP MOSAIC
          </p>
          <p className="mt-1 hidden text-[10px] uppercase tracking-[0.2em] text-stone-400 sm:block">
            Mountains. Memories. Crafted.
          </p>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-300 transition hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/917000114755?text=Namaste%20Trip%20Mosaic%2C%20mujhe%20trip%20plan%20karni%20hai."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amber-300 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-amber-200"
          >
            Plan on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-lg border border-amber-300/30 p-2 text-amber-300 lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="my-1.5 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-amber-300/15 bg-black px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-1 text-base font-medium text-stone-200 transition hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/917000114755?text=Namaste%20Trip%20Mosaic%2C%20mujhe%20trip%20plan%20karni%20hai."
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center font-bold text-black"
            >
              Plan on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
