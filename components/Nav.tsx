"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Gateway" },
  { href: "/pro/", label: "Pro" },
  { href: "/junior/", label: "Junior" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="font-latin text-[0.68rem] uppercase tracking-brand text-gold">
          Kepty
          <span className="mt-0.5 block text-[0.58rem] tracking-[0.2em] text-mute">
            Global Gateway
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-latin text-[0.68rem] uppercase tracking-[0.22em] text-mute transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#consult" className="btn-gold !py-2 !px-4">
            Consult
          </Link>
        </nav>
        <button
          type="button"
          className="font-latin text-[0.68rem] uppercase tracking-[0.2em] text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-gold/20 bg-ink px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-latin uppercase tracking-[0.22em] text-ivory"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#consult" className="btn-gold" onClick={() => setOpen(false)}>
              Consult
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
