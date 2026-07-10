"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const skillGroups = [
  {
    icon: "🌐",
    title: "语言能力",
    items: [
      { name:"英语听说", pct:85, desc:"日常和商务口语沟通没问题" },
      { name:"英语读写", pct:90, desc:"CET-6 550+，书面表达准确" },
      { name:"商务函电", pct:80, desc:"外贸邮件和商务文书写作" },
    ]
  },
  {
    icon: "💼",
    title: "实用技能",
    items: [
      { name:"国际贸易", pct:75, desc:"熟悉外贸流程和基础单证" },
      { name:"跨文化沟通", pct:80, desc:"了解中西方商务文化差异" },
      { name:"办公软件", pct:85, desc:"Word / Excel / PPT" },
    ]
  },
];

const certs = [
  { title:"大学英语四级", detail:"CET-4 · 已通过", year:"2023", icon:"📜" },
  { title:"大学英语六级", detail:"CET-6 · 550+", year:"2024", icon:"🏅" },
  { title:"商业英语专业", detail:"大专 · 应届毕业", year:"2026", icon:"🎓" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-28 md:pt-40 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">Skills</span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#2c3e50] tracking-tight mt-2">专业技能</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 技能：两栏 ── */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillGroups.map((group, gi) => (
              <div key={group.title}>
                <AnimateOnScroll delay={gi*0.1}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl">{group.icon}</span>
                    <h2 className="text-[16px] font-semibold text-[#2c3e50]">{group.title}</h2>
                  </div>
                </AnimateOnScroll>

                <div className="space-y-5">
                  {group.items.map((s,i) => (
                    <AnimateOnScroll key={s.name} delay={gi*0.15 + i*0.08}>
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-[14px] font-medium text-[#2c3e50]">{s.name}</span>
                          <span className="text-[12px] text-[#5b8c5a] font-semibold">{s.pct}%</span>
                        </div>
                        <div className="h-2 bg-[#f0f2f4] rounded-full overflow-hidden">
                          <div className="h-full bg-[#5b8c5a] rounded-full transition-all duration-[1.2s]" style={{width:`${s.pct}%`}} />
                        </div>
                        <p className="text-[12px] text-[#8b95a1] mt-1.5">{s.desc}</p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 证书 ── */}
      <section className="py-12 md:py-20 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em] mb-6">证书与资质</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certs.map((c,i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#edf0f3] hover:border-[#5b8c5a] transition-all hover:shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-[11px] text-[#8b95a1]">{c.year}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#2c3e50]">{c.title}</h3>
                  <p className="text-[13px] text-[#8b95a1] mt-1">{c.detail}</p>
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
