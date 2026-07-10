"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const timeline = [
  { y:"2022", t:"进入大学", d:"商业英语专业，开始学英语和国际贸易课。" },
  { y:"2023", t:"考过四级", d:"CET-4 通过，开始参加学校的商务模拟实训。" },
  { y:"2024", t:"考过六级", d:"CET-6 550+，深入学商务函电和外贸实务。" },
  { y:"2025", t:"积累经验", d:"做跨境电商调研、参加英语演讲比赛。" },
  { y:"2026", t:"毕业啦", d:"顺利毕业，开始找外贸/跨境电商方向的工作。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-28 md:pt-40 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">About</span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#2c3e50] tracking-tight mt-2">关于我</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 照片 + 简介 ── */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* 照片 */}
            <AnimateOnScroll>
              <div className="flex-shrink-0">
                <div className="w-[180px] h-[225px] md:w-[220px] md:h-[275px] rounded-3xl shadow-lg ring-4 ring-[#e8f4e8] bg-gradient-to-br from-[#e8f4e8] to-[#c8e6c9] flex items-center justify-center" style={{animation:"bounce-in 0.8s 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",opacity:0}}>
                  <span className="text-[64px] md:text-[80px]">🧑‍🎓</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 信息 + 简介 */}
            <div className="flex-1">
              <AnimateOnScroll delay={0.1}>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                  {[["姓名","阮琪斌"],["专业","商业英语"],["学历","本科·应届"],["城市","广东深圳"]].map(([k,v])=>(
                    <div key={k}>
                      <span className="text-[11px] text-[#8b95a1] uppercase tracking-wider">{k}</span>
                      <p className="text-[14px] font-semibold text-[#2c3e50] mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.15}>
                <p className="text-[15px] text-[#2c3e50] leading-relaxed mb-3">
                  商业英语专业，今年毕业。大学期间系统学了英语听说读写译，还有国际贸易实务课程。
                </p>
                <p className="text-[14px] text-[#8b95a1] leading-relaxed">
                  CET-6 550+，英语口语和书面表达都还行。性格比较主动，愿意学，想找一份外贸或跨境电商的工作，从基础岗位做起。
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── 求职意向 + 经历 ── */}
      <section className="py-12 md:py-20 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* 求职意向 */}
            <div>
              <AnimateOnScroll>
                <h2 className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em] mb-5">🎯 求职意向</h2>
              </AnimateOnScroll>
              <div className="space-y-4">
                {[
                  ["岗位","外贸业务员 / 跨境电商运营 / 商务翻译"],
                  ["行业","外贸进出口 / 跨境电商 / 国际物流"],
                  ["城市","深圳 / 广州（别的城市也行）"],
                  ["类型","全职，从基础做起"],
                ].map(([k,v],i)=>(
                  <AnimateOnScroll key={k} delay={i*0.08}>
                    <div className="bg-white rounded-xl p-4 border border-[#edf0f3]">
                      <span className="text-[11px] text-[#8b95a1]">{k}</span>
                      <p className="text-[14px] text-[#2c3e50] mt-0.5">{v}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* 时间线 */}
            <div>
              <AnimateOnScroll>
                <h2 className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em] mb-5">📅 大学经历</h2>
              </AnimateOnScroll>
              <div className="bg-white rounded-xl border border-[#edf0f3] p-5">
                {timeline.map((item,i)=>(
                  <AnimateOnScroll key={i} delay={i*0.06}>
                    <div className="flex gap-4 py-3 border-b border-[#edf0f3] last:border-0">
                      <span className="w-12 text-[13px] font-semibold text-[#5b8c5a] flex-shrink-0">{item.y}</span>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#2c3e50]">{item.t}</h3>
                        <p className="text-[13px] text-[#8b95a1] mt-0.5">{item.d}</p>
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
