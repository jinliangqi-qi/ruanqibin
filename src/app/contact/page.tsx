"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
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
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll delay={0.1}>
            <div className="text-center mb-12">
              <p className="text-[18px] text-[#2c3e50] leading-relaxed">
                正在寻找外贸 / 跨境电商方向的工作机会
              </p>
              <p className="text-[15px] text-[#8b95a1] mt-2">
                如果你有合适的岗位，欢迎联系我 👋
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                label: "微信",
                value: "XQB-Midsummer",
                hint: "扫码或搜索添加",
              },
              {
                icon: "📧",
                label: "邮箱",
                value: "ruanqibin@example.com",
                hint: "欢迎邮件联系",
              },
              {
                icon: "📍",
                label: "所在地",
                value: "广东深圳",
                hint: "随时约面聊",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 0.1}>
                <div className="bg-[#f8f9fa] rounded-2xl p-8 text-center border border-[#edf0f3] hover:border-[#5b8c5a] hover:shadow-md transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-[13px] font-medium text-[#8b95a1] uppercase tracking-wider mb-2">{item.label}</h3>
                  <p className="text-[17px] font-semibold text-[#2c3e50] mb-1 break-all">{item.value}</p>
                  <p className="text-[12px] text-[#c0c7cf]">{item.hint}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.4}>
            <div className="mt-12 bg-[#e8f4e8] rounded-2xl p-8 text-center">
              <p className="text-[16px] text-[#2c3e50] leading-relaxed">
                商业英语专业应届毕业生，CET-6 550+
              </p>
              <p className="text-[14px] text-[#5b8c5a] mt-2">
                期待与你的沟通 ✨
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
