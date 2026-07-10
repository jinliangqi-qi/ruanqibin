export function Footer() {
  return (
    <footer className="border-t border-[#edf0f3] bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-[13px] text-[#8b95a1]">
          <a href="/about" className="hover:text-[#2c3e50] transition-colors">关于</a>
          <a href="/courses" className="hover:text-[#2c3e50] transition-colors">技能</a>
          <a href="/cases" className="hover:text-[#2c3e50] transition-colors">在校经历</a>
          <a href="/contact" className="hover:text-[#2c3e50] transition-colors">联系</a>
        </div>
        <span className="text-[12px] text-[#c0c7cf]">
          &copy; {new Date().getFullYear()} 阮琪斌 · 应届毕业生
        </span>
      </div>
    </footer>
  );
}
