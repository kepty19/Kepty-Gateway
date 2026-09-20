"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/pro/", label: "プロ・大人" },
  { href: "/junior/", label: "ユース・アカデミー" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link href="/" className="shrink-0 font-latin text-[0.68rem] uppercase tracking-brand text-gold">
          Kepty
          <span className="mt-0.5 block text-[0.58rem] tracking-[0.2em] text-mute">
            Global Gateway
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex lg:gap-7" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-sans text-[0.8rem] tracking-[0.04em] text-mute transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#consult"
            className="btn-gold !px-4 !py-2 !font-sans !text-[0.78rem] !normal-case !tracking-[0.04em]"
          >
            コンシェルジュ相談
          </Link>
        </nav>
        <button
          type="button"
          className="font-sans text-[0.8rem] tracking-[0.04em] text-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "閉じる" : "メニュー"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-gold/20 bg-ink px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-ivory tracking-[0.04em]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#consult"
              className="btn-gold !font-sans !normal-case !tracking-[0.04em]"
              onClick={() => setOpen(false)}
            >
              コンシェルジュ相談
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
