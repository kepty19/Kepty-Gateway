import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <main className="mx-auto max-w-page px-5 pb-24 pt-32 md:px-10">
      <p className="kicker mb-4">Company</p>
      <h1 className="font-mincho text-4xl">会社概要</h1>
      <dl className="mt-10 grid max-w-xl gap-6 text-sm">
        <div>
          <dt className="text-mute">商号</dt>
          <dd>{SITE.company}</dd>
        </div>
        <div>
          <dt className="text-mute">サービス</dt>
          <dd>{SITE.name}</dd>
        </div>
        <div>
          <dt className="text-mute">Email</dt>
          <dd>
            <a className="text-gold" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </dd>
        </div>
      </dl>
    </main>
  );
}
