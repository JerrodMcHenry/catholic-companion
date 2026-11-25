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
    "Understand, explore, practice, and defend the Catholic faith, with trusted resources for every question.",
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
        <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 pt-8 pb-28 sm:px-6 sm:pt-12 sm:pb-16">
          {children}
        </main>
        <TabBar />
      </body>
    </html>
  );
}
