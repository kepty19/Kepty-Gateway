import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-page flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="kicker mb-3">Kepty Global Gateway</p>
          <p className="max-w-md text-sm leading-relaxed text-mute">
            世界へ挑む、すべてのフットボーラーへ。A concierge of Kepty Co., Ltd.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-[0.78rem] tracking-[0.04em] text-mute">
          <Link href="/" className="hover:text-gold">
            ホーム
          </Link>
          <Link href="/pro/" className="hover:text-gold">
            プロ・大人
          </Link>
          <Link href="/junior/" className="hover:text-gold">
            ユース・アカデミー
          </Link>
          <Link href="/#consult" className="hover:text-gold">
            コンシェルジュ相談
          </Link>
          <Link href="/company/" className="hover:text-gold">
            Company
          </Link>
          <Link href="/privacy/" className="hover:text-gold">
            Privacy
          </Link>
          <a href={`mailto:${SITE.email}`} className="hover:text-gold">
            {SITE.email}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-page font-latin text-[0.62rem] tracking-[0.14em] text-mute/70">
        © {new Date().getFullYear()} {SITE.company} All rights reserved.
      </p>
    </footer>
  );
}
