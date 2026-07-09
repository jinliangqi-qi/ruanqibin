"use client";

export function Footer() {
  const links = [
    { label: "首页", href: "/" },
    { label: "关于我", href: "/about" },
    { label: "专业技能", href: "/courses" },
    { label: "项目经历", href: "/cases" },
    { label: "联系我", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-[10px] bg-slate-900 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">阮</span>
              </div>
              <span className="font-bold text-[15px] text-slate-800">
                阮琪斌
              </span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs">
              商业英语专业应届毕业生，期待在外贸/跨境电商/国际商务领域开启职业生涯。
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-slate-500 hover:text-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between gap-2 text-[12px] text-slate-400">
          <span>正在寻找工作机会</span>
          <span>微信：Cherry-Rora</span>
        </div>

        <div className="mt-4 text-[11px] text-slate-300">
          &copy; {new Date().getFullYear()} 阮琪斌
        </div>
      </div>
    </footer>
  );
}
