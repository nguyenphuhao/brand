import { typeScale } from "@/lib/brand";

export function SectionTypography() {
  return (
    <section id="typography" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
          Typography
        </p>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">
          Plus Jakarta Sans
        </h2>
        <p className="text-brand-dark/60 mb-12 max-w-2xl">
          Geometric sans with personality. Friendly feel phù hợp community vibe,
          dễ đọc trên mobile, ít phổ biến hơn Inter nên brand nhận diện tốt hơn.
        </p>
        <div className="space-y-6 mb-16">
          {typeScale.map((t) => (
            <div key={t.name} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-gray-100 pb-4">
              <div className="w-32 shrink-0">
                <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">{t.name}</p>
                <p className="text-xs text-brand-dark/40 font-mono">{t.size} / {t.weight}</p>
              </div>
              <p
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: t.lineHeight,
                  letterSpacing: t.tracking,
                }}
                className="text-brand-dark"
              >
                Nhịp kết nối mọi cuộc chơi
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-4">Vietnamese Diacritics</h3>
        <p className="text-lg text-brand-dark/80 leading-relaxed">
          Tìm thấy 3 người rảnh gần bạn! Sân Thành Công còn trống lúc 6h tối.
          Ghép tôi với đội trình độ tương đương. Đặt sân cầu lông quận Bình Thạnh.
          Chia tiền sân: 150.000đ ÷ 4 người = 37.500đ/người.
        </p>
      </div>
    </section>
  );
}
