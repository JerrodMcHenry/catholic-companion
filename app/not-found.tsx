import { CardLink } from "@/components/cards";

export default function NotFound() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">We couldn&apos;t find that page. Try one of these instead.</p>
      <ul className="mt-6 space-y-3">
        <li>
          <CardLink href="/" title="Home" />
        </li>
        <li>
          <CardLink href="/explore" title="Explore all subjects" />
        </li>
      </ul>
    </>
  );
}
