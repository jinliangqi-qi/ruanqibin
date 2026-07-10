"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  const [form, setForm] = useState({ company:"", name:"", position:"", phone:"", message:"" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const h = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({...form,[e.target.name]:e.target.value});

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-28 md:pt-40 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="text-[12px] font-medium text-[#5b8c5a] uppercase tracking-[0.2em]">Contact</span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#2c3e50] tracking-tight mt-2">联系我</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* 左侧：联系信息 + 引导语 */}
            <div className="lg:w-2/5">
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-5 mb-10">
                  {[
                    ["📱 微信","XQB-Midsummer"],
                    ["📧 邮箱","ruanqibin@example.com"],
                    ["📍 所在地","广东深圳"],
                  ].map(([k,v])=>(
                    <div key={k}>
                      <span className="text-[11px] text-[#8b95a1] uppercase tracking-wider">{k}</span>
                      <p className="text-[14px] font-medium text-[#2c3e50] mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#e8f4e8] rounded-2xl p-6">
                  <p className="text-[15px] text-[#2c3e50] leading-relaxed">
                    有合适的机会就联系我吧~<br />
                    随时欢迎沟通 👋
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* 右侧：表单 */}
            <div className="lg:w-3/5">
              <AnimateOnScroll delay={0.15}>
                {sent ? (
                  <div className="text-center py-16 bg-[#e8f4e8] rounded-2xl">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-[20px] font-semibold text-[#2c3e50] mb-2">收到啦</h3>
                    <p className="text-[14px] text-[#8b95a1] mb-6">我会尽快回复，谢谢！</p>
                    <button onClick={()=>setSent(false)} className="text-[14px] font-medium text-[#5b8c5a] hover:text-[#4a7a49]">继续填写</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-medium text-[#2c3e50] mb-2">公司名称 <span className="text-[#5b8c5a]">*</span></label>
                        <input type="text" name="company" value={form.company} onChange={h} required placeholder="贵公司名称"
                          className="w-full px-4 py-3 bg-white border border-[#edf0f3] rounded-xl text-[14px] placeholder:text-[#c0c7cf] focus:outline-none focus:border-[#5b8c5a] focus:ring-2 focus:ring-[#e8f4e8] transition-all" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-[#2c3e50] mb-2">联系人 <span className="text-[#5b8c5a]">*</span></label>
                        <input type="text" name="name" value={form.name} onChange={h} required placeholder="您的姓名"
                          className="w-full px-4 py-3 bg-white border border-[#edf0f3] rounded-xl text-[14px] placeholder:text-[#c0c7cf] focus:outline-none focus:border-[#5b8c5a] focus:ring-2 focus:ring-[#e8f4e8] transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#2c3e50] mb-2">招聘岗位 <span className="text-[#5b8c5a]">*</span></label>
                      <select name="position" value={form.position} onChange={h} required
                        className="w-full px-4 py-3 bg-white border border-[#edf0f3] rounded-xl text-[14px] focus:outline-none focus:border-[#5b8c5a] focus:ring-2 focus:ring-[#e8f4e8] transition-all appearance-none">
                        <option value="">请选择</option>
                        {["外贸业务员","跨境电商运营","商务英语翻译","国际商务助理","海外市场专员","英语客服/跟单","其他"].map(p=>(<option key={p} value={p}>{p}</option>))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#2c3e50] mb-2">联系电话 <span className="text-[#5b8c5a]">*</span></label>
                      <input type="tel" name="phone" value={form.phone} onChange={h} required placeholder="您的手机号码"
                        className="w-full px-4 py-3 bg-white border border-[#edf0f3] rounded-xl text-[14px] placeholder:text-[#c0c7cf] focus:outline-none focus:border-[#5b8c5a] focus:ring-2 focus:ring-[#e8f4e8] transition-all" />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#2c3e50] mb-2">备注</label>
                      <textarea name="message" value={form.message} onChange={h} rows={4} placeholder="岗位要求、薪资待遇、工作地点..."
                        className="w-full px-4 py-3 bg-white border border-[#edf0f3] rounded-xl text-[14px] placeholder:text-[#c0c7cf] focus:outline-none focus:border-[#5b8c5a] focus:ring-2 focus:ring-[#e8f4e8] transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={sending}
                      className="w-full py-4 bg-[#5b8c5a] text-white text-[15px] font-semibold rounded-full hover:bg-[#4a7a49] transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50">
                      {sending?"发送中...":"发送信息 ✉️"}
                    </button>
                  </form>
                )}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
