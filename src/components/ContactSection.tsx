import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D4A574]">
            Kontakt
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#6B3A5C] sm:text-4xl">
            Hitta &amp; kontakta oss
          </h2>
          <p className="mt-4 text-lg text-[#6B3A5C]/70">
            Besök oss i Rosendal eller boka via Bokadirekt.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactForm />

            <div className="rounded-2xl border border-[#6B3A5C]/10 bg-[#FFF5F7] p-6">
              <h3 className="font-semibold text-[#6B3A5C]">Kontaktuppgifter</h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-[#6B3A5C]/80">
                <p>
                  <strong className="text-[#6B3A5C]">Adress:</strong>
                  <br />
                  {getFullAddress()}
                </p>
                {business.phoneLink && business.phone ? (
                  <p>
                    <strong className="text-[#6B3A5C]">Telefon:</strong>
                    <br />
                    <a href={business.phoneLink} className="font-semibold text-[#6B3A5C] hover:underline">
                      {business.phone}
                    </a>
                  </p>
                ) : null}
                <p>
                  <strong className="text-[#6B3A5C]">Bokning:</strong>
                  <br />
                  <a
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4A574] hover:underline"
                  >
                    {business.bookingLabel}
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-2xl border border-[#6B3A5C]/10 bg-[#FFF5F7] p-6">
              <h3 className="font-semibold text-[#6B3A5C]">Öppettider</h3>
              <p className="mt-2 text-xs text-[#6B3A5C]/60">{business.hours.note}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {business.hours.regular.map((row) => (
                  <li key={row.day} className="flex justify-between text-[#6B3A5C]/80">
                    <span>{row.day}</span>
                    <span className={row.hours === "Stängt" ? "text-[#6B3A5C]/40" : "font-medium"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-[#6B3A5C]/10 shadow-sm">
              <iframe
                title={`Karta — ${business.name}`}
                src={getMapsEmbedUrl()}
                className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-[#6B3A5C] hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
