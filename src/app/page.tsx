"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f5]">
      <Navbar />

      {/* ══════ Hero：全宽双栏，大图右置 ══════ */}
      <section className="pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row">
          {/* 左栏 */}
          <div className="flex-1 px-6 md:pl-10 lg:pl-16 md:pr-8 pt-8 md:pt-16 md:pb-12">
            <div className="overflow-hidden mb-3">
              <span className="clip-text block text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]" style={{animationDelay: "0.1s"}}>
                商业英语 &middot; 2026 应届
              </span>
            </div>

            <h1 className="text-[44px] md:text-[64px] lg:text-[72px] font-bold leading-[0.98] tracking-tight text-[#2d2a26] mb-6">
              <span className="overflow-hidden block">
                <span className="clip-text block" style={{animationDelay: "0.2s"}}>阮琪斌</span>
              </span>
              <span className="overflow-hidden block">
                <span className="clip-text block" style={{animationDelay: "0.35s"}}>求职作品集</span>
              </span>
            </h1>

            <div className="overflow-hidden mb-8">
              <p className="clip-text text-[16px] text-[#8c8580] leading-relaxed max-w-[360px]" style={{animationDelay: "0.5s"}}>
                CET-6 550+，具备英语沟通翻译能力。寻找外贸 / 跨境电商方向的机会。
              </p>
            </div>

            <div className="opacity-0" style={{animation: "reveal-up 0.7s 0.7s cubic-bezier(0.22,1,0.36,1) forwards"}}>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c2674a] text-white text-[14px] font-medium rounded-full hover:bg-[#b5583e] transition-colors">
                联系我 <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M5 3.5L10 7.5L5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* 右栏 — 照片占 40% 宽 */}
          <div className="md:w-[40%] lg:w-[38%] opacity-0" style={{animation: "photo-in 1s 0.35s cubic-bezier(0.22,1,0.36,1) forwards"}}>
            <div className="h-[320px] md:h-full min-h-[400px] rounded-l-3xl overflow-hidden">
              <img src="/img/Head.jpg" alt="阮琪斌" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 核心信息条：窄栏居中 ══════ */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="w-6 h-[2px] bg-[#c2674a] mb-6 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
          </AnimateOnScroll>
          <div className="grid grid-cols-3 gap-4">
            {[["专业","商业英语"],["英语","CET-6 550+"],["方向","外贸/跨境电商"]].map(([k,v],i) => (
              <AnimateOnScroll key={k} delay={i*0.1}>
                <div className="border-t border-[#e8e0d8] pt-4">
                  <div className="text-[10px] font-medium text-[#c4bdb6] uppercase tracking-[0.2em] mb-1">{k}</div>
                  <div className="text-[14px] font-semibold text-[#2d2a26]">{v}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 我能做什么：2/3 + 1/3 非对称 ══════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* 左 — 2/3 */}
          <div className="lg:w-2/3 px-6 lg:pl-10 lg:pr-12">
            <AnimateOnScroll>
              <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">What I Offer</span>
              <h2 className="text-[28px] md:text-[38px] font-bold text-[#2d2a26] tracking-tight mt-2 mb-10">我能做什么</h2>
            </AnimateOnScroll>

            <div className="space-y-8">
              {[
                { n:"01", t:"英文商务沟通", d:"外贸函电、邮件回复、产品英文描述，独立完成日常英文商务书面工作。", wide:true },
                { n:"02", t:"英语口语翻译", d:"流利口语，可协助商务会议翻译与客户接待。", wide:false },
                { n:"03", t:"跨境电商运营", d:"了解主流平台操作逻辑，熟悉 Listing 优化与基础数据分析。", wide:false },
              ].map((item,i) => (
                <AnimateOnScroll key={i} delay={i*0.1}>
                  <div className={`flex gap-5 ${item.wide ? '' : 'lg:ml-20'}`}>
                    <span className="text-[14px] font-bold text-[#c2674a] pt-0.5 flex-shrink-0">{item.n}</span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#2d2a26] mb-1">{item.t}</h3>
                      <p className="text-[14px] text-[#8c8580] leading-relaxed max-w-md">{item.d}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* 右 — 1/3 装饰区 */}
          <div className="lg:w-1/3 px-6 lg:px-8 mt-12 lg:mt-0 flex items-end">
            <AnimateOnScroll delay={0.4}>
              <div className="bg-[#fcf9f5] rounded-2xl p-8 w-full">
                <p className="text-[14px] text-[#8c8580] leading-relaxed italic">
                  &ldquo;英语不只是考试分数，<br />更是连接世界的工具。&rdquo;
                </p>
                <div className="mt-6 w-8 h-[2px] bg-[#e8e0d8]" />
                <p className="mt-4 text-[12px] text-[#c4bdb6]">商业英语 · 应届毕业生</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════ 关于：全宽文字 + 标签 ══════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">About</span>
            <h2 className="text-[28px] md:text-[38px] font-bold text-[#2d2a26] tracking-tight mt-2 mb-8">关于我</h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-[17px] text-[#2d2a26] leading-relaxed mb-6">
              阮琪斌，商业英语专业应届毕业生。大学四年系统学习英语听说读写译与国际贸易实务课程，CET-6 550+。
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-[15px] text-[#8c8580] leading-relaxed mb-10">
              具备良好的沟通和快速学习能力，期待加入外贸或跨境电商企业，从基层做起，在实际工作中成长。
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {["CET-6 550+","英语听说读写","外贸函电","跨境电商","跨文化沟通","Office"].map(t => (
                <span key={t} className="px-3 py-1.5 bg-[#f0e2d8]/40 text-[12px] text-[#c2674a] rounded-full">{t}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════ CTA：全宽深色 ══════ */}
      <section className="py-20 md:py-28 bg-[#2d2a26]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-[26px] md:text-[36px] font-bold text-white tracking-tight mb-3">正在寻找机会</h2>
            <p className="text-[15px] text-[#a8a098] mb-8">有合适的岗位？欢迎联系。</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c2674a] text-white text-[15px] font-semibold rounded-full hover:bg-[#b5583e] transition-colors">联系我 →</a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
