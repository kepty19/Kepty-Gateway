"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/pro/", label: "プロ・大人" },
  { href: "/junior/", label: "ユース・アカデミー" },
  { href: "/company/", label: "会社情報" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link href="/" className="min-w-0 shrink font-latin text-[0.68rem] uppercase tracking-[0.18em] text-gold sm:tracking-brand">
          Kepty
          <span className="mt-0.5 block text-[0.58rem] tracking-[0.14em] text-mute sm:tracking-[0.2em]">
            Global Gateway
          </span>
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-mincho text-[0.88rem] tracking-[0.06em] text-mute transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#consult"
            className="btn-gold !px-3.5 !py-2 !font-mincho !text-[0.8rem] !normal-case !tracking-[0.08em]"
          >
            コンシェルジュ相談
          </Link>
        </nav>
        <button
          type="button"
          className="font-mincho text-[0.85rem] tracking-[0.06em] text-gold lg:hidden"
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
                className="font-mincho text-lg tracking-[0.06em] text-ivory"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#consult"
              className="btn-gold !font-mincho !normal-case !tracking-[0.08em]"
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
