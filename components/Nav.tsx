"use client";

import Link from "next/link";
import { useState } from "react";
import { FounderProfile } from "@/components/FounderProfile";
import { FOUNDER } from "@/data/founder";

const LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/pro/", label: "プロ・大人" },
  { href: "/junior/", label: "ユース・アカデミー" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ink/85 backdrop-blur-md">
      <button
        type="button"
        className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-gold/15 px-5 py-2"
        onClick={() => {
          setProfile((v) => !v);
          setOpen(false);
        }}
        aria-expanded={profile}
      >
        <span className="font-latin text-[0.62rem] tracking-[0.2em] text-gold">{FOUNDER.company}</span>
        <span className="text-gold/35" aria-hidden>
          ·
        </span>
        <span className="font-latin text-[0.62rem] tracking-[0.12em] text-mute">
          {FOUNDER.roleEn} {FOUNDER.nameEn}
        </span>
      </button>

      {profile ? (
        <div className="max-h-[min(70vh,560px)] overflow-y-auto border-b border-gold/20 bg-ink px-5 py-8 md:px-10">
          <FounderProfile />
        </div>
      ) : null}

      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3.5 md:px-10">
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
              className="whitespace-nowrap font-mincho text-[0.9rem] tracking-[0.06em] text-mute transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#consult"
            className="btn-gold !px-4 !py-2 !font-mincho !text-[0.82rem] !normal-case !tracking-[0.08em]"
          >
            コンシェルジュ相談
          </Link>
        </nav>
        <button
          type="button"
          className="font-mincho text-[0.85rem] tracking-[0.06em] text-gold lg:hidden"
          onClick={() => {
            setOpen((v) => !v);
            setProfile(false);
          }}
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
