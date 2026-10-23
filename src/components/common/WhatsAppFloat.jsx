const WHATSAPP_NUMBER = "917435917404";
const WHATSAPP_MESSAGE =
  "Hi! I'd like to know more about your products.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.04 3C8.9 3 3.18 8.72 3.18 15.86c0 2.24.59 4.43 1.7 6.35L3 29.5l7.42-1.85a12.9 12.9 0 0 0 5.62 1.31h.01c7.13 0 12.84-5.72 12.84-12.86C28.89 8.72 23.17 3 16.04 3Zm0 23.44h-.01a10.6 10.6 0 0 1-5.36-1.46l-.38-.23-4.02 1 1.07-3.92-.25-.4a10.6 10.6 0 0 1-1.62-5.67c0-5.82 4.75-10.56 10.58-10.56 2.82 0 5.48 1.1 7.48 3.1a10.5 10.5 0 0 1 3.09 7.47c0 5.83-4.75 10.57-10.58 10.57Zm5.78-7.92c-.32-.16-1.87-.92-2.15-1.03-.29-.1-.5-.16-.7.16-.21.32-.81 1.03-.99 1.24-.18.21-.36.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.84-1.57-1.87-1.75-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.55.16-.18.21-.32.32-.53.11-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.83.39-.29.32-1.1 1.07-1.1 2.6s1.12 3.02 1.28 3.23c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.66.74.23 1.42.2 1.95.12.6-.09 1.87-.77 2.13-1.5.26-.74.26-1.37.19-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-999 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
      {/* Pulsing ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="group relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95 md:h-14 md:w-14"
      >
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />

        {/* Tooltip (desktop only) */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-[#111313] px-3 py-1.5 text-[13px] font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 md:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}
