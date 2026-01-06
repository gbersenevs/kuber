import type { Metadata } from "next";
import { i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as any);
  
  return {
    title: {
      default: `${dict.company.name} - ${dict.company.positioning}`,
      template: `%s | ${dict.company.name}`,
    },
    description: dict.company.positioning,
    openGraph: {
      type: "website",
      locale: params.lang === 'lv' ? 'lv_LV' : 'en_US',
      siteName: dict.company.name,
      title: `${dict.company.name} - ${dict.company.positioning}`,
      description: dict.company.positioning,
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen">
        <Header lang={params.lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}

