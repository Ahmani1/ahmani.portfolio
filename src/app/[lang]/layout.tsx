import Header from "@/components/header/header";
import { localeFN } from "@/lib/param";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/tailwind.css";

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

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise <{ lang : Locales}> ;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  localeFN.set(lang); 

  return (
    <html lang={lang}>
      <body 
        className={`${jetbrainsMono.variable} container py-12 md:min-h-screen flex flex-col md:flex-row bg-secondary text-primary dark:bg-primary dark:text-secondary`}
        >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}