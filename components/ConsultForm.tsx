"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

type Props = {
  id?: string;
  title: string;
  lede: string;
  context: string;
};

export function ConsultForm({ id = "consult", title, lede, context }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("context", context);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("fail");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id={id} className="scroll-mt-28 border-t border-gold/20 px-5 py-20 md:px-10">
      <div className="mx-auto grid min-w-0 max-w-page gap-12 md:grid-cols-2">
        <div>
          <p className="kicker mb-4">Private consultation</p>
          <h2 className="break-words font-mincho text-3xl leading-snug md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-mute">{lede}</p>
        </div>
        {status === "done" ? (
          <p className="panel p-8 text-gold">送信しました。非公開でご連絡します。</p>
        ) : (
          <form className="grid gap-4" onSubmit={onSubmit}>
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="grid gap-1 text-sm text-mute">
              お名前 *
              <input
                required
                name="name"
                className="w-full min-w-0 border border-gold/30 bg-transparent px-3 py-2 text-ivory outline-none focus:border-gold"
              />
            </label>
            <label className="grid gap-1 text-sm text-mute">
              Email *
              <input
                required
                type="email"
                name="email"
                className="w-full min-w-0 border border-gold/30 bg-transparent px-3 py-2 text-ivory outline-none focus:border-gold"
              />
            </label>
            <label className="grid gap-1 text-sm text-mute">
              内容 *
              <textarea
                required
                name="message"
                rows={5}
                className="w-full min-w-0 border border-gold/30 bg-transparent px-3 py-2 text-ivory outline-none focus:border-gold"
              />
            </label>
            <button className="btn-gold" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {status === "error" ? (
              <p className="text-sm text-gold">送信に失敗しました。直接 {SITE.email} へどうぞ。</p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
