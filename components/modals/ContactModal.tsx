"use client";

import { FormEvent, useEffect, useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useSite, type Engagement } from "@/components/SiteProvider";

const choices: { value: Engagement; label: string; note: string }[] = [
  {
    value: "project",
    label: "Web / App Project",
    note: "Websites, mobile apps, and custom software.",
  },
  {
    value: "talent",
    label: "Hire Remote Developers",
    note: "Pre-vetted senior engineers in 48–72 hours.",
  },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactModal() {
  const { consultOpen, closeConsult, engagement, setEngagement } = useSite();
  const titleId = useId();
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!consultOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setSent(false);
      setErrors({});
      closeConsult();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [consultOpen, closeConsult]);

  function close() {
    setSent(false);
    setErrors({});
    closeConsult();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Add your name.";
    if (!emailPattern.test(email.trim())) next.email = "Add a valid email address.";
    if (details.trim().length < 10) next.details = "Add a short note about the work.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const label = choices.find((choice) => choice.value === engagement)?.label ?? engagement;
    const subject = encodeURIComponent(`TOP Agency — ${label}`);
    const body = encodeURIComponent(
      `Engagement: ${label}\nOrganization: ${organization.trim() || "Not provided"}\n\n${details.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:business@theosoprojects.online?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <AnimatePresence>
      {consultOpen ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#090A0F]/75"
            aria-label="Close consultation form"
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(720px,92vh)] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-white p-6 shadow-2xl md:p-8"
            initial={reduce ? false : { y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#2563EB] uppercase">
                  Consultation
                </p>
                <h2 id={titleId} className="mt-2 text-2xl font-extrabold tracking-tight">
                  {sent ? "Check your email app." : "Tell us what you need."}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {sent ? (
              <p className="mt-5 text-sm leading-relaxed text-[#3d4654]">
                Your email app should open with this note addressed to
                business@theosoprojects.online. Nothing is stored on this website.
                If the app did not open, send the same note there directly.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
                <fieldset className="grid gap-2">
                  <legend className="text-sm font-semibold">What do you need?</legend>
                  {choices.map((choice) => (
                    <label
                      key={choice.value}
                      className={`cursor-pointer rounded-2xl border px-4 py-3 ${
                        engagement === choice.value
                          ? "border-[#2563EB] bg-[#2563EB]/5"
                          : "border-black/10"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="engagement"
                          value={choice.value}
                          checked={engagement === choice.value}
                          onChange={() => setEngagement(choice.value)}
                          className="mt-1"
                        />
                        <span>
                          <span className="block text-sm font-semibold">{choice.label}</span>
                          <span className="block text-sm text-[#5c6570]">{choice.note}</span>
                        </span>
                      </span>
                    </label>
                  ))}
                </fieldset>

                <Field label="Name" error={errors.name}>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    className={inputClass}
                  />
                </Field>
                <Field label="Organization">
                  <input
                    value={organization}
                    onChange={(event) => setOrganization(event.target.value)}
                    autoComplete="organization"
                    className={inputClass}
                  />
                </Field>
                <Field label="Project details" error={errors.details}>
                  <textarea
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                    rows={4}
                    className={inputClass}
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white hover:bg-[#1d4ed8]"
                >
                  Send through email
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-[#FAFAFA] px-4 py-3 text-sm outline-none focus:border-[#2563EB]";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold">
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-[#9f1239]">{error}</span> : null}
    </label>
  );
}
