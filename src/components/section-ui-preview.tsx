import { Hand, Dumbbell, MapPin, Clock, Trophy, Medal, Award, Bot, Mic } from "lucide-react";

function MockHome() {
  return (
    <div className="bg-brand-dark rounded-card-lg p-4 text-white w-72 shrink-0">
      <div className="flex items-center gap-2">
        <p className="font-bold text-lg">Chào Hào!</p>
        <Hand className="w-5 h-5 text-brand-ai" />
      </div>
      <p className="text-sm text-white/60 mb-4">3 người bạn đang tìm trận</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { Icon: Dumbbell, name: "Cầu lông", count: 12, bg: "bg-brand-primary/20" },
          { Icon: Dumbbell, name: "Bóng đá", count: 8, bg: "bg-brand-accent/20" },
        ].map((s) => (
          <div key={s.name} className={`${s.bg} rounded-btn p-3`}>
            <s.Icon className="w-5 h-5 text-white/80" />
            <p className="text-xs font-semibold mt-1">{s.name}</p>
            <p className="text-xs text-white/50">{s.count} người rảnh</p>
          </div>
        ))}
      </div>
      <button className="w-full bg-brand-accent text-white text-sm font-semibold py-2.5 rounded-btn">
        Tìm người chơi ngay
      </button>
    </div>
  );
}

function MockBooking() {
  return (
    <div className="bg-white rounded-card-lg p-4 w-72 shrink-0 border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-brand-primary" />
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Đặt sân</p>
      </div>
      <div className="space-y-3">
        {[
          { name: "Sân Thành Công", court: "Court 3", time: "18:00 – 19:30", price: "150,000đ" },
          { name: "Sân Phú Nhuận", court: "Court 1", time: "19:00 – 20:30", price: "180,000đ" },
        ].map((s) => (
          <div key={s.name} className="border border-gray-100 rounded-btn p-3">
            <p className="font-semibold text-sm text-brand-dark">{s.name} — {s.court}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-3 h-3 text-brand-dark/40" />
              <p className="text-xs text-brand-dark/50">{s.time} · {s.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full bg-brand-accent text-white text-sm font-semibold py-2.5 rounded-btn mt-3">
        Đặt sân ngay
      </button>
    </div>
  );
}

function MockClub() {
  return (
    <div className="bg-white rounded-card-lg p-4 w-72 shrink-0 border border-gray-100">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary mb-3">CLB Cầu Lông Q7</p>
      <div className="space-y-2">
        {[
          { name: "Minh Tuấn", rank: "#1", Icon: Trophy },
          { name: "Hoàng Anh", rank: "#2", Icon: Medal },
          { name: "Thu Hà", rank: "#3", Icon: Award },
        ].map((m) => (
          <div key={m.name} className="flex items-center gap-3 py-2 border-b border-gray-50">
            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <m.Icon className="w-4 h-4 text-brand-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-dark">{m.name}</p>
              <p className="text-xs text-brand-dark/40">{m.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockNika() {
  return (
    <div className="bg-brand-dark rounded-card-lg p-4 w-72 shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-ai flex items-center justify-center">
          <Bot className="w-4 h-4 text-brand-dark" />
        </div>
        <p className="text-sm font-semibold text-brand-ai">Nika</p>
      </div>
      <div className="space-y-3">
        <div className="bg-brand-primary/20 rounded-btn p-3 max-w-[85%]">
          <p className="text-sm text-white">Tìm cho tôi sân cầu lông gần đây</p>
        </div>
        <div className="bg-brand-ai/20 rounded-btn p-3 max-w-[85%] ml-auto">
          <p className="text-sm text-brand-ai">Có 3 sân gần bạn trong bán kính 2km! Sân Thành Công còn trống lúc 6h tối</p>
        </div>
      </div>
    </div>
  );
}

export function SectionUIPreview() {
  return (
    <section id="ui-preview" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-ai mb-4">
          UI Preview
        </p>
        <h2 className="text-3xl font-bold text-brand-light mb-12">
          Brand in Context
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
          <MockHome />
          <MockBooking />
          <MockClub />
          <MockNika />
        </div>
      </div>
    </section>
  );
}
