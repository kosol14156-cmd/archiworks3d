import React, { useState } from "react";

export default function Projects({
  currentLang,
  isAdmin,
  currentUser,
  lockAdmin,
  handleProjectSubmit,
  pTitle,
  setPTitle,
  pPrice,
  setPPrice,
  pCategory,
  setPCategory,
  pTelegram,
  setPTelegram,
  previewImage,
  fileNameDisplay,
  pDesc,
  setPDesc,
  pCode,
  setPCode,
  pLand,
  setPLand,
  pBuiltArea,
  setPBuiltArea,
  pBeds,
  setPBeds,
  pBaths,
  setPBaths,
  pParking,
  setPParking,
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  filteredProjects,
  deleteProject,
  handleEditProject,
}) {
  // State សម្រាប់គ្រប់គ្រងការបង្ហាញផ្ទាំងទូទាត់ប្រាក់ (Payment Modal)
  const [selectedProjectForPayment, setSelectedProjectForPayment] =
    useState(null);

  return (
    <div className="space-y-8">
      {/* Upload / Edit Section (Admin Only) */}
      {(isAdmin || currentUser) && (
        <section className="bg-[#151922] border border-amber-500/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 mb-8">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
          <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>{" "}
                Admin Panel Activated
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                {currentLang === "km"
                  ? "បញ្ចូល ឬកែសម្រួល Project"
                  : "Add or Edit Project"}
              </h2>
            </div>
            <button
              onClick={lockAdmin}
              className="px-3 py-1.5 rounded-lg bg-red-900/30 hover:bg-red-800/50 text-red-300 border border-red-800/60 text-xs font-medium transition"
            >
              ចាក់សោរវិញ (Lock)
            </button>
          </div>

          <form
            onSubmit={handleProjectSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                ឈ្មោះគម្រោង (Project Name) *
              </label>
              <input
                type="text"
                value={pTitle}
                onChange={(e) => setPTitle(e.target.value)}
                required
                placeholder="ឧ. Modern Minimalist Villa"
                className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                តម្លៃ ($) ឬ 'Free' *
              </label>
              <input
                type="text"
                value={pPrice}
                onChange={(e) => setPPrice(e.target.value)}
                required
                placeholder="$199"
                className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                ប្រភេទគម្រោង (Category)
              </label>
              <select
                value={pCategory}
                onChange={(e) => setPCategory(e.target.value)}
                className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              >
                <option value="Modern Villa">Modern Villa</option>
                <option value="Residential House">Residential House</option>
                <option value="Townhouse">Townhouse / ផ្ទះល្វែង</option>
                <option value="Commercial & Cafe">Commercial & Cafe</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Username Telegram (សម្រាប់ផ្ញើវិក្កយបត្រ)
              </label>
              <input
                type="text"
                value={pTelegram}
                onChange={(e) => setPTelegram(e.target.value)}
                placeholder="username_telegram"
                className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                រើសយករូបភាព Render (Image File)
              </label>
              <div className="border-2 border-dashed border-gray-700 hover:border-amber-500/70 rounded-xl p-4 text-center cursor-pointer bg-[#1c222e]/60 transition relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={previewImage}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-1">
                  <p className="text-xs text-gray-300">
                    ចុចទីនេះដើម្បីរើសរូប Render ថ្មីពីកុំព្យូទ័រ
                  </p>
                  <p className="text-xs text-amber-400 font-medium">
                    {fileNameDisplay}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                ការពណ៌នាលម្អិត *
              </label>
              <textarea
                rows="2"
                value={pDesc}
                onChange={(e) => setPDesc(e.target.value)}
                required
                placeholder="ទំហំ 10m x 20m..."
                className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition"
              ></textarea>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-black/40 rounded-xl border border-gray-800 my-2">
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  កូដគម្រោង (Code)
                </label>
                <input
                  type="text"
                  value={pCode}
                  onChange={(e) => setPCode(e.target.value)}
                  placeholder="P15"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  ទំហំដី (Land)
                </label>
                <input
                  type="text"
                  value={pLand}
                  onChange={(e) => setPLand(e.target.value)}
                  placeholder="12x25m"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  ទំហំផ្ទះ (Built Area)
                </label>
                <input
                  type="text"
                  value={pBuiltArea}
                  onChange={(e) => setPBuiltArea(e.target.value)}
                  placeholder="176m²"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  បន្ទប់គេង (Bedrooms)
                </label>
                <input
                  type="text"
                  value={pBeds}
                  onChange={(e) => setPBeds(e.target.value)}
                  placeholder="3"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  បន្ទប់ទឹក (Bathrooms)
                </label>
                <input
                  type="text"
                  value={pBaths}
                  onChange={(e) => setPBaths(e.target.value)}
                  placeholder="3"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">
                  កន្លែងចតឡាន (Parking)
                </label>
                <input
                  type="text"
                  value={pParking}
                  onChange={(e) => setPParking(e.target.value)}
                  placeholder="2"
                  className="w-full bg-[#161a23] border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                {currentLang === "km"
                  ? "រក្សាទុកការផ្លាស់ប្តូរ (Save Project)"
                  : "Save Changes"}
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-[#141822] border border-gray-800 rounded-2xl p-5 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ស្វែងរកតាមឈ្មោះគម្រោង ឬទំហំ..."
            className="bg-[#1c222e] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[#1c222e] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition"
          >
            <option value="ALL">
              គ្រប់ប្រភេទគម្រោងទាំងអស់ (All Categories)
            </option>
            <option value="Modern Villa">Modern Villa</option>
            <option value="Residential House">Residential House</option>
            <option value="Townhouse">Townhouse / ផ្ទះល្វែង</option>
            <option value="Commercial & Cafe">Commercial & Cafe</option>
          </select>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="bg-[#1c222e] border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition"
          >
            <option value="ALL">គ្រប់តម្លៃទាំងអស់ (All Prices)</option>
            <option value="PAID">ប្លង់មានតម្លៃ (Paid Plans)</option>
            <option value="FREE">ប្លង់ឥតគិតថ្លៃ (Free Plans)</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => {
          const buyBtnText =
            currentLang === "km"
              ? "ទូទាត់ប្រាក់ / ទិញគម្រោងនេះ"
              : "Pay & Purchase Plan";

          return (
            <div
              key={p.id}
              className="bg-[#111622] rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-black/50">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-amber-400 font-extrabold px-3 py-1 text-sm rounded-lg border border-amber-500/30">
                    {p.price}
                  </span>
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-gray-700/60 uppercase">
                    {p.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-teal-400 block mb-0.5">
                      Project Code: {p.code || "P01"}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-gray-800 text-xs text-gray-300">
                    {p.land && (
                      <div>
                        Land: <strong className="text-white">{p.land}</strong>
                      </div>
                    )}
                    {p.builtArea && (
                      <div>
                        Built Area:{" "}
                        <strong className="text-white">{p.builtArea}</strong>
                      </div>
                    )}
                    {p.beds && (
                      <div>
                        Bedrooms:{" "}
                        <strong className="text-white">{p.beds}</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Payment & Admin Controls */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedProjectForPayment(p)}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wide transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
                >
                  <span>💳 {buyBtnText}</span>
                </button>

                {(isAdmin || currentUser) && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditProject && handleEditProject(p)}
                      className="flex-1 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-500/30 text-xs font-semibold transition"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteProject(p.id)}
                      className="flex-1 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-500/30 text-xs font-semibold transition"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment Modal / Popup */}
      {selectedProjectForPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#151922] border border-amber-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProjectForPayment(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-3">
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase">
                KHQR Payment Gateway
              </span>
              <h3 className="text-lg font-bold text-white">
                {selectedProjectForPayment.title}
              </h3>
              <p className="text-xs text-gray-400">
                Project Code:{" "}
                <span className="text-amber-400 font-semibold">
                  {selectedProjectForPayment.code || "P01"}
                </span>{" "}
                | តម្លៃ:{" "}
                <span className="text-emerald-400 font-bold">
                  {selectedProjectForPayment.price}
                </span>
              </p>

              {/* QR Code Scan Area */}
              <div className="bg-white p-4 rounded-xl inline-block my-3 shadow-inner">
                <img
                  src="/QrCode.jpg"
                  alt="Payment QR Code"
                  className="w-44 h-44 object-contain mx-auto"
                />
              </div>

              <div className="text-xs text-gray-300 bg-[#1c222e] p-3 rounded-xl border border-gray-800 text-left space-y-1">
                <p className="font-semibold text-amber-400">វិធីបង់ប្រាក់៖</p>
                <p>
                  1. បើក ABA Mobile ឬកម្មវិធីធនាគារណាមួយដើម្បីស្កែន QR ខាងលើ។
                </p>
                <p>
                  2. បញ្ជាក់ទឹកប្រាក់ចំនួន{" "}
                  <strong className="text-white">
                    {selectedProjectForPayment.price}
                  </strong>
                  ។
                </p>
                <p>
                  3. ថតរូបវិក្កយបត្រ (Receipt) រួចផ្ញើមកកាន់ Telegram
                  របស់យើងដើម្បីទទួលបាន Files គម្រោងពេញលេញ។
                </p>
              </div>

              <a
                href={`https://t.me/${selectedProjectForPayment.telegram || "yourusername"}?text=${encodeURIComponent("I have paid for project: " + selectedProjectForPayment.title + " (" + (selectedProjectForPayment.code || "P01") + ")")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full block py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wide transition shadow-lg shadow-emerald-500/20"
              >
                ផ្ញើវិក្កយបត្របញ្ជាក់ការបង់ប្រាក់តាម Telegram →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
