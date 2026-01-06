"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { i18n } from "@/lib/i18n-config";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathname(locale)}
          className={cn(
            "px-2 py-1 rounded transition-colors uppercase",
            currentLang === locale
              ? "text-primary font-medium"
              : "text-text-muted hover:text-text"
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}

