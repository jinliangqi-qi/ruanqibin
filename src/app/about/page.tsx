"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const education = [
  { year: "2022", title: "大学入学", desc: "入学商业英语专业，系统学习英语听说读写译及国际贸易实务课程。" },
  { year: "2023", title: "英语能力突破", desc: "通过大学英语四级考试（CET-4），开始参与校内商务模拟实训项目。" },
  { year: "2024", title: "专业能力提升", desc: "通过大学英语六级考试（CET-6 550+），深入学习商务英语函电与外贸实务。" },
  { year: "2025", title: "商务实践积累", desc: "参与跨境电商平台调研与英语商务演讲比赛，积累实际应用经验。" },
  { year: "2026", title: "毕业求职", desc: "顺利完成商业英语专业学业，开始寻求在外贸/跨境电商领域的工作机会。" },
];

const values = [
  { title: "语言能力", desc: "通过系统学习掌握扎实的英语基础，具备流利的英语听说读写能力，可胜任商务场景下的英文沟通与翻译工作。" },
  { title: "商务素养", desc: "熟悉国际贸易基本流程，了解跨境电商平台运营逻辑，具备商务函电写作与跨文化沟通意识。" },
  { title: "学习态度", desc: "保持对新鲜事物的好奇心和学习热情，主动关注行业趋势，愿意从基层岗位开始积累经验。" },
  { title: "职业规划", desc: "期望在外贸/跨境电商行业深耕发展，逐步成长为具备国际视野和专业能力的商务人才。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">About</p>
              <h1 className="text-[36px] md:text-[48px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                个人简介<span className="text-blue-500"> · </span>教育背景
              </h1>
              <p className="text-[16px] text-slate-500">商业英语专业应届毕业生，CET-6 550+，期待在外贸/跨境电商领域开启职业生涯。</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats + Photo */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll anim="fade-in-right">
              <div>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { n: "CET-6", u: "550+", l: "英语六级" },
                    { n: "CET-4", u: "通过", l: "英语四级" },
                    { n: "2026", u: "", l: "应届毕业" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="text-[28px] font-bold text-slate-900">
                        {s.n}<span className="text-base font-normal text-slate-400 ml-1">{s.u}</span>
                      </div>
                      <div className="text-[13px] text-slate-400 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 text-[16px] text-slate-600 leading-relaxed">
                  <p>阮琪斌，商业英语专业应届毕业生，在校期间系统学习了英语听说读写译及国际贸易实务相关课程。</p>
                  <p>英语综合能力强，CET-6 成绩 550+，具备流利的英语口语表达能力和书面翻译能力，能够胜任外贸函电、商务谈判等场景下的英文沟通。</p>
                  <p>性格积极主动，学习能力强，期待加入外贸或跨境电商企业，从基层岗位开始，在实际工作中不断成长。</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll anim="fade-in-left" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="/img/Head.jpg" alt="阮琪斌" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-3xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-3xl -z-10" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 求职意向 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Job Target</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-10">求职意向</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "目标岗位", detail: "外贸业务员 / 跨境电商运营 / 商务英语翻译 / 国际商务助理" },
              { label: "目标行业", detail: "外贸进出口 / 跨境电商 / 国际物流 / 商务服务" },
              { label: "期望城市", detail: "深圳、广州等大湾区城市（可接受其他城市机会）" },
              { label: "工作性质", detail: "全职，接受从基础岗位做起，愿意与公司共同成长" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <div className="text-[13px] font-bold text-blue-500 mb-2">{item.label}</div>
                  <div className="text-[14px] text-slate-500 leading-relaxed">{item.detail}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Timeline</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">大学经历</h2>
          </AnimateOnScroll>
          <div className="space-y-0">
            {education.map((item, i) => (
              <AnimateOnScroll key={i} anim="fade-in-right" delay={i * 0.08}>
                <div className="flex gap-6 md:gap-10 py-5 border-b border-slate-100 last:border-0 group">
                  <div className="w-16 md:w-20 flex-shrink-0">
                    <span className="text-[15px] font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Philosophy</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight mb-12">自我评价</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-50 hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{v.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed">{v.desc}</p>
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
