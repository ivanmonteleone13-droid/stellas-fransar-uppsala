import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--dark)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">{business.name}</p>
          <p className="mt-2 text-sm text-white/80">{business.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {business.description}
          </p>
        </div>

        <div>
          <p className="font-semibold">Snabblänkar</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/om-oss" className="hover:text-white">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/tjanster" className="hover:text-white">
                Tjänster
              </Link>
            </li>
            <li>
              <Link href="/galleri" className="hover:text-white">
                Galleri
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Kontakt</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>{getFullAddress()}</p>
            {business.phoneLink && business.phone ? (
              <p>
                <a href={business.phoneLink} className="hover:text-white">
                  {business.phone}
                </a>
              </p>
            ) : null}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60">
        <p>
          © {new Date().getFullYear()} {business.name}. Demo-webbplats skapad med
          offentligt tillgänglig information.
        </p>
      </div>
    </footer>
  );
}
