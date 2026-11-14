import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  title: "Catholic Companion",
  description: "A gentle, guided introduction to the Catholic Mass, in English and Spanish.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="border-b border-cream">
          <div className="mx-auto flex max-w-2xl items-center px-5 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded font-serif text-xl font-semibold text-burgundy"
            >
              <span aria-hidden="true" className="text-gold">
                ✠
              </span>
              Catholic Companion
            </Link>
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 py-10 sm:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
