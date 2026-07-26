"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-wide">
          Trip Mosaic
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
          className="hidden rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:block"
        >
          Get Started
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/10 p-2 transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 pb-6 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 pt-5 text-slate-300">
            <a
              href="#features"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Pricing
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#get-started"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
