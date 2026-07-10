"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const projects = [
  {
    num: "01", tag: "课程项目", title: "商务英语模拟实训",
    desc: "为期一学期的外贸流程模拟，从客户开发到合同签订全英文操作。",
    items: ["英文询盘回复邮件撰写","产品报价单制作","模拟商务谈判与角色扮演"],
    result: "熟练掌握外贸函电写作规范与商务谈判技巧。",
  },
  {
    num: "02", tag: "调研项目", title: "跨境电商平台对比分析",
    desc: "针对亚马逊、速卖通、Shopee 等主流平台深入调研与对比。",
    items: ["平台官方数据与卖家反馈收集","卖家视角优劣势对比","全英文调研报告撰写与展示"],
    result: "加深了对跨境电商行业的整体认知。",
  },
  {
    num: "03", tag: "演讲经验", title: "商务主题英语演讲",
    desc: "多次参加英语演讲比赛与课堂展示，覆盖国际贸易与跨文化沟通主题。",
    items: ["独立完成演讲稿与PPT制作","数据图表增强表达说服力","商务场景专业表达与逻辑性"],
    result: "提升了商务英语口语和公开演讲能力。",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f5]">
      <Navbar />

      {/* ── 头部：左对齐，无右描述 ── */}
      <section className="pt-32 md:pt-44 pb-16">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">Projects</span>
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#2d2a26] tracking-tight mt-2">项目与经历</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 项目列表：每个项目全宽，左右交替排版 ── */}
      {projects.map((p, i) => {
        const isEven = i % 2 === 0;

        return (
          <section key={i} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-white' : ''}`}>
            <div className="px-6 md:px-10 lg:px-16">
              {/* 大编号 + 标签 */}
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16`}>
                {/* 左侧/右侧：编号+标题 */}
                <div className="lg:w-1/2">
                  <AnimateOnScroll>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[80px] md:text-[110px] font-bold text-[#f0e2d8] leading-none tracking-tighter">{p.num}</span>
                      <span className="text-[11px] font-medium text-[#c2674a] bg-[#f0e2d8]/50 px-3 py-1 rounded-full uppercase tracking-wider">{p.tag}</span>
                    </div>
                    <h2 className="text-[24px] md:text-[30px] font-bold text-[#2d2a26] mb-4">{p.title}</h2>
                    <p className="text-[15px] text-[#8c8580] leading-relaxed mb-6">{p.desc}</p>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.1}>
                    <ul className="space-y-2 mb-8">
                      {p.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-[#2d2a26]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c2674a] flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </AnimateOnScroll>
                </div>

                {/* 右侧/左侧：成果卡片 */}
                <div className="lg:w-1/2 flex items-center">
                  <AnimateOnScroll delay={0.2}>
                    <div className="bg-[#fcf9f5] rounded-2xl p-6 border border-[#e8e0d8] w-full">
                      <p className="text-[10px] font-medium text-[#c4bdb6] uppercase tracking-[0.2em] mb-2">成果</p>
                      <p className="text-[15px] text-[#2d2a26] leading-relaxed">{p.result}</p>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── 收获：三列数字 ══ */}
      <section className="py-16 md:py-24 bg-[#2d2a26]">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#a8a098] uppercase tracking-[0.25em]">Insights</span>
          </AnimateOnScroll>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t:"学以致用", d:"课堂知识在实际项目中得到应用，每个环节都检验了专业能力。" },
              { t:"团队协作", d:"小组项目中的沟通分工配合，培养了职场必需的协作能力。" },
              { t:"行业认知", d:"通过调研对目标行业有了深入了解，明确了求职方向。" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i*0.1}>
                <div>
                  <span className="text-[48px] font-bold text-[#c2674a]/30 leading-none">{String(i+1).padStart(2,"0")}</span>
                  <h3 className="text-[16px] font-semibold text-white mt-3 mb-2">{item.t}</h3>
                  <p className="text-[14px] text-[#a8a098] leading-relaxed">{item.d}</p>
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
