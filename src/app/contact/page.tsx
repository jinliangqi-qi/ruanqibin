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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    try {
      const r = await fetch("/api/inquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
      if(!r.ok) throw new Error("fail");
      setSent(true);
    } catch { alert("提交失败，请稍后重试"); }
    finally { setSending(false); }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f5]">
      <Navbar />

      {/* ── 头部 ── */}
      <section className="pt-32 md:pt-44 pb-8">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll>
            <span className="text-[11px] font-medium text-[#c2674a] uppercase tracking-[0.25em]">Contact</span>
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#2d2a26] tracking-tight mt-2">联系我</h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 联系方式横向条 ── */}
      <section className="pb-8">
        <div className="px-6 md:px-10 lg:px-16">
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {[
                ["微信","Cherry-Rora"],
                ["邮箱","ruanqibin@example.com"],
                ["所在地","广东深圳"],
              ].map(([k,v]) => (
                <div key={k}>
                  <span className="text-[10px] text-[#c4bdb6] uppercase tracking-[0.2em]">{k}</span>
                  <p className="text-[14px] font-medium text-[#2d2a26] mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 表单：大留白居中，不对称左右 ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* 左：引导语 */}
            <div className="lg:w-1/3">
              <AnimateOnScroll delay={0.15}>
                <p className="text-[28px] md:text-[34px] font-bold text-[#2d2a26] leading-tight tracking-tight">
                  有合适的机会？<br />告诉我。
                </p>
                <p className="mt-6 text-[14px] text-[#8c8580] leading-relaxed">
                  商业英语专业应届毕业生，CET-6 550+，期待在外贸/跨境电商领域发展。
                </p>
              </AnimateOnScroll>
            </div>

            {/* 右：表单 */}
            <div className="lg:w-2/3">
              <AnimateOnScroll delay={0.2}>
                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-[#c2674a] flex items-center justify-center mx-auto mb-6">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#2d2a26] mb-2">已收到</h3>
                    <p className="text-[14px] text-[#8c8580] mb-6">感谢联系，我会尽快回复。</p>
                    <button onClick={()=>setSent(false)} className="text-[14px] font-medium text-[#c2674a] hover:text-[#b5583e]">继续填写</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-medium text-[#2d2a26] mb-2">公司名称 <span className="text-[#c2674a]">*</span></label>
                        <input type="text" name="company" value={form.company} onChange={h} required placeholder="贵公司名称"
                          className="w-full px-4 py-3.5 bg-[#fcf9f5] border-0 rounded-xl text-[14px] placeholder:text-[#c4bdb6] focus:outline-none focus:ring-2 focus:ring-[#c2674a]/20 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium text-[#2d2a26] mb-2">联系人 <span className="text-[#c2674a]">*</span></label>
                        <input type="text" name="name" value={form.name} onChange={h} required placeholder="您的姓名"
                          className="w-full px-4 py-3.5 bg-[#fcf9f5] border-0 rounded-xl text-[14px] placeholder:text-[#c4bdb6] focus:outline-none focus:ring-2 focus:ring-[#c2674a]/20 transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#2d2a26] mb-2">招聘岗位 <span className="text-[#c2674a]">*</span></label>
                      <select name="position" value={form.position} onChange={h} required
                        className="w-full px-4 py-3.5 bg-[#fcf9f5] border-0 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[#c2674a]/20 transition-all appearance-none">
                        <option value="">请选择</option>
                        {["外贸业务员","跨境电商运营","商务英语翻译","国际商务助理","海外市场专员","英语客服/跟单","其他"].map(p=>(<option key={p} value={p}>{p}</option>))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#2d2a26] mb-2">联系电话 <span className="text-[#c2674a]">*</span></label>
                      <input type="tel" name="phone" value={form.phone} onChange={h} required placeholder="您的手机号码"
                        className="w-full px-4 py-3.5 bg-[#fcf9f5] border-0 rounded-xl text-[14px] placeholder:text-[#c4bdb6] focus:outline-none focus:ring-2 focus:ring-[#c2674a]/20 transition-all" />
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-[#2d2a26] mb-2">备注</label>
                      <textarea name="message" value={form.message} onChange={h} rows={4} placeholder="岗位要求、薪资待遇、工作地点..."
                        className="w-full px-4 py-3.5 bg-[#fcf9f5] border-0 rounded-xl text-[14px] placeholder:text-[#c4bdb6] focus:outline-none focus:ring-2 focus:ring-[#c2674a]/20 transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={sending}
                      className="w-full py-4 bg-[#c2674a] text-white text-[15px] font-semibold rounded-full hover:bg-[#b5583e] transition-colors disabled:opacity-50">
                      {sending?"发送中...":"发送信息"}
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
