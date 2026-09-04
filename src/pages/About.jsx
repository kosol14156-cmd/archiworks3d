import React from "react";

export default function About({ currentLang }) {
  return (
    <div className="space-y-10">
      <div className="bg-[#141822] border border-gray-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
          About ArchiWorks 3D
        </span>
        <h2 className="text-3xl font-bold text-white mt-1 mb-6">
          {currentLang === "km"
            ? "អំពីស្ទូឌីយោ ArchiWorks 3D"
            : "About ArchiWorks 3D"}
        </h2>
        <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            {currentLang === "km"
              ? "ArchiWorks 3D គឺជាស្ទូឌីយោឯករាជ្យជំនាញផ្នែករចនាប្លង់ស្ថាបត្យកម្ម និង 3D Architectural Visualization ដែលផ្តោតលើភាពជាក់ស្តែង និងសោភ័ណភាព Modern Minimalist Luxury।"
              : "ArchiWorks 3D is an architectural design and 3D visualization studio specializing in practical and modern minimalist luxury concepts."}
          </p>
          <p>
            {currentLang === "km"
              ? "រាល់គម្រោងទាំងអស់នៅលើវេបសាយ ត្រូវបានគិតគូរយ៉ាងហ្មត់ចត់លើលំហពន្លឺ ខ្យល់ចេញចូល និងរចនាសម្ព័ន្ធសំណង់ដែលអាចយកទៅអនុវត្តការដ្ឋានជាក់ស្តែងបាន ១០០%।"
              : "Every project in our catalog is engineered with precise airflow, natural lighting, and buildable structural parameters."}
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap gap-4">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span>
              {currentLang === "km"
                ? "ទាក់ទងពិគ្រោះយោបល់តាម Telegram"
                : "Chat on Telegram"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
