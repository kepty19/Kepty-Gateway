"use client";

import { FormEvent, useId, useState } from "react";
import { SITE } from "@/lib/site";

type Props = {
  id?: string;
  title: string;
  lede: string;
  context: string;
};

type Field = {
  name: string;
  label: string;
  kind: "text" | "email" | "textarea";
  autoComplete?: string;
  inputMode?: "numeric";
  rows?: number;
};

const FIELDS: Field[] = [
  { name: "name", label: "お名前", kind: "text", autoComplete: "name" },
  { name: "年齢", label: "年齢", kind: "text", inputMode: "numeric" },
  { name: "現所属（前所属）チーム", label: "現所属（前所属）チーム", kind: "text" },
  { name: "ポジション", label: "ポジション", kind: "text" },
  { name: "email", label: "Email", kind: "email", autoComplete: "email" },
  { name: "message", label: "内容", kind: "textarea", rows: 5 },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function messageFor(field: Field, value: string) {
  const text = value.trim();
  if (!text) return "ご記入ください";
  if (field.kind === "email" && !EMAIL.test(text)) return "メールアドレスの形式をご確認ください";
  return "";
}

export function ConsultForm({ id = "consult", title, lede, context }: Props) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attempted, setAttempted] = useState(false);

  const syncField = (field: Field, value: string) => {
    if (!attempted) return;
    const message = messageFor(field, value);
    setErrors((current) => {
      if (!message) {
        if (!current[field.name]) return current;
        const next = { ...current };
        delete next[field.name];
        return next;
      }
      if (current[field.name] === message) return current;
      return { ...current, [field.name]: message };
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const next: Record<string, string> = {};
    let firstInvalid: HTMLElement | null = null;

    for (const field of FIELDS) {
      const el = form.elements.namedItem(field.name);
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) continue;
      const message = messageFor(field, el.value);
      if (!message) continue;
      next[field.name] = message;
      if (!firstInvalid) firstInvalid = el;
    }

    setAttempted(true);
    setErrors(next);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

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
      setErrors({});
      setAttempted(false);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const errorCount = Object.keys(errors).length;

  return (
    <section id={id} className="scroll-mt-28 border-t border-gold/20 px-5 py-20 md:px-10">
      <div className="mx-auto grid min-w-0 max-w-page gap-12 md:grid-cols-2">
        <div>
          <p className="kicker mb-4">Private consultation</p>
          <h2 className="break-words font-mincho text-3xl leading-snug md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-mute">{lede}</p>
        </div>
        {status === "done" ? (
          <p className="panel p-8 text-gold">
            送信が完了致しました。確認次第、弊社スタッフより連絡差し上げます。
          </p>
        ) : (
          <form className="grid gap-4" noValidate onSubmit={onSubmit}>
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            {errorCount > 0 ? (
              <div role="alert" className="border border-gold/40 bg-gold/[0.07] px-4 py-3">
                <p className="font-latin text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                  Check the form
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ivory">
                  {Object.values(errors).every((message) => message === "ご記入ください")
                    ? "未記入の項目がございます。各欄をご確認ください。"
                    : "入力内容をご確認ください。"}
                </p>
              </div>
            ) : null}
            {FIELDS.map((field) => {
              const message = errors[field.name];
              const invalid = Boolean(message);
              const describedBy = invalid ? `${uid}-${field.name}` : undefined;
              const controlClass = [
                "w-full min-w-0 border bg-transparent px-3 py-2.5 text-ivory outline-none transition",
                invalid
                  ? "border-gold bg-gold/[0.06] shadow-[inset_2px_0_0_0_#C5A059] focus:border-gold-bright"
                  : "border-gold/30 focus:border-gold",
              ].join(" ");

              return (
                <label key={field.name} className="grid gap-1.5 text-sm text-mute">
                  <span>
                    {field.label}
                    <span className="ml-1 text-gold">*</span>
                  </span>
                  {field.kind === "textarea" ? (
                    <textarea
                      name={field.name}
                      rows={field.rows}
                      aria-required="true"
                      aria-invalid={invalid}
                      aria-describedby={describedBy}
                      className={controlClass}
                      onChange={(event) => syncField(field, event.target.value)}
                    />
                  ) : (
                    <input
                      type={field.kind}
                      name={field.name}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      aria-required="true"
                      aria-invalid={invalid}
                      aria-describedby={describedBy}
                      className={controlClass}
                      onChange={(event) => syncField(field, event.target.value)}
                    />
                  )}
                  {invalid ? (
                    <span
                      id={describedBy}
                      className="flex items-center gap-2 text-[0.8rem] leading-none tracking-wide text-gold-bright"
                    >
                      <span className="inline-block h-px w-4 bg-gold" aria-hidden />
                      {message}
                    </span>
                  ) : null}
                </label>
              );
            })}
            <button className="btn-gold mt-1" type="submit" disabled={status === "sending"}>
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
