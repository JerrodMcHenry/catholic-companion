import Link from "next/link";

const steps = [
  {
    title: "Choose your language",
    body: "Learn in English, Spanish, or both side by side.",
  },
  {
    title: "Walk through the Mass",
    body: "Move at your own pace, one moment at a time: what is happening, when to stand, sit, or kneel, and what to say.",
  },
  {
    title: "Understand why it matters",
    body: "Short explanations by default, with deeper biblical, historical, and theological background whenever you want it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-gold-deep uppercase">
          A guide to the Catholic Mass
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink sm:text-6xl">
          Feel at home at Mass
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
          Catholic Companion walks you through the Mass step by step, like a friend sitting beside
          you in the pew who knows what comes next and why.
        </p>
        <Link
          href="/onboarding"
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-burgundy px-8 text-lg font-medium text-ivory shadow-sm transition-colors hover:bg-burgundy-deep"
        >
          Begin Your First Mass
        </Link>
      </section>

      <div aria-hidden="true" className="my-14 flex items-center gap-4 text-gold">
        <span className="h-px flex-1 bg-gold/40" />
        <span>✦</span>
        <span className="h-px flex-1 bg-gold/40" />
      </div>

      <section aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="text-center font-serif text-3xl font-semibold">
          How it works
        </h2>
        <ol className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl bg-cream/60 p-5">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg font-semibold text-gold-deep"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-medium text-ink">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm leading-relaxed text-ink-soft">
          Catholic Companion is a learning guide for the Ordinary Form of the Roman Rite as
          celebrated in the United States. It is not a celebration of Mass.
        </p>
      </section>
    </>
  );
}
