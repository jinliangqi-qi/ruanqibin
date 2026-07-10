"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const skills = [
  { group: "语言能力", items: [
    { name: "英语听说", pct: 85, desc: "流利日常与商务口语" },
    { name: "英语读写", pct: 90, desc: "CET-6 550+ 精准表达" },
    { name: "商务函电", pct: 80, desc: "外贸邮件与文书写作" },
  ]},
  { group: "实用技能", items: [
    { name: "国际贸易知识", pct: 75, desc: "外贸流程与基础单证" },
    { name: "跨文化沟通", pct: 80, desc: "中西方商务差异应对" },
    { name: "Office 办公", pct: 85, desc: "Word / Excel / PPT" },
  ]},
];

const certs = [
  { title: "大学英语四级 CET-4", detail: "已通过", year: "2023" },
  { title: "大学英语六级 CET-6", detail: "550+", year: "2024" },
  { title: "商业英语专业 本科", detail: "应届毕业", year: "2026" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f5]">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-32 md:pt-44 pb-8">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">Skills</span>
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#2d2a26] tracking-tight mt-2">专业技能</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 技能：4/6 + 2/6 非对称两栏 ── */}
      <section className="py-12 md:py-20">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
            {/* 左栏：2/3 */}
            <div className="lg:w-7/12 lg:pr-16">
              <AnimateOnScroll>
                <div className="w-8 h-[2px] bg-[#c2674a] mb-8 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
                <h2 className="text-[12px] font-medium text-[#8c8580] uppercase tracking-[0.2em] mb-8">{skills[0].group}</h2>
              </AnimateOnScroll>
              <div className="space-y-8">
                {skills[0].items.map((s,i) => (
                  <AnimateOnScroll key={s.name} delay={i*0.1}>
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[15px] font-semibold text-[#2d2a26]">{s.name}</span>
                        <span className="text-[12px] text-[#c2674a] font-medium">{s.pct}%</span>
                      </div>
                      <div className="h-[4px] bg-[#f0e2d8] overflow-hidden">
                        <div className="h-full transition-all duration-[1.4s]" style={{
                          width: `${s.pct}%`,
                          background: "linear-gradient(90deg, #c2674a 0%, #d4956a 100%)"
                        }} />
                      </div>
                      <p className="text-[13px] text-[#8c8580] mt-1.5">{s.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* 右栏：1/3 */}
            <div className="lg:w-5/12 lg:pl-16 lg:pt-20">
              <AnimateOnScroll>
                <div className="w-8 h-[2px] bg-[#c2674a] mb-8 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
                <h2 className="text-[12px] font-medium text-[#8c8580] uppercase tracking-[0.2em] mb-8">{skills[1].group}</h2>
              </AnimateOnScroll>
              <div className="space-y-8">
                {skills[1].items.map((s,i) => (
                  <AnimateOnScroll key={s.name} delay={i*0.1}>
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[15px] font-semibold text-[#2d2a26]">{s.name}</span>
                        <span className="text-[12px] text-[#c2674a] font-medium">{s.pct}%</span>
                      </div>
                      <div className="h-[4px] bg-[#f0e2d8] overflow-hidden">
                        <div className="h-full transition-all duration-[1.4s]" style={{
                          width: `${s.pct}%`,
                          background: "linear-gradient(90deg, #c2674a 0%, #d4956a 100%)"
                        }} />
                      </div>
                      <p className="text-[13px] text-[#8c8580] mt-1.5">{s.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 证书：横向三条 ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <div className="w-8 h-[2px] bg-[#c2674a] mb-8 line-grow" style={{animationDelay:"0.3s",animationFillMode:"forwards"}} />
            <h2 className="text-[12px] font-medium text-[#8c8580] uppercase tracking-[0.2em] mb-10">证书与资质</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certs.map((c,i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div className="border-t-2 border-[#c2674a] pt-5">
                  <span className="text-[11px] text-[#c4bdb6]">{c.year}</span>
                  <h3 className="text-[15px] font-semibold text-[#2d2a26] mt-1">{c.title}</h3>
                  <p className="text-[13px] text-[#8c8580] mt-0.5">{c.detail}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
