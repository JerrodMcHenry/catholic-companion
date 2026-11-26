// The common objections section of a topic page. Kept apart from the topic page only
// so that page stays short; it is rendered there and nowhere else.

import Link from "next/link";
import { getTradition, resourcesFor, type Authority, type Debate } from "@/content";

// Plain-language labels, so readers can tell Church teaching from apologetic reasoning.
const authorityLabel: Record<Authority, string> = {
  dogma: "Church dogma (infallibly taught)",
  doctrine: "Church teaching",
  "theological-opinion": "Theological opinion",
  "pastoral-reflection": "Pastoral reflection drawn from Church teaching",
  "apologetic-argument": "Apologetic argument, not official teaching",
};

function AuthorityNote({ authority }: { authority: Authority }) {
  return <p className="mt-3 text-sm font-medium text-gold-ink">{authorityLabel[authority]}</p>;
}

const externalLink = "font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent";

const chevron = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Shown after the Catholic answer and closed by default, so readers meet what Catholics
// believe first and open the objections only if they want them.
export function DebateSections({ debate }: { debate: Debate }) {
  return (
    <section aria-labelledby="objections" className="mt-12">
      <details className="group rounded-2xl border border-line bg-card">
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
          <span id="objections" className="font-serif text-2xl font-semibold text-ink">
            Common objections and Catholic responses
          </span>
          {chevron}
        </summary>
        <div className="space-y-8 border-t border-line px-5 pt-5 pb-6">
          <div>
            <h3 className="font-medium text-accent">What Catholics believe</h3>
            <p className="mt-2 leading-relaxed">{debate.catholicPosition.summary}</p>
            <AuthorityNote authority={debate.catholicPosition.authority} />
          </div>
          {debate.perspectives.map((p) => {
            const tradition = getTradition(p.tradition)!;
            return (
              <div key={p.tradition}>
                <h3 className="-my-1 font-serif text-xl font-semibold">
                  <Link href={`/apologetics/${tradition.slug}`} className="inline-flex min-h-11 items-center text-accent hover:underline">
                    {tradition.name}
                  </Link>
                </h3>
                <p className="mt-2 leading-relaxed">{p.position}</p>
                {p.variations && <p className="mt-3 leading-relaxed text-ink-soft">{p.variations}</p>}
                <ul className="mt-4 space-y-3">
                  {p.arguments.map((a) => (
                    <li key={a.claim}>
                      <details className="group/arg rounded-2xl border border-line">
                        <summary className="flex min-h-14 cursor-pointer list-none items-start gap-4 rounded-2xl px-5 py-4">
                          <span className="flex-1 leading-snug">{a.claim}</span>
                          <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-gold-ink transition-transform group-open/arg:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </summary>
                        <div className="border-t border-line px-5 pt-4 pb-5">
                          <h4 className="font-medium text-accent">Catholic response</h4>
                          <p className="mt-2 leading-relaxed">{a.response}</p>
                          <AuthorityNote authority={a.authority} />
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-4 text-sm font-semibold tracking-wider text-gold-ink uppercase">In their own words</h4>
                <ul className="mt-1 space-y-1">
                  {resourcesFor(p.sources).map((r) => (
                    <li key={r.id}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center py-1.5 leading-snug ${externalLink}`}>
                        {r.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </details>
    </section>
  );
}

// Early Church witnesses, shown in "Scripture and Church teaching".
export function Fathers({ fathers }: { fathers: NonNullable<Debate["fathers"]> }) {
  return (
    <div>
      <h3 className="mb-3 font-medium text-ink">From the early Church</h3>
      <ul className="space-y-3">
        {fathers.map((f) => (
          <li key={f.url} className="rounded-2xl border border-line px-5 py-4">
            <p className="font-medium">{f.name}</p>
            <a href={f.url} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center text-[0.9375rem] ${externalLink}`}>
              {f.work}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="text-[0.9375rem] leading-snug text-ink-soft">{f.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
