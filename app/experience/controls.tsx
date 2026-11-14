"use client";

// Playback controls for Experience Mass: the seekable timeline (with a mark where each moment begins),
// the transport buttons, and the chapter list grouped by the sections of the Mass. Presentational
// only: the player (./player.tsx) owns all state and decides what a seek or a chapter choice does.

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export type ChapterItem = {
  key: string;
  title: ReactNode;
  index?: number; // step to jump to; undefined = not yet available
  note?: ReactNode; // e.g. "preview"
  lang?: string;
};
export type ChapterSection = { id: string; title: ReactNode; items: ChapterItem[]; available: boolean };

// Plain strings (they are also used as accessible names).
type Labels = Record<
  | "position" | "positionText" | "chapters" | "previous" | "next" | "back15" | "forward15" | "play" | "pause"
  | "notYet" | "now" | "sectionNotYet",
  string
>;

export function formatTime(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function Controls({
  time,
  total,
  marks,
  currentIndex,
  currentSection,
  sections,
  paused,
  disabled,
  ended,
  labels,
  onScrub,
  onSeek,
  onBack,
  onForward,
  onPrevious,
  onNext,
  onToggle,
  onChapter,
}: {
  time: number; // position on the whole timeline, in seconds
  total: number;
  marks: { at: number; section: boolean; label: string }[]; // where each moment begins
  currentIndex: number;
  currentSection: string;
  sections: ChapterSection[];
  paused: boolean;
  disabled: boolean; // e.g. while an audio error is shown
  ended: boolean;
  labels: Labels;
  onScrub: (seconds: number | null) => void; // dragging: preview only
  onSeek: (seconds: number) => void; // released: go there
  onBack: () => void;
  onForward: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onToggle: () => void;
  onChapter: (index: number) => void;
}) {
  const rangeRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const onSeekRef = useRef(onSeek);
  useEffect(() => {
    onSeekRef.current = onSeek;
  });

  // React's onChange fires continuously while dragging; the native "change" event fires once, when the
  // thumb is released (or on each arrow key), and that is when the player actually seeks.
  useEffect(() => {
    const range = rangeRef.current;
    if (!range) return;
    const commit = () => onSeekRef.current(Number(range.value));
    range.addEventListener("change", commit);
    return () => range.removeEventListener("change", commit);
  }, []);

  const round = "inline-flex items-center justify-center rounded-full border-2 disabled:cursor-not-allowed disabled:opacity-40";
  const button = `${round} size-12 border-cream bg-white/70 text-burgundy hover:border-gold`;
  const mainButton = `${round} size-14 border-burgundy bg-burgundy text-ivory hover:bg-burgundy-deep`; // play / pause

  return (
    <div className="mt-4">
      {/* The timeline: a native range input (keyboard: arrows move 1 s), with moment marks under it. */}
      <div className="relative">
        <input
          ref={rangeRef}
          type="range"
          min={0}
          max={Math.ceil(total)}
          step={1}
          value={Math.min(Math.round(time), Math.ceil(total))}
          disabled={disabled}
          onChange={(event) => onScrub(Number(event.target.value))}
          onBlur={() => onScrub(null)}
          aria-label={labels.position}
          aria-valuetext={labels.positionText}
          className="h-11 w-full cursor-pointer accent-burgundy disabled:cursor-not-allowed"
        />
        <div aria-hidden="true" className="pointer-events-none relative mx-2 -mt-2 h-3">
          {marks.map((mark) => (
            <span
              key={mark.at}
              title={mark.label}
              style={{ left: `${(mark.at / total) * 100}%` }}
              className={`absolute top-0 w-0.5 -translate-x-1/2 rounded-full ${mark.section ? "h-3 bg-gold-deep" : "h-2 bg-ink-soft/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-1 flex justify-between text-xs font-medium text-ink-soft tabular-nums">
        <span>{formatTime(time)}</span>
        <span>{formatTime(total)}</span>
      </div>

      {!ended && (
        <div className="mt-3 flex items-center justify-center gap-2">
          <button type="button" onClick={onPrevious} disabled={disabled} className={button} aria-label={labels.previous}>
            <Icon path="M7 6v12M18 6l-8 6 8 6z" />
          </button>
          <button type="button" onClick={onBack} disabled={disabled} className={button} aria-label={labels.back15}>
            <span aria-hidden="true" className="text-sm font-semibold">
              ↺15
            </span>
          </button>
          <button
            type="button"
            onClick={onToggle}
            disabled={disabled}
            className={mainButton}
            aria-label={paused ? labels.play : labels.pause}
          >
            {paused ? <Icon path="M8 5l11 7-11 7z" fill /> : <Icon path="M8 5h3v14H8zM13 5h3v14h-3z" fill />}
          </button>
          <button type="button" onClick={onForward} disabled={disabled} className={button} aria-label={labels.forward15}>
            <span aria-hidden="true" className="text-sm font-semibold">
              15↻
            </span>
          </button>
          <button type="button" onClick={onNext} disabled={disabled} className={button} aria-label={labels.next}>
            <Icon path="M17 6v12M6 6l8 6-8 6z" />
          </button>
        </div>
      )}

      {/* Chapters: the sections of the Mass and their moments. Inline (not a pop-up), so it scrolls naturally on phones. */}
      <div className="mt-3">
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-cream bg-white/60 px-4 text-sm font-medium text-burgundy hover:border-gold"
        >
          <span aria-hidden="true">☰ </span>
          <span>{labels.chapters}</span>
        </button>
        {open && (
          <nav id={panelId} aria-label={labels.chapters} className="mt-3 rounded-2xl bg-cream/60 p-4">
            {sections.map((section) => {
              const isCurrent = section.id === currentSection;
              return (
                <section key={section.id} className="mt-3 first:mt-0">
                  <h3 className={`text-xs font-medium tracking-wider uppercase ${section.available ? "text-gold-deep" : "text-ink-soft/70"}`}>
                    {section.title}
                    {isCurrent && <span className="ml-2 rounded-full bg-burgundy px-2 py-0.5 text-[0.65rem] text-ivory normal-case tracking-normal">{labels.now}</span>}
                  </h3>
                  {section.items.length > 0 ? (
                    <ol className="mt-1">
                      {section.items.map((item) =>
                        item.index !== undefined ? (
                          <li key={item.key}>
                            <button
                              type="button"
                              aria-current={item.index === currentIndex ? "step" : undefined}
                              onClick={() => {
                                onChapter(item.index!);
                                setOpen(false);
                                toggleRef.current?.focus();
                              }}
                              className={`flex min-h-11 w-full items-center gap-2 rounded-xl px-3 text-left ${
                                item.index === currentIndex ? "bg-burgundy text-ivory" : "text-ink hover:bg-white/70"
                              }`}
                            >
                              <span>
                                <span lang={item.lang}>{item.title}</span>
                                {item.note && <span className="ml-1 text-xs opacity-75">· {item.note}</span>}
                              </span>
                            </button>
                          </li>
                        ) : (
                          <li key={item.key} className="flex min-h-11 items-center gap-2 px-3 text-ink-soft/70">
                            <span>
                              <span lang={item.lang}>{item.title}</span>
                              <span className="ml-1 text-xs">· {labels.notYet}</span>
                            </span>
                          </li>
                        ),
                      )}
                    </ol>
                  ) : (
                    <p className="mt-1 px-3 text-sm text-ink-soft/70">{labels.sectionNotYet}</p>
                  )}
                </section>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

function Icon({ path, fill = false }: { path: string; fill?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={fill ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}
