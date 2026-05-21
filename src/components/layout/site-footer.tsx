import Link from "next/link";
import Image from "next/image";
import { footerNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
            <Image
              src={siteConfig.logo}
              alt="Dentoku Dev logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover"
            />
            <span>Dentoku Dev</span>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-slate-600">{siteConfig.description}</p>
        </div>
        {Object.entries(footerNav).map(([label, items]) => (
          <div key={label}>
            <h2 className="text-sm font-semibold text-slate-950">{label}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-slate-950">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="mx-auto grid max-w-7xl gap-2 px-4 text-sm text-slate-500 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <p className="md:col-span-4">© 2026 Dentoku Dev. All rights reserved.</p>
          <p>{siteConfig.companyName}, {siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
