"use client";

import { useState } from "react";
import { ArrowRight, Star, Briefcase, Globe, MessageCircle, Phone, GraduationCap, FileText, Languages } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  const [showFloat, setShowFloat] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ====== Hero ====== */}
      <section className="relative pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl animate-pulse-soft" style={{ animation: "float-slow 8s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-3xl" style={{ animation: "float-slow 10s ease-in-out 1s infinite" }} />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimateOnScroll anim="fade-in-right">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[13px] font-medium text-blue-600 mb-6">
                  <GraduationCap className="w-4 h-4" />
                  商业英语专业 · 应届毕业生
                </div>

                <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                  你好，我是
                  <span className="text-blue-500">阮琪斌</span>
                  <br />
                  商业英语专业
                  <br />
                  <span className="text-indigo-500">应届毕业生</span>
                </h1>

                <p className="text-[16px] md:text-[18px] text-slate-500 leading-relaxed mb-8">
                  英语六级 550+，具备商务英语沟通与翻译能力，期待在外贸/跨境电商领域开启职业生涯。
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    联系我
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/about"
                    className="w-full sm:w-auto px-8 py-4 text-slate-600 text-[15px] font-medium rounded-2xl hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
                  >
                    了解更多
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </a>
                </div>

                <p className="mt-4 text-[13px] text-slate-400">期待与您沟通 · 欢迎联系</p>
              </div>
            </AnimateOnScroll>

            {/* Photo */}
            <AnimateOnScroll anim="fade-in-left" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative w-[240px] md:w-[300px]" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-200 via-indigo-100 to-blue-200 rounded-[40px] rotate-3 opacity-60" />
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 via-white to-indigo-100 rounded-[36px] -rotate-2 opacity-80" />
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src="/img/Head.jpg" alt="阮琪斌" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-[14px] font-bold text-slate-800">商业英语专业</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ====== 求职方向快速入口 ====== */}
      <AnimateOnScroll anim="fade-up">
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="text-center text-[14px] text-slate-400 mb-6">我期待的求职方向</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "外贸业务员", href: "/about" },
              { label: "跨境电商运营", href: "/about" },
              { label: "商务英语翻译", href: "/courses" },
              { label: "国际商务助理", href: "/about" },
              { label: "海外市场专员", href: "/courses" },
              { label: "英语客服/跟单", href: "/about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[15px] text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* ====== 3 个核心优势 ====== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Why Me</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              我的<span className="text-blue-500">核心优势</span>
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200" />
            {[
              { step: "01", title: "扎实的英语功底", desc: "CET-6 550+，流利的英语听说读写能力，可进行英文商务沟通与翻译。", icon: Languages },
              { step: "02", title: "商务实践背景", desc: "在校期间参与多项商务模拟实训，了解外贸流程与跨境电商平台操作。", icon: Briefcase },
              { step: "03", title: "快速学习能力", desc: "能够快速适应新环境，主动学习业务知识，具备良好的沟通与团队协作能力。", icon: GraduationCap },
            ].map((s, i) => (
              <AnimateOnScroll key={s.step} anim="scale-in" delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-[12px] font-bold text-blue-400 tracking-widest mb-3">优势 {s.step}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 专业技能概览 ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-3">Skills</p>
              <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
                专业技能<span className="text-blue-500">概览</span>
              </h2>
            </div>
            <a href="/courses" className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-semibold text-blue-500 hover:text-blue-400 transition-colors">
              查看全部技能
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { skill: "英语听说读写", level: "CET-6 550+", desc: "流利英语沟通，商务口语与书面翻译能力强", tag: "核心能力" },
              { skill: "商务英语实务", level: "熟练", desc: "掌握外贸函电、商务谈判、跨文化沟通等实务技能", tag: "专业方向" },
              { skill: "办公软件应用", level: "熟练", desc: "Word / Excel / PowerPoint 等办公软件高效使用", tag: "基础能力" },
            ].map((c, i) => (
              <AnimateOnScroll key={i} anim="fade-up" delay={i * 0.15}>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-50">
                <div className="text-[11px] font-bold text-blue-400 tracking-widest mb-3">技能 {i + 1}</div>
                <h3 className="text-[15px] font-bold text-slate-800 mb-2">{c.skill}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-green-600">{c.level}</span>
                  <span className="text-[11px] text-slate-400 bg-white px-2 py-1 rounded-full shadow-sm">{c.tag}</span>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 个人特质 ====== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Traits</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              我的<span className="text-blue-500">个人特质</span>
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, color: "blue", title: "国际视野", desc: "英语专业培养的国际化视角，能够适应跨文化工作环境，理解不同市场的商业逻辑。" },
              { icon: FileText, color: "amber", title: "细心负责", desc: "对待工作严谨细致，注重细节处理，确保每一项任务准确完成并及时反馈。" },
              { icon: Briefcase, color: "indigo", title: "积极主动", desc: "遇到问题不等待，主动寻找解决方案。善于向前辈请教，快速融入团队。" },
              { icon: GraduationCap, color: "green", title: "持续成长", desc: "保持学习的热情，关注行业动态，不断提升专业技能和综合素质。" },
            ].map((f, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-50">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${f.color === "blue" ? "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500" : f.color === "amber" ? "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-500" : f.color === "indigo" ? "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-500" : "bg-gradient-to-br from-green-50 to-green-100 text-green-500"} group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{f.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 项目经历预览 ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AnimateOnScroll anim="fade-up">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Projects</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight">
              项目与<span className="text-blue-500">实践经历</span>
            </h2>
          </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "商务英语模拟实训", desc: "参与外贸业务流程模拟，撰写英文商务函件并进行模拟商务谈判。", tag: "课程项目" },
              { title: "跨境电商平台调研", desc: "对主流跨境电商平台进行对比分析，完成英文调研报告展示。", tag: "调研项目" },
              { title: "英语演讲与展示", desc: "多次参与英语演讲比赛及课堂展示，锻炼商务场景下的英文表达能力。", tag: "演讲经验" },
            ].map((s, i) => (
              <AnimateOnScroll key={i} anim="scale-in" delay={i * 0.15}>
              <div className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 bg-white shadow-sm hover:shadow-xl border border-slate-100">
                <div className="text-[11px] font-bold text-blue-400 tracking-widest mb-3">{s.tag}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-[14px] leading-relaxed mb-6 text-slate-500">{s.desc}</p>
                <a href="/cases" className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-500 hover:text-blue-400 transition-colors">查看详情 <ArrowRight className="w-4 h-4" /></a>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/5" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" style={{ animation: "float-slow 12s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl" style={{ animation: "float-slow 14s ease-in-out 2s infinite" }} />

        <AnimateOnScroll anim="scale-in">
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight mb-6">
            正在寻找
            <br />
            <span className="text-blue-400">外贸/跨境电商</span>相关工作
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-10">
            如果您有合适的岗位机会，欢迎与我联系。
            <br />
            期待与您进一步沟通。
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 text-[16px] font-bold rounded-2xl hover:bg-slate-100 transition-all hover:-translate-y-0.5 shadow-2xl">
            联系我
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-[13px] text-slate-500">随时欢迎沟通 · 期待与您合作</p>
        </div>
        </AnimateOnScroll>
      </section>

      <Footer />

      {/* ====== 悬浮咨询按钮 ====== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showFloat && (
          <div className="flex flex-col gap-2 mb-2" style={{ animation: "fade-up 0.3s ease-out" }}>
            <a
              href="tel:13800138000"
              className="flex items-center gap-3 bg-white shadow-xl rounded-2xl px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              电话联系
            </a>
            <button
              onClick={() => { navigator.clipboard.writeText("Cherry-Rora"); alert("微信号已复制：Cherry-Rora"); }}
              className="flex items-center gap-3 bg-white shadow-xl rounded-2xl px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              复制微信号
            </button>
          </div>
        )}
        <button
          onClick={() => setShowFloat(!showFloat)}
          className={`w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 ${
            showFloat ? "bg-slate-800 text-white rotate-45" : "bg-gradient-to-br from-slate-800 to-slate-900 text-white hover:from-slate-700 hover:to-slate-800"
          }`}
          style={{ animation: showFloat ? "none" : "pulse-soft 2s ease-in-out infinite" }}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
