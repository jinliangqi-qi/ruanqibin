"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cases = [
  {
    grade: "课程项目",
    title: "商务英语模拟实训 — 外贸流程全案",
    background: "作为商业英语专业核心课程的重要组成部分，参与为期一学期的外贸业务流程模拟实训。从客户开发、询盘回复、报价核算到合同签订，全流程使用英文操作。",
    solution: "独立完成英文询盘回复邮件撰写、产品报价单制作、模拟商务谈判等环节。通过角色扮演与小组协作，加深对外贸实务流程的理解。",
    result: "课程成绩优异，获得导师好评。熟练掌握外贸函电写作规范与商务谈判基本技巧。",
    tags: ["外贸实务", "英语应用"],
  },
  {
    grade: "调研项目",
    title: "主流跨境电商平台对比分析报告",
    background: "针对亚马逊、速卖通、Shopee 等主流跨境电商平台进行深入调研，分析各平台的市场定位、入驻条件、运营模式和费用结构。",
    solution: "收集各平台官方数据和卖家反馈，从卖家视角进行对比分析。撰写全英文调研报告并进行课堂展示汇报。",
    result: "报告内容详实，演讲展示流畅，获得同学和老师的一致认可。加深了对跨境电商行业的整体理解。",
    tags: ["市场调研", "英语展示"],
  },
  {
    grade: "演讲经验",
    title: "英语演讲比赛 — 商业主题展示",
    background: "多次参加校内英语演讲比赛和课堂商务主题展示活动，主题涵盖国际贸易趋势、跨境电商发展、跨文化商务沟通等。",
    solution: "独立完成演讲稿撰写、PPT 制作和现场演讲。注重商务场景下的专业表达与逻辑清晰度，结合数据图表增强说服力。",
    result: "演讲表现获得好评，有效提升了商务场景下的英文口语表达能力和公开演讲技巧。",
    tags: ["公开演讲", "口语表达"],
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Projects</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
                项目经历<span className="text-blue-500"> · </span>实践展示
              </h1>
              <p className="text-[16px] text-slate-500">大学期间参与的项目和实践经历，展现实际应用能力。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.15}>
                <div className="border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[12px] font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                      {c.grade}
                    </span>
                    {c.tags.map((t) => (
                      <span key={t} className="text-[12px] text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[24px] md:text-[30px] font-bold text-slate-900 tracking-tight mb-8">
                    项目 {i + 1}：{c.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-blue-400 tracking-widest uppercase mb-3">项目背景</div>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{c.background}</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-amber-400 tracking-widest uppercase mb-3">我的角色</div>
                      <p className="text-[14px] text-slate-600 leading-relaxed">{c.solution}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <div className="text-[12px] font-bold text-green-500 tracking-widest uppercase mb-3">项目成果</div>
                      <p className="text-[14px] text-slate-700 leading-relaxed font-medium">{c.result}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Insights</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">实践收获</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                q: "学以致用",
                a: "课堂上学到的商务英语知识在实际项目中得到了充分应用，从函电写作到商务演讲，每一个环节都是对专业能力的检验和提升。",
              },
              {
                q: "团队协作",
                a: "通过小组项目和角色扮演，学会了如何在团队中有效沟通和分工协作，这对未来职场工作至关重要。",
              },
              {
                q: "行业认知",
                a: "通过跨境电商平台调研等项目，对目标行业的运作模式和市场环境有了更深入的了解，为求职方向提供了参考。",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-6 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <h3 className="text-[15px] font-bold text-slate-800 mb-3">{item.q}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.a}</p>
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
