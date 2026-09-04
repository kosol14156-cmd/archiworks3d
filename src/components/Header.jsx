import React from "react";

export default function Header({
  currentTab,
  switchTab,
  currentLang,
  toggleLanguage,
  currentUser,
  handleSecretClick,
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e1015]/95 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (ចុច ៣ដងជាប់គ្នាដើម្បីបើកកន្លែង Login Admin) */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/1200x/04/c7/d2/04c7d206bc9de1de84a2452f645a8472.jpg"
            alt="Logo"
            onClick={handleSecretClick}
            title="ArchiWorks 3D"
            className="w-11 h-11 rounded-full object-cover border border-amber-500/40 cursor-pointer select-none transition hover:scale-105"
            onError={(e) => (e.target.style.display = "none")}
          />
          <button
            onClick={() => switchTab("home")}
            className="text-xl font-bold tracking-wider text-white select-none text-left"
          >
            ArchiWorks<span className="text-amber-500">&nbsp;3D</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <button
            onClick={() => switchTab("home")}
            className={`py-2 transition tracking-wide hover:text-amber-400 ${currentTab === "home" ? "text-amber-500 border-b-2 border-amber-500" : ""}`}
          >
            {currentLang === "km" ? "ទំព័រដើម" : "Home"}
          </button>
          <button
            onClick={() => switchTab("projects")}
            className={`py-2 transition tracking-wide hover:text-amber-400 ${currentTab === "projects" ? "text-amber-500 border-b-2 border-amber-500" : ""}`}
          >
            {currentLang === "km" ? "គម្រោងប្លង់" : "Projects"}
          </button>
          <button
            onClick={() => switchTab("services")}
            className={`py-2 transition tracking-wide hover:text-amber-400 ${currentTab === "services" ? "text-amber-500 border-b-2 border-amber-500" : ""}`}
          >
            {currentLang === "km" ? "សេវាកម្ម" : "Services"}
          </button>
          <button
            onClick={() => switchTab("about")}
            className={`py-2 transition tracking-wide hover:text-amber-400 ${currentTab === "about" ? "text-amber-500 border-b-2 border-amber-500" : ""}`}
          >
            {currentLang === "km" ? "អំពីយើង" : "About"}
          </button>
        </nav>

        {/* Right Actions (មានត្រឹម Telegram Contact និង ប្តូរភាសា - ប៊ូតុង Admin Login ត្រូវបានលុបចោល) */}
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-semibold text-amber-400 transition"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>{currentLang === "km" ? "ទាក់ទង" : "Contact"}</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800/80 hover:bg-gray-700 text-xs font-semibold text-amber-400 transition"
          >
            <span>{currentLang === "km" ? "🇰🇭 KH" : "🇬🇧 EN"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
