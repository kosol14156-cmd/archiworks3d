import React from "react";

export default function Home({ currentLang, switchTab }) {
  return (
    <div className="space-y-16">
      <section className="border border-gray-800/80 rounded-3xl bg-gradient-to-b from-[#141720] to-[#0e1015] p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium">
              <span>●</span> ARCHITECTURAL DESIGN & 3D VISUALIZATION
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              <span>
                {currentLang === "km"
                  ? "ប្លង់ស្ថាបត្យកម្មទំនើប & ទស្សនីយភាព 3D"
                  : "Architectural Plans & 3D Visualization"}
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              {currentLang === "km"
                ? "ស្វែងរកកញ្ចប់ប្លង់ផ្ទះ Modern Minimalist ដែលមានឯកសារសំណង់ពេញលេញ (CAD + 3D + PDF) ឬពិគ្រោះយោបល់លើការរចនាផ្ទាល់ខ្លួន។"
                : "Browse ready-to-build minimalist architectural packages with full construction files (CAD + 3D + PDF), or book bespoke design consultations."}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => switchTab("projects")}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                {currentLang === "km"
                  ? "ចូលមើលគម្រោងទាំងអស់ →"
                  : "Explore Projects Store →"}
              </button>
              <button
                onClick={() => switchTab("services")}
                className="px-6 py-3 rounded-xl bg-[#1a202c] hover:bg-gray-800 text-white font-medium text-sm border border-gray-700 transition"
              >
                {currentLang === "km" ? "សេវាកម្មជំនាញ" : "Our Services"}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black/60 shadow-2xl group aspect-[4/3]">
              <video
  src={`${import.meta.env.BASE_URL}hero-tour.mp4`}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
  onEnded={(e) => {
    e.target.currentTime = 0;
    e.target.play();
  }}
></video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-700/60">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span className="text-xs font-semibold text-white tracking-wider uppercase">
                    3D Walkthrough
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 bg-black/70 px-2 py-1 rounded border border-gray-800">
                  4K Ultra HD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#141822] border border-gray-800 text-center">
          <div className="text-amber-400 text-2xl font-bold mb-1">100%</div>
          <h4 className="text-white font-semibold text-sm mb-1">
            {currentLang === "km" ? "ឯកសារស្តង់ដារសំណង់" : "Construction Ready"}
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            {currentLang === "km"
              ? "រួមមានប្លង់ CAD DWG, PDF និងម៉ូដែល 3D SketchUp"
              : "Includes AutoCAD DWG, PDF blueprints and 3D SketchUp files"}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#141822] border border-gray-800 text-center">
          <div className="text-amber-400 text-2xl font-bold mb-1">
            Minimalist
          </div>
          <h4 className="text-white font-semibold text-sm mb-1">
            {currentLang === "km" ? "រចនាបថទាន់សម័យ" : "Modern Aesthetics"}
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            {currentLang === "km"
              ? "ប្រណិតភាព ស្រស់ស្អាត និងសន្សំសំចៃទំហំដី"
              : "Contemporary luxury, spacious flows, and clean geometric lines"}
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#141822] border border-gray-800 text-center">
          <div className="text-amber-400 text-2xl font-bold mb-1">Support</div>
          <h4 className="text-white font-semibold text-sm mb-1">
            {currentLang === "km"
              ? "ពិគ្រោះយោបល់ផ្ទាល់"
              : "Direct Consultation"}
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            {currentLang === "km"
              ? "ប្រឹក្សាជាមួយស្ថាបត្យករជំនាញគ្រប់ពេលវេលា"
              : "Direct contact via Telegram for custom project needs"}
          </p>
        </div>
      </section>
    </div>
  );
}
