"use client";

// Site navigation: links in the header on wider screens, a bottom tab bar on phones.
// A client component only because it highlights the current section.

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = "home" | "explore" | "search" | "saved";

// shortLabel is used in the phone tab bar, where "Learn the Faith" would not fit.
const tabs: { id: Tab; label: string; shortLabel?: string; href: string; icon: React.ReactNode }[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: <path d="M3 10.5 12 3l9 7.5M5.5 8.5V21h13V8.5M10 21v-6h4v6" />,
  },
  {
    id: "explore",
    label: "Learn the Faith",
    shortLabel: "Learn",
    href: "/explore",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
  },
  {
    id: "search",
    label: "Search",
    href: "/search",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20.5 20.5-4.5-4.5" />
      </>
    ),
  },
  {
    id: "saved",
    label: "Saved",
    href: "/saved",
    icon: <path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" />,
  },
];

function currentTab(pathname: string): Tab {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/search")) return "search";
  if (pathname.startsWith("/saved")) return "saved";
  return "explore"; // Learn the Faith, categories, topics, Start here, resources.
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function HeaderNav() {
  const active = currentTab(usePathname());
  return (
    <nav aria-label="Main" className="hidden sm:block">
      <ul className="flex items-center gap-1">
        {tabs
          .filter((tab) => tab.id !== "home") // The wordmark already links home.
          .map((tab) => (
            <li key={tab.id}>
              <Link
                href={tab.href}
                aria-current={active === tab.id ? "page" : undefined}
                className={`flex min-h-11 items-center gap-2 rounded-full px-4 font-medium transition-colors hover:bg-tint ${
                  active === tab.id ? "text-accent" : "text-ink-soft"
                }`}
              >
                <Icon>{tab.icon}</Icon>
                {tab.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export function TabBar() {
  const active = currentTab(usePathname());
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-card pb-[env(safe-area-inset-bottom)] sm:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={tab.href}
              aria-current={active === tab.id ? "page" : undefined}
              className={`flex min-h-16 flex-col items-center justify-center gap-1 text-xs ${
                active === tab.id ? "font-semibold text-accent" : "text-ink-soft"
              }`}
            >
              <Icon>{tab.icon}</Icon>
              {tab.shortLabel ?? tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
