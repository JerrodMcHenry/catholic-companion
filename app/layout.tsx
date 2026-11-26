import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { HeaderNav, TabBar } from "@/components/nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Catholic Companion", template: "%s · Catholic Companion" },
  description:
    "Discover God's love, understand the truth, and live the Catholic faith: clear answers, trusted sources, and practical guidance for anyone curious about Catholicism, becoming Catholic, or newly Catholic.",
};

export const viewport: Viewport = {
  viewportFit: "cover", // Lets the tab bar pad itself clear of the iPhone home indicator.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1613" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-[1.0625rem]">
        <a
          href="#main"
          className="sr-only rounded bg-card px-4 py-2 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20"
        >
          Skip to content
        </a>
        <header className="border-b border-line">
          <div className="mx-auto flex min-h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="flex min-h-11 items-center gap-2 rounded font-serif text-2xl font-semibold text-accent"
            >
              <span aria-hidden="true" className="text-gold">
                ✠
              </span>
              Catholic Companion
            </Link>
            <HeaderNav />
          </div>
        </header>
        <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 pt-8 sm:px-6 sm:pt-12">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-3xl px-4 pt-12 pb-28 text-center sm:px-6 sm:pb-12">
          <p lang="la" className="font-serif text-lg text-ink">Ad Majorem Dei Gloriam</p>
          <p className="text-[0.9375rem] text-ink-soft">For the greater glory of God.</p>
          <div className="mx-auto mt-6 max-w-xl space-y-2 text-xs leading-relaxed text-ink-soft">
            <p>
              Scripture passages are explained in our own words; Scripture links lead to the New American Bible, Revised Edition on the
              USCCB website. The verse on the home page is quoted from the Douay-Rheims Bible (Challoner revision), which is in the public
              domain.
            </p>
            <p>
              Excerpts from the English translation of the Catechism of the Catholic Church for use in the United States of America
              Copyright © 1994, United States Catholic Conference, Inc. -- Libreria Editrice Vaticana. Used with Permission. English
              translation of the Catechism of the Catholic Church: Modifications from the Editio Typica copyright © 1997, United States
              Conference of Catholic Bishops—Libreria Editrice Vaticana.
            </p>
            <p>
              Excerpts from the English translation of The Roman Missal © 2010, International Commission on English in the Liturgy
              Corporation. All rights reserved.
            </p>
          </div>
        </footer>
        <TabBar />
      </body>
    </html>
  );
}
