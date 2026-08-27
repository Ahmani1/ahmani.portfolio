import Header from "@/components/header/header";
import { localeFN } from "@/lib/param";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/tailwind.css";
import LangProvider from "@/components/locales/client";
import Footer from "@/components/header/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmani-elmokhtar.vercel.app"),
  title: {
    default: "Ahmani Elmokhtar | Frontend Developer & Software Engineer",
    template: "%s | Ahmani Elmokhtar",
  },
  description:
    "Portfolio of Ahmani Elmokhtar, Frontend Developer and Software Engineer specializing in Next.js, React, TypeScript and modern web applications.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: Locales }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  localeFN.set(lang);

  return (
    <html lang={lang}>
      <LangProvider lang={lang}>
        <body
          className={`${jetbrainsMono.variable} container py-12 md:min-h-screen flex flex-col md:flex-row bg-secondary text-primary dark:bg-primary dark:text-secondary`}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </LangProvider>
    </html>
  );
}
