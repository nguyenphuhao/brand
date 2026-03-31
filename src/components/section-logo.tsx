import { Logo } from "./logo";
import { LogoIcon } from "./logo-icon";

const logoMeaning = [
  { icon: "🏀", label: "Teal Ball", desc: "Cuộc chơi, thể thao" },
  { icon: "▶", label: "Play", desc: "Action, bắt đầu chơi" },
  { icon: "🪐", label: "Golden Orbit", desc: "Nika AI bao quanh, voice wave, nhịp kết nối" },
  { icon: "●●", label: "Coral Dots", desc: "Players / community xoay quanh cuộc chơi" },
];

export function SectionLogo() {
  return (
    <section id="logo" className="py-24 px-6 bg-brand-light">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
          Logo
        </p>
        <h2 className="text-3xl font-bold text-brand-dark mb-12">
          Saturn Play Ball
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="flex items-center justify-center h-48 rounded-card-lg bg-brand-dark">
            <Logo variant="dark" className="w-28" />
          </div>
          <div className="flex items-center justify-center h-48 rounded-card-lg bg-brand-light border border-gray-200">
            <Logo variant="light" className="w-28" />
          </div>
          <div className="flex items-center justify-center h-48 rounded-card-lg bg-white border border-gray-200">
            <Logo variant="white" className="w-28" />
          </div>
          <div className="flex items-center justify-center h-48 rounded-card-lg bg-brand-primary">
            <Logo variant="teal" className="w-28" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-6">App Icons</h3>
        <div className="flex gap-6 mb-16 flex-wrap">
          <LogoIcon variant="dark" size={64} />
          <LogoIcon variant="teal" size={64} />
          <LogoIcon variant="white" size={64} />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-6">Elements & Meaning</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logoMeaning.map((m) => (
            <div key={m.label} className="bg-white rounded-card p-4 border border-gray-100">
              <p className="text-2xl mb-2">{m.icon}</p>
              <p className="font-semibold text-sm text-brand-dark">{m.label}</p>
              <p className="text-xs text-brand-dark/60 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
