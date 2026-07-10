"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const projects = [
  {
    icon: "📝", tag: "课程项目",
    title: "商务英语模拟实训",
    desc: "做了一个学期的外贸流程模拟，从找客户到签合同，全程用英文操作。",
    items: ["写英文询盘回复邮件","做产品报价单","模拟商务谈判"],
    result: "课程成绩不错，学会了外贸函电怎么写。",
  },
  {
    icon: "🔍", tag: "调研项目",
    title: "跨境电商平台调研",
    desc: "研究了亚马逊、速卖通、Shopee 这几个平台，做了个对比分析。",
    items: ["搜集平台数据和卖家反馈","从卖家角度对比优缺点","写全英文调研报告 + 课堂展示"],
    result: "对跨境电商行业有了比较全面的了解。",
  },
  {
    icon: "🎤", tag: "演讲经验",
    title: "英语演讲 & 展示",
    desc: "参加过几次英语演讲比赛和课堂展示，话题主要是国际贸易和跨文化沟通。",
    items: ["自己写稿 + 做PPT","用数据图表辅助表达","注意商务场景的专业表达"],
    result: "商务英语口语和公开演讲能力提升了不少。",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-28 md:pt-40 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">Projects</span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#2c3e50] tracking-tight mt-2">项目经历</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 项目列表 ── */}
      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {projects.map((p,i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div className="bg-white rounded-2xl border border-[#edf0f3] overflow-hidden hover:border-[#5b8c5a] hover:shadow-md transition-all">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{p.icon}</span>
                      <span className="text-[11px] font-medium text-[#5b8c5a] bg-[#e8f4e8] px-2.5 py-1 rounded-full">{p.tag}</span>
                    </div>

                    <h2 className="text-[20px] md:text-[24px] font-bold text-[#2c3e50] mb-3">{p.title}</h2>
                    <p className="text-[14px] text-[#8b95a1] leading-relaxed mb-5">{p.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <p className="text-[11px] font-medium text-[#8b95a1] uppercase tracking-wider mb-2">做了什么</p>
                        <ul className="space-y-1.5">
                          {p.items.map((item,j)=>(
                            <li key={j} className="flex items-start gap-2 text-[13px] text-[#2c3e50]">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5b8c5a] flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#e8f4e8]/50 rounded-xl p-4">
                        <p className="text-[11px] font-medium text-[#5b8c5a] uppercase tracking-wider mb-1">收获</p>
                        <p className="text-[13px] text-[#2c3e50] leading-relaxed">{p.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 感悟 ── */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em] mb-2">Insights</h2>
              <p className="text-[20px] font-semibold text-[#2c3e50]">这些经历教会了我</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t:"学以致用", d:"课堂上学的商务英语知识，在项目里真用上了。写函电、做演讲，每个环节都在练。" },
              { t:"团队合作", d:"小组项目让我学会了怎么跟别人配合，怎么沟通分工，这些职场肯定用得上。" },
              { t:"了解行业", d:"通过做调研，对外贸和跨境电商有了更具体的认识，也明确了想去的方向。" },
            ].map((item,i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#edf0f3]">
                  <span className="text-[32px] font-bold text-[#5b8c5a]/20 leading-none">{String(i+1).padStart(2,"0")}</span>
                  <h3 className="text-[16px] font-semibold text-[#2c3e50] mt-2 mb-2">{item.t}</h3>
                  <p className="text-[14px] text-[#8b95a1] leading-relaxed">{item.d}</p>
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
