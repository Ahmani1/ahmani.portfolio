import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { localeFN } from "../lib/param";
import Header from "../components/header/header";
import LangProvider from "../components/locales/client";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Awesome App",
  description: "An awesome app built with Next.js.",
};

interface LayoutProps {
  params: { lang: Locales };
  children: React.ReactNode;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  localeFN.set(lang);

  return (
    <html>
      <LangProvider lang={lang}>
        <body
          className={`${jetbrainsMono.variable} container py-12 md:min-h-screen flex flex-col md:flex-row bg-secondary text-primary dark:bg-primary dark:text-secondary`}
        >
          <Header />
          <main className="flex-1">{children}</main>
        </body>
      </LangProvider>
    </html>
  );
}
