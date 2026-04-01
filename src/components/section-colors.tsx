import { colors } from "@/lib/brand";

const palette = [
  { name: "Primary / Teal", hex: colors.primary, usage: "Backgrounds, cards, primary elements", className: "bg-brand-primary text-white" },
  { name: "Accent / Coral", hex: colors.accent, usage: "CTA buttons, highlights, energy", className: "bg-brand-accent text-white" },
  { name: "AI / Golden", hex: colors.ai, usage: "AI elements, orbit, Nika-related", className: "bg-brand-ai text-brand-dark" },
  { name: "Dark / Navy", hex: colors.dark, usage: "Dark backgrounds, text", className: "bg-brand-dark text-white" },
  { name: "Light / Mint", hex: colors.light, usage: "Light backgrounds", className: "bg-brand-light text-brand-dark border border-gray-200" },
];

const semanticColors = [
  { name: "Success", hex: colors.primary, swatch: "bg-brand-primary" },
  { name: "Warning", hex: colors.ai, swatch: "bg-brand-ai" },
  { name: "Error", hex: colors.error, swatch: "bg-red-500" },
  { name: "Info", hex: "#5EEAD4", swatch: "bg-teal-300" },
];

export function SectionColors() {
  return (
    <section id="colors" className="py-24 px-6 bg-brand-light dark:bg-[#111122]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
          Color System
        </p>
        <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-12">
          Primary Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {palette.map((c) => (
            <div key={c.hex} className="space-y-2">
              <div className={`h-24 rounded-card ${c.className} flex items-end p-3`}>
                <span className="font-mono text-sm opacity-90">{c.hex}</span>
              </div>
              <p className="font-semibold text-sm text-brand-dark dark:text-brand-light">{c.name}</p>
              <p className="text-xs text-brand-dark/60 dark:text-brand-light/50">{c.usage}</p>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-6">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {semanticColors.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${c.swatch}`} />
              <div>
                <p className="font-semibold text-sm text-brand-dark dark:text-brand-light">{c.name}</p>
                <p className="font-mono text-xs text-brand-dark/50 dark:text-brand-light/40">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-6">Dark Mode</h3>
        <div className="rounded-card-lg bg-brand-dark p-8 space-y-3">
          <p className="text-brand-light font-bold text-lg">Heading text</p>
          <p className="text-[#A0A0B8]">Body text trên dark background</p>
          <div className="flex gap-3 mt-4">
            <span className="px-4 py-2 bg-brand-primary text-white rounded-btn text-sm font-semibold">Primary</span>
            <span className="px-4 py-2 bg-brand-accent text-white rounded-btn text-sm font-semibold">Accent</span>
            <span className="px-4 py-2 bg-brand-ai text-brand-dark rounded-btn text-sm font-semibold">AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
