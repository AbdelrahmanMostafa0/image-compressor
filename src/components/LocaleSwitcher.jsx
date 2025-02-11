"use client";

import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Globe, WholeWordIcon } from "lucide-react";

export default function LocaleSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    let newLocale = currentLocale === "ar" ? "en" : "ar";

    if (newLocale !== currentLocale && routing.locales.includes(newLocale)) {
      const newPath = `/${newLocale}${pathname.replace(
        `/${currentLocale}`,
        ""
      )}`;
      router.push(newPath);
    }
  };

  return (
    <div>
      <button
        onClick={switchLocale}
        className="fixed z-10 bottom-20 text-black dark:text-white right-5  h-12 w-12 rounded-full flex items-center justify-center bg-lightMode-background  dark:bg-darkMode-background drop-shadow-lg"
      >
        <Globe />
      </button>
    </div>
  );
}
