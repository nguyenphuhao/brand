import { Logo } from "./logo";
import { brandAdjectives } from "@/lib/brand";

export function SectionHero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-brand-light px-6 text-center"
    >
      <Logo variant="dark" className="w-32 md:w-40 mb-8" />
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
        Playnika
      </h1>
      <p className="text-lg md:text-xl text-brand-light/70 mb-8">
        Nhịp kết nối mọi cuộc chơi
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {brandAdjectives.map((a) => (
          <span
            key={a.word}
            className="px-4 py-1.5 rounded-full border border-brand-primary/30 text-sm text-brand-primary"
          >
            {a.word}
          </span>
        ))}
      </div>
    </section>
  );
}
