export function SectionStory() {
  return (
    <section id="story" className="py-24 px-6 max-w-3xl mx-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-4">
        Brand Story
      </p>
      <h2 className="text-3xl font-bold text-brand-dark mb-8">
        Play + Nika = Nhịp Kết
      </h2>
      <div className="space-y-6 text-brand-dark/80 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Vision</h3>
          <p>
            Nền tảng cộng đồng thể thao số 1, nơi mọi người chơi, câu lạc bộ
            và chủ sân có thể kết nối với nhau một cách dễ dàng, thông minh và
            tự nhiên nhất.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Mission</h3>
          <p>
            Kết nối cộng đồng thể thao bằng AI, giúp mọi cuộc chơi trở nên dễ
            dàng hơn. Người chơi tập trung vào điều quan trọng nhất: chơi, kết
            nối và phát triển cộng đồng.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Ý nghĩa tên</h3>
          <p>
            <strong className="text-brand-accent">Play</strong> — chơi thể thao,
            vận động, kết nối cộng đồng, niềm vui trong mỗi cuộc chơi.
          </p>
          <p className="mt-2">
            <strong className="text-brand-ai">Nika</strong> — Nhịp Kết. Nhịp
            chơi, nhịp kết nối, nhịp cộng đồng. Đồng thời là hình tượng AI
            companion — người bạn đồng hành thông minh luôn sẵn sàng hỗ trợ.
          </p>
        </div>
      </div>
    </section>
  );
}
