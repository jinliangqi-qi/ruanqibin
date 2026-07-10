"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ══════ Hero：轻松活泼 ══════ */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* 左：照片 — 圆形，亲和 */}
            <div className="flex-shrink-0" style={{animation: "bounce-in 0.8s 0.2s cubic-bezier(0.34,1.56,0.64,1) forwards", opacity: 0}}>
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full shadow-lg ring-4 ring-[#e8f4e8] bg-gradient-to-br from-[#e8f4e8] to-[#c8e6c9] flex items-center justify-center">
                <span className="text-[56px] md:text-[72px]">👋</span>
              </div>
            </div>

            {/* 右：文字 */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-2 opacity-0" style={{animation: "soft-up 0.6s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) forwards"}}>
                <span className="inline-block px-3 py-1 bg-[#e8f4e8] text-[#5b8c5a] text-[12px] font-medium rounded-full">
                  2026 应届毕业生 · 找工作 ing
                </span>
              </div>

              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.12] tracking-tight text-[#2c3e50] mb-4">
                <span className="line-in"><span style={{animationDelay:"0.35s"}}>你好，我是</span></span>
                <span className="line-in"><span style={{animationDelay:"0.5s"}} className="text-[#5b8c5a]">阮琪斌</span></span>
              </h1>

              <p className="text-[16px] text-[#8b95a1] leading-relaxed mb-6 max-w-md mx-auto md:mx-0 opacity-0"
                 style={{animation:"soft-up 0.6s 0.65s cubic-bezier(0.25,0.46,0.45,0.94) forwards"}}>
                商业英语专业，CET-6 550+。<br />想找一份外贸 / 跨境电商方向的工作 🌱
              </p>

              <div className="flex items-center gap-4 justify-center md:justify-start opacity-0"
                   style={{animation:"soft-up 0.6s 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards"}}>
                <a href="/contact" className="px-6 py-3 bg-[#5b8c5a] text-white text-[14px] font-medium rounded-full hover:bg-[#4a7a49] transition-all hover:shadow-lg hover:-translate-y-0.5">
                  联系我
                </a>
                <a href="/about" className="text-[14px] font-medium text-[#8b95a1] hover:text-[#2c3e50] transition-colors">
                  了解更多 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 三个标签 ══════ */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "🎓", label: "专业", value: "商业英语" },
              { icon: "📖", label: "英语", value: "CET-6 550+" },
              { icon: "🎯", label: "方向", value: "外贸/跨境电商" },
            ].map((item,i) => (
              <AnimateOnScroll key={item.label} delay={i*0.1}>
                <div className="bg-[#f8f9fa] rounded-2xl p-5 text-center hover:bg-[#e8f4e8] transition-colors">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-[11px] text-[#8b95a1] uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-[14px] font-semibold text-[#2c3e50]">{item.value}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 我能做什么 ══════ */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">What I Can Do</span>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#2c3e50] mt-2">我能做什么</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "✉️", title: "英文商务沟通", desc: "外贸函电、邮件回复、产品介绍，独立完成日常英文商务书面工作。" },
              { icon: "🗣️", title: "英语口语翻译", desc: "流利口语，可协助会议翻译、客户接待等商务沟通场景。" },
              { icon: "📦", title: "跨境电商运营", desc: "了解主流平台操作逻辑，熟悉 Listing 优化与基础数据分析。" },
            ].map((item,i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#edf0f3]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-[17px] font-semibold text-[#2c3e50] mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#8b95a1] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 关于我 ══════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">About</span>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#2c3e50] mt-2">关于我</h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-[#edf0f3] shadow-sm">
              <p className="text-[16px] text-[#2c3e50] leading-relaxed mb-4">
                我叫阮琪斌，商业英语专业，今年毕业。大学四年学了英语听说读写译和国际贸易课程，CET-6 考了 550+。
              </p>
              <p className="text-[15px] text-[#8b95a1] leading-relaxed mb-6">
                我性格比较主动，愿意学新东西。想找一份外贸或跨境电商的工作，从基础做起，慢慢积累经验。
              </p>
              <div className="flex flex-wrap gap-2">
                {["CET-6 550+","英语听说读写","外贸函电","跨境电商","跨文化沟通","Office"].map(t=>(
                  <span key={t} className="px-3 py-1.5 bg-[#e8f4e8] text-[13px] text-[#5b8c5a] rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#5b8c5a]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-[26px] md:text-[36px] font-bold text-white tracking-tight mb-3">
              正在找工作机会 ✨
            </h2>
            <p className="text-[15px] text-[#c8e6c9] mb-8">有合适的岗位？欢迎联系我聊聊。</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5b8c5a] text-[15px] font-semibold rounded-full hover:bg-[#e8f4e8] transition-all hover:shadow-lg">
              联系我 →
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
