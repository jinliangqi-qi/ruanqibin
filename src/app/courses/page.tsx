"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const skills = [
  { title: "英语听说读写", desc: "CET-4、CET-6 均高分通过，具备流利的英语听说能力和精准的书面翻译能力，可无障碍进行英文商务沟通。", level: "CET-6 550+", highlight: true },
  { title: "商务英语应用", desc: "掌握外贸函电写作、商务谈判用语、产品英文介绍等实用技能，熟悉国际贸易术语与流程。", level: "熟练掌握", highlight: false },
  { title: "跨文化沟通", desc: "了解中西方文化差异，能够在跨文化商务场景中得体沟通，避免文化误解。", level: "熟练掌握", highlight: false },
];

const languages = [
  { g: "英", name: "英语", topics: "听说读写全面掌握，CET-6 550+" },
  { g: "中", name: "中文", topics: "母语，普通话标准，文字表达能力强" },
  { g: "办", name: "办公软件", topics: "Word / Excel / PPT 高效使用" },
  { g: "贸", name: "外贸知识", topics: "外贸流程、单证操作、跨境电商基础" },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Skills</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
                专业技能<span className="text-blue-500">展示</span>
              </h1>
              <p className="text-[16px] text-slate-500">商业英语专业核心能力展示，涵盖语言能力、商务应用与综合素质。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Core Skills */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((c, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.12}>
                <div className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${c.highlight ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl" : "bg-white shadow-sm hover:shadow-xl border border-slate-100"}`}>
                  {c.highlight && <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full">核心能力</div>}
                  <h3 className={`text-xl font-bold mb-3 ${c.highlight ? "text-white" : "text-slate-800"}`}>{c.title}</h3>
                  <p className={`text-[14px] leading-relaxed mb-5 ${c.highlight ? "text-slate-300" : "text-slate-500"}`}>{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[15px] font-bold tracking-tight ${c.highlight ? "text-amber-400" : "text-blue-500"}`}>{c.level}</span>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-[13px] font-medium ${c.highlight ? "text-slate-400" : "text-slate-400"}`}>
                      <CheckCircle className="w-3.5 h-3.5" />已认证
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Details */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Details</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">综合技能清单</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {languages.map((g, i) => (
              <AnimateOnScroll key={g.name} anim="fade-up" delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[14px] font-bold text-blue-500">{g.g}</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-800 mb-1">{g.name}</h3>
                    <p className="text-[13px] text-slate-500">{g.topics}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Additional skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            {[
              { label: "英语证书", detail: "CET-4 通过，CET-6 550+，具备较强的英语综合应用能力" },
              { label: "计算机能力", detail: "熟练使用 Word / Excel / PowerPoint，具备基本的数据处理能力" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={(i + 4) * 0.06}>
                <div className="bg-white rounded-2xl p-5 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-800 mb-1">{item.label}</h3>
                    <p className="text-[13px] text-slate-500">{item.detail}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <AnimateOnScroll anim="fade-up">
            <h2 className="text-[24px] md:text-[32px] font-bold text-slate-900 tracking-tight mb-4">想了解更多？</h2>
            <p className="text-[15px] text-slate-500 mb-8">如果您有合适的工作机会，欢迎联系我进一步沟通。</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg">
              联系我 <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
