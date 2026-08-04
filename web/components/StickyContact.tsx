const CALL_NUMBER = "+919183269700";
const WHATSAPP_NUMBER = "917389842730";

const WHATSAPP_MESSAGE =
  "Namaste Trip Mosaic, main website par trip details dekh raha/rahi hoon. Mujhe apni trip plan karni hai. Kripya guide karein.";

export default function StickyContact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-amber-300/20 bg-black/95 p-2 backdrop-blur-xl md:hidden">
      <a
        href={`tel:${CALL_NUMBER}`}
        className="mx-1 rounded-xl border border-amber-300/40 px-4 py-3 text-center text-sm font-semibold text-amber-300"
        aria-label="Call Trip Mosaic"
      >
        📞 Call Now
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-1 rounded-xl bg-amber-300 px-4 py-3 text-center text-sm font-bold text-black"
        aria-label="Message Trip Mosaic on WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
