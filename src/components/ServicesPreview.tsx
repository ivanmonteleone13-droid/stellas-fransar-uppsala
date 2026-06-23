import Link from "next/link";
import { business } from "@/lib/business";

export default function ServicesPreview() {
  const featured = business.services.slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[var(--dark)] sm:text-4xl">
              Våra tjänster
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--primary)]/70">
              Reparation, service och skovårdsprodukter – allt under ett tak på Stora Torget.
            </p>
          </div>
          <Link
            href="/tjanster"
            className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            Alla tjänster
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-[var(--primary)]/5 bg-[var(--accent)] p-6"
            >
              <h3 className="text-xl font-semibold text-[var(--dark)]">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--primary)]/70">
                {service.description}
              </p>
              <div className="mt-6 border-t border-[var(--primary)]/10 pt-4">
                <p className="text-xs text-[var(--primary)]/60">{service.duration}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm text-amber-900">
          <strong>Tips:</strong> Boka via Bokadirekt i förväg och läs villkoren innan ditt besök.
        </p>
      </div>
    </section>
  );
}
