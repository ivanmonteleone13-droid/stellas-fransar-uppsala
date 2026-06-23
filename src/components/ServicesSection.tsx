import { business, formatPrice } from "@/lib/business";

export default function ServicesSection() {
  return (
    <section id="tjanster" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D4A574]">
            Tjänster
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#6B3A5C] sm:text-4xl">
            Våra tjänster &amp; priser
          </h2>
          <p className="mt-4 text-lg text-[#6B3A5C]/70">
            Fransförlängning, lashlift och browlift — boka den behandling som passar dig.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-[#6B3A5C]/8 bg-[#FFF5F7] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6B3A5C] text-2xl text-white shadow-md transition group-hover:bg-[#D4A574] group-hover:text-[#3D1F35]"
                aria-hidden
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#6B3A5C]">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B3A5C]/70">
                {service.description}
              </p>
              <div className="mt-6 flex items-end justify-between border-t border-[#6B3A5C]/10 pt-4">
                <div>
                  <p className="text-2xl font-bold text-[#6B3A5C]">
                    {formatPrice(service.priceFrom)}
                  </p>
                  <p className="text-xs text-[#6B3A5C]/60">{service.duration}</p>
                </div>
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#6B3A5C] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#3D1F35]"
                >
                  Boka
                </a>
              </div>
              <p className="mt-3 text-xs text-[#6B3A5C]/50">{service.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-[#6B3A5C] p-6 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm">
            <strong>Osäker på vad du behöver?</strong> Boka via Bokadirekt — vi guidar
            dig till rätt behandling.
          </p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#D4A574] px-6 py-3 text-sm font-semibold text-[#3D1F35] transition hover:bg-[#b8921f]"
          >
            Se alla tider på Bokadirekt
          </a>
        </div>
      </div>
    </section>
  );
}
