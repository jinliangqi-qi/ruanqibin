export function Footer() {
  return (
    <footer className="border-t border-[#e8e0d8]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-[13px] text-[#8c8580]">
          <a href="/about" className="hover:text-[#2d2a26] transition-colors">关于</a>
          <a href="/courses" className="hover:text-[#2d2a26] transition-colors">技能</a>
          <a href="/cases" className="hover:text-[#2d2a26] transition-colors">经历</a>
          <a href="/contact" className="hover:text-[#2d2a26] transition-colors">联系</a>
        </div>
        <span className="text-[12px] text-[#c4bdb6]">
          &copy; {new Date().getFullYear()} 阮琪斌 · 商业英语应届生
        </span>
      </div>
    </footer>
  );
}
