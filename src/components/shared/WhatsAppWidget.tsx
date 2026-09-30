'use client';

import Link from 'next/link';

export default function WhatsAppWidget() {
  const phoneNumber = '8801931623820';
  const defaultMessage = encodeURIComponent(
    'Hello Source 365, I would like to inquire about your digital services and growth solutions.',
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="mr-3 hidden items-center rounded-xl bg-secondary dark:bg-background-8 px-3.5 py-2 text-xs font-medium text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:flex">
        <span>Chat with Source 365</span>
        <span className="ml-1.5 flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40">
        <svg
          className="size-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.954.563 3.778 1.536 5.32L2.094 22l4.789-1.408a9.98 9.98 0 0 0 5.148 1.439h.004c5.535 0 10.03-4.495 10.03-10.031C22.065 6.495 17.57 2 12.031 2Zm5.84 14.175c-.244.686-1.42 1.31-1.956 1.393-.509.08-1.168.113-1.896-.12-.444-.143-1.018-.337-1.764-.66-3.136-1.357-5.18-4.52-5.337-4.729-.156-.208-1.272-1.693-1.272-3.23 0-1.537.804-2.293 1.09-2.607.285-.313.623-.391.831-.391.208 0 .416.002.598.01.196.01.456-.074.713.543.26.625.885 2.16.963 2.317.078.156.13.338.026.546-.104.208-.156.338-.312.52-.156.182-.328.406-.468.545-.156.156-.32.327-.138.64.182.313.809 1.334 1.734 2.158 1.19 1.06 2.193 1.388 2.505 1.544.313.156.495.13.677-.078.182-.208.78-.91 1.014-1.222.234-.312.468-.26.78-.156.313.104 1.975.931 2.313 1.1.338.169.563.253.645.398.082.146.082.846-.162 1.532Z" />
        </svg>
      </Link>
    </div>
  );
}
