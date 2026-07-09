"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const contacts = [
  { icon: Phone, label: "联系电话", value: "请通过微信联系", href: "#" },
  { icon: MessageCircle, label: "微信号", value: "Cherry-Rora", href: "#" },
  { icon: Mail, label: "邮箱", value: "ruanqibin@example.com", href: "mailto:ruanqibin@example.com" },
  { icon: MapPin, label: "所在地", value: "广东深圳", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ companyName: "", contactName: "", position: "", phone: "", wechat: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("提交失败");
      setSubmitted(true);
      setForm({ companyName: "", contactName: "", position: "", phone: "", wechat: "", message: "" });
    } catch {
      alert("提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[13px] font-semibold text-blue-500 tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-[32px] md:text-[44px] font-bold text-slate-900 tracking-tight mb-4">
            联系<span className="text-blue-500">阮琪斌</span>
          </h1>
          <p className="text-[15px] text-slate-500 max-w-md mx-auto">
            如果您有合适的岗位机会，欢迎填写表单联系我。<br />期待与您的沟通。
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Contact info */}
            <AnimateOnScroll anim="fade-in-right" className="lg:col-span-2 space-y-5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <c.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[12px] text-slate-400">{c.label}</div>
                    <div className="text-[15px] font-semibold text-slate-700">{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="text-[14px] font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  随时欢迎联系
                </h3>
                <div className="space-y-1.5">
                  {["工作日全天在线", "周末也可联系"].map((t) => (
                    <div key={t} className="text-[13px] text-slate-500">{t}</div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 text-center">
                <p className="text-[13px] text-slate-400 mb-3">扫码添加微信</p>
                <div className="w-36 h-36 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <img src="/img/Head.jpg" alt="微信二维码" className="w-32 h-32 rounded-xl object-cover" />
                </div>
                <p className="text-[13px] text-blue-500 font-semibold mt-3">Cherry-Rora</p>
              </div>
              </AnimateOnScroll>

            {/* Right - Form */}
            <AnimateOnScroll anim="fade-in-left" delay={0.15} className="lg:col-span-3">
              {/* Trust badge */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-slate-800">商业英语专业应届生</div>
                  <div className="text-[12px] text-slate-500">CET-6 550+，期待在外贸/跨境电商领域发展</div>
                </div>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-[20px] font-bold text-slate-800 mb-2">提交成功</h3>
                  <p className="text-[14px] text-slate-500">感谢您的联系，<br />我会尽快回复您。</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-slate-900 text-white text-[14px] font-semibold rounded-2xl hover:bg-slate-800 transition-colors"
                  >
                    继续填写
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        公司名称 <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="companyName" value={form.companyName} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="贵公司名称" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        联系人 <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="contactName" value={form.contactName} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="您的姓名" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                      招聘岗位 <span className="text-red-400">*</span>
                    </label>
                    <select name="position" value={form.position} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all">
                      <option value="">请选择岗位类型</option>
                      {["外贸业务员", "跨境电商运营", "商务英语翻译", "国际商务助理", "海外市场专员", "英语客服/跟单", "其他岗位"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                        联系电话 <span className="text-red-400">*</span>
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="您的手机号码" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">微信号</label>
                      <input type="text" name="wechat" value={form.wechat} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="方便联系" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-slate-600 mb-1.5">岗位说明 / 备注</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder="可以说说岗位要求、薪资待遇、工作地点等..." />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {submitting ? (
                      <>提交中...</>
                    ) : (
                      <>
                        发送联系信息
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[12px] text-slate-400">您的信息将被严格保密，感谢您的关注</p>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
