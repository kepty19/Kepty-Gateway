import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-page px-5 pb-24 pt-32 md:px-10">
      <p className="kicker mb-4">Legal</p>
      <h1 className="font-mincho text-4xl">プライバシーポリシー</h1>
      <div className="mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-mute">
        <p>
          {SITE.company}（以下、当社）は、お問い合わせフォーム等で取得した氏名・メールアドレス・メッセージを、相談への回答およびサービス案内の目的でのみ利用します。
        </p>
        <p>
          法令に基づく場合を除き、本人の同意なく第三者へ提供しません。お問い合わせは {SITE.email}{" "}
          まで。
        </p>
      </div>
    </main>
  );
}
