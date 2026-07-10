"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const timeline = [
  { y:"2022", t:"大学入学", d:"商业英语专业，系统学习英语及国际贸易课程。" },
  { y:"2023", t:"通过 CET-4", d:"通过四级考试，参与校内商务模拟实训。" },
  { y:"2024", t:"通过 CET-6", d:"六级 550+，深入学习商务函电与外贸实务。" },
  { y:"2025", t:"实践积累", d:"跨境电商调研、商务英语演讲比赛。" },
  { y:"2026", t:"毕业求职", d:"完成学业，寻求外贸/跨境电商机会。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f5]">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-32 md:pt-44 pb-8">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">About</span>
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#2d2a26] tracking-tight mt-2">关于我</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 照片区域：全宽，照片大左 + 信息浮在右侧 ── */}
      <section className="pb-12 md:pb-20">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* 照片 — 大尺寸 */}
            <AnimateOnScroll>
              <div className="lg:w-[320px] flex-shrink-0">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden" style={{animation:"photo-in 0.8s 0.3s cubic-bezier(0.22,1,0.36,1) forwards"}}>
                  <img src="/img/Head.jpg" alt="阮琪斌" className="w-full h-full object-cover" />
                </div>
              </div>
            </AnimateOnScroll>

            {/* 基本信息 + 简介 */}
            <div className="flex-1 space-y-8">
              {/* 基本信息行 */}
              <AnimateOnScroll delay={0.1}>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {[["姓名","阮琪斌"],["专业","商业英语"],["学历","本科 · 应届"],["所在地","广东深圳"]].map(([k,v]) => (
                    <div key={k}>
                      <span className="text-[11px] text-[#c4bdb6] uppercase tracking-wider">{k}</span>
                      <p className="text-[14px] font-semibold text-[#2d2a26] mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* 简介 */}
              <AnimateOnScroll delay={0.2}>
                <p className="text-[15px] text-[#2d2a26] leading-relaxed max-w-lg">
                  商业英语专业应届毕业生。在校期间系统学习了英语听说读写译及国际贸易实务课程，CET-6 550+，具备流利的英语口语表达和书面翻译能力。
                </p>
                <p className="text-[14px] text-[#8c8580] leading-relaxed mt-3 max-w-lg">
                  积极主动，学习能力强，期待加入外贸或跨境电商企业，从基层岗位做起。
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── 求职意向 + 时间线：两栏不同宽 ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* 求职意向：窄栏 */}
            <div className="lg:w-2/5">
              <AnimateOnScroll>
                <div className="w-8 h-[2px] bg-[#c2674a] mb-6 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
                <h2 className="text-[12px] font-medium text-[#8c8580] uppercase tracking-[0.2em] mb-6">求职意向</h2>
              </AnimateOnScroll>

              <div className="space-y-5">
                {[
                  ["目标岗位","外贸业务员 / 跨境电商运营 / 商务英语翻译"],
                  ["目标行业","外贸进出口 / 跨境电商 / 国际物流"],
                  ["期望城市","深圳 / 广州（接受其他城市）"],
                  ["工作性质","全职，从基础岗位做起"],
                ].map(([k,v],i) => (
                  <AnimateOnScroll key={k} delay={i*0.08}>
                    <div>
                      <span className="text-[11px] text-[#c4bdb6] uppercase tracking-wider">{k}</span>
                      <p className="text-[14px] text-[#2d2a26] mt-0.5">{v}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* 时间线：宽栏 */}
            <div className="lg:w-3/5">
              <AnimateOnScroll>
                <div className="w-8 h-[2px] bg-[#c2674a] mb-6 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
                <h2 className="text-[12px] font-medium text-[#8c8580] uppercase tracking-[0.2em] mb-6">大学经历</h2>
              </AnimateOnScroll>

              <div className="space-y-0">
                {timeline.map((item,i) => (
                  <AnimateOnScroll key={i} delay={i*0.06}>
                    <div className="flex gap-4 py-3 border-b border-[#e8e0d8] last:border-0">
                      <span className="w-12 text-[13px] font-medium text-[#c2674a] flex-shrink-0">{item.y}</span>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#2d2a26]">{item.t}</h3>
                        <p className="text-[13px] text-[#8c8580] mt-0.5">{item.d}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
