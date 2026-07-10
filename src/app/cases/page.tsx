"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const experiences = [
  {
    icon: "📚",
    title: "外贸模拟课程",
    desc: "大三下学期有一门外贸实务课，老师让我们分组模拟外贸流程。我负责写英文询盘邮件和做报价单，虽然只是课堂练习，但大概了解了外贸是怎么回事。",
    items: ["用英文写了几封模拟的询盘回复邮件","做了简单的产品报价单","小组一起模拟了一次商务谈判"],
    result: "对外贸函电的写法有了基本概念，知道询盘、报价、合同这些环节。",
  },
  {
    icon: "📊",
    title: "跨境电商课程调研",
    desc: "商务英语专业课有个作业，让我们研究跨境电商平台。我和同学一起看了看亚马逊、速卖通、Shopee 这几个平台，写了个对比报告。",
    items: ["查了一下各平台的基本情况和入驻条件","从新手卖家角度做了简单的优劣势分析","用英文写了调研报告，课上做了展示"],
    result: "对跨境电商行业有了基础的了解，知道了不同平台的特点。",
  },
  {
    icon: "🎤",
    title: "课堂英语展示",
    desc: "大学里经常有课堂展示，做过几次关于国际贸易和商务沟通的英文演讲。虽然一开始挺紧张的，但多练几次就好多了。",
    items: ["自己写演讲稿和做 PPT","试着用一些简单的数据来支持观点","注意表达的逻辑和清晰度"],
    result: "英语口语表达能力比刚入学时好了不少，站在台上也不那么紧张了。",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 md:pt-40 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">Experience</span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#2c3e50] tracking-tight mt-2">在校经历</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-[#edf0f3] overflow-hidden hover:border-[#5b8c5a] hover:shadow-md transition-all">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{exp.icon}</span>
                      <span className="text-[11px] font-medium text-[#5b8c5a] bg-[#e8f4e8] px-2.5 py-1 rounded-full">大学期间</span>
                    </div>

                    <h2 className="text-[20px] md:text-[24px] font-bold text-[#2c3e50] mb-3">{exp.title}</h2>
                    <p className="text-[14px] text-[#8b95a1] leading-relaxed mb-5">{exp.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <p className="text-[11px] font-medium text-[#8b95a1] uppercase tracking-wider mb-2">做了什么</p>
                        <ul className="space-y-1.5">
                          {exp.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-[13px] text-[#2c3e50]">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5b8c5a] flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#e8f4e8]/50 rounded-xl p-4">
                        <p className="text-[11px] font-medium text-[#5b8c5a] uppercase tracking-wider mb-1">学到了什么</p>
                        <p className="text-[13px] text-[#2c3e50] leading-relaxed">{exp.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 自我认知 ── */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-[20px] font-semibold text-[#2c3e50]">一些真心话</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: "经验不多但愿意学",
                d: "作为应届生，确实没有太多工作经验。但每次课堂项目和作业我都认真对待，相信只要肯学，很快就能上手。",
              },
              {
                t: "基础还行",
                d: "英语六级 550+，日常沟通和书面表达问题不大。商务英语方面理论知识学了一些，就缺实践机会。",
              },
              {
                t: "不怕从零开始",
                d: "我知道刚毕业要从基础岗位做起。不挑不拣，踏踏实实干，争取早日独当一面。",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#edf0f3]">
                  <span className="text-[32px] font-bold text-[#5b8c5a]/20 leading-none">{String(i + 1).padStart(2, "0")}</span>
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
