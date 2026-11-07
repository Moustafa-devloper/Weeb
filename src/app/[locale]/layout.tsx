import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: { default: "Moustfa | Full-Stack Developer", template: "%s | Moustfa" },
  description: "Personal portfolio of Moustfa, a full-stack developer building thoughtful digital experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  openGraph: { type: "website", title: "Moustfa | Full-Stack Developer", description: "Thoughtful digital experiences, from idea to launch." }
};

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
    <body><NextIntlClientProvider>{children}</NextIntlClientProvider></body>
  </html>;
}
