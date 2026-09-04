import React from "react";

export default function Services({ currentLang }) {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
          Professional Capabilities
        </span>
        <h2 className="text-3xl font-bold text-white">
          {currentLang === "km"
            ? "សេវាកម្មជំនាញស្ថាបត្យកម្ម"
            : "Our Architectural Services"}
        </h2>
        <p className="text-gray-400 text-sm">
          {currentLang === "km"
            ? "ផ្តល់ជូនការគូសប្លង់ ម៉ូដែល 3D និងរូបភាព Render ស្តង់ដារវិជ្ជាជីវៈ"
            : "Providing comprehensive 2D CAD, 3D modeling, and realistic animations."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#141822] border border-gray-800 hover:border-amber-500/40 transition flex flex-col justify-between space-y-6">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {currentLang === "km"
                ? "គូសប្លង់ស្ថាបត្យកម្ម 2D"
                : "2D Architectural Blueprint"}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {currentLang === "km"
                ? "រៀបចំប្លង់បាត (Floor Plans), ប្លង់ពុះកាត់ (Sections), និងប្លង់សាងសង់ជាក់ស្តែងកម្រិតលម្អិតខ្ពស់ (AutoCAD DWG & PDF)។"
                : "Complete architectural blueprints, floor plans, sections, and structural-ready CAD packages."}
            </p>
          </div>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-center py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-amber-400 font-semibold text-xs border border-gray-700 transition"
          >
            {currentLang === "km" ? "សាកសួរសេវាកម្មនេះ →" : "Inquire Now →"}
          </a>
        </div>

        <div className="p-8 rounded-3xl bg-[#141822] border border-gray-800 hover:border-amber-500/40 transition flex flex-col justify-between space-y-6">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {currentLang === "km"
                ? "ម៉ូដែល 3D Modeling"
                : "3D Architectural Modeling"}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {currentLang === "km"
                ? "បង្កើតម៉ូដែល 3D សំណង់ស្របតាមមាត្រដ្ឋានពិត សម្រាប់ Modern Minimalist Villas និងអគារពាណិជ្ជកម្ម (SketchUp / 3ds Max)។"
                : "Accurate scale 3D geometry and structural models for villas and commercial properties."}
            </p>
          </div>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-center py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-amber-400 font-semibold text-xs border border-gray-700 transition"
          >
            {currentLang === "km" ? "សាកសួរសេវាកម្មនេះ →" : "Inquire Now →"}
          </a>
        </div>

        <div className="p-8 rounded-3xl bg-[#141822] border border-gray-800 hover:border-amber-500/40 transition flex flex-col justify-between space-y-6">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {currentLang === "km"
                ? "3D Render & Animation"
                : "3D Render & Animation"}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {currentLang === "km"
                ? "ផលិតរូបភាព Render Photorealistic និងវីដេអូដើរទស្សនាក្នុងផ្ទះ (Cinematic Walkthrough) កម្រិតខ្ពស់បំផុត។"
                : "High-end photorealistic architectural renders and cinematic walkthrough animations."}
            </p>
          </div>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-center py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-amber-400 font-semibold text-xs border border-gray-700 transition"
          >
            {currentLang === "km" ? "សាកសួរសេវាកម្មនេះ →" : "Inquire Now →"}
          </a>
        </div>
      </div>
    </div>
  );
}
