import { business } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-[#6B3A5C]/10 bg-[#FFF5F7]/95 p-3 backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Snabbkontakt"
    >
      {business.phoneLink && business.phone ? (
        <a
          href={business.phoneLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#6B3A5C] bg-white py-3 text-sm font-semibold text-[#6B3A5C]"
        >
          <span aria-hidden>📞</span>
          Ring
        </a>
      ) : null}
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D4A574] py-3 text-sm font-semibold text-[#3D1F35]"
      >
        <span aria-hidden>📅</span>
        Boka
      </a>
    </div>
  );
}
