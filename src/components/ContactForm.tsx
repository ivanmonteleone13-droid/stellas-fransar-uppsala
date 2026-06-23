"use client";

import { FormEvent, useState } from "react";
import { business } from "@/lib/business";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--accent)] p-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-[var(--dark)]">Tack för ditt meddelande!</p>
        <p className="mt-2 text-sm text-[var(--primary)]/70">
          Detta är en demo-webbplats. Boka via Bokadirekt för att nå oss direkt.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[var(--primary)]/10 bg-white p-6 shadow-sm sm:p-8"
      aria-label="Kontaktformulär"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--dark)]">
            Namn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-[var(--primary)]/20 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--dark)]">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-[var(--primary)]/20 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--dark)]">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-[var(--primary)]/20 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--dark)]">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-[var(--primary)]/20 px-4 py-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
          placeholder="Beskriv vad du behöver hjälp med..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[var(--dark)] sm:w-auto"
      >
        Skicka meddelande
      </button>
    </form>
  );
}
