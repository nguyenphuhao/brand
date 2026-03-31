import { Check, X } from "lucide-react";
import { brandAdjectives } from "@/lib/brand";

const dos = [
  "Tìm thấy 3 người rảnh gần bạn!",
  "Sân Thành Công còn trống lúc 6h tối, đặt ngay?",
  "Trận hôm nay vui không? Đánh giá đối thủ nhé",
];

const donts = [
  "Hệ thống đã tìm thấy kết quả phù hợp với yêu cầu của bạn",
  "Vui lòng chờ trong giây lát",
  'Không dùng jargon: "AI model", "algorithm", "processing"',
];

export function SectionPersonality() {
  return (
    <section id="personality" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
          Brand Personality
        </p>
        <h2 className="text-3xl font-bold text-brand-dark mb-12">
          70% Community · 20% Energetic · 10% Premium
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {brandAdjectives.map((a) => (
            <div key={a.word} className="bg-brand-light rounded-card p-5 text-center">
              <p className="font-bold text-brand-primary text-lg">{a.word}</p>
              <p className="text-xs text-brand-dark/60 mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-dark rounded-card-lg p-8 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-ai mb-3">
            Brand as a Person
          </p>
          <p className="text-brand-light text-lg leading-relaxed">
            Một người bạn năng động, luôn biết ai đang rảnh, sân nào còn trống,
            và sẵn sàng giúp tổ chức mọi thứ. Không phải app &ldquo;tech lạnh&rdquo;.
          </p>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-6">Tone of Voice</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-brand-primary mb-3">Do&apos;s</p>
            <ul className="space-y-2">
              {dos.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-brand-dark/80">
                  <Check className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>&ldquo;{d}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-500 mb-3">Don&apos;ts</p>
            <ul className="space-y-2">
              {donts.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-brand-dark/80">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>&ldquo;{d}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
