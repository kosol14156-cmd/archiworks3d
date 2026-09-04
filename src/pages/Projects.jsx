import React from "react";

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
}) {
  return (
    <div className="space-y-8">
      {/* Upload Section (Admin Only) */}
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
                  ? "បញ្ចូល Project ថ្មី"
                  : "Add New Project"}
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
                Username Telegram (ភ្ញៀវឆាតមក)
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
                រើសយករូបភាព Render (Image File) *
              </label>
              <div className="border-2 border-dashed border-gray-700 hover:border-amber-500/70 rounded-xl p-4 text-center cursor-pointer bg-[#1c222e]/60 transition relative">
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={previewImage}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-1">
                  <svg
                    className="w-8 h-8 text-amber-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-xs text-gray-300">
                    ចុចទីនេះដើម្បីរើសរូប Render ពីកុំព្យូទ័រ (JPG, PNG)
                  </p>
                  <p className="text-xs text-amber-400 font-medium">
                    {fileNameDisplay}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                ការពណ៌នាលម្អិត (ទំហំដី, បន្ទប់, ឯកសាររួមមាន) *
              </label>
              <textarea
                rows="2"
                value={pDesc}
                onChange={(e) => setPDesc(e.target.value)}
                required
                placeholder="ទំហំ 10m x 20m, 3 បន្ទប់គេង, កញ្ចប់ឯកសារ CAD DWG + SketchUp + PDF..."
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
                ដាក់បញ្ចាំងគម្រោងនេះលើវេបសាយ (Publish Project)
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-[#141822] border border-gray-800 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔍</span>
            <h3 className="text-base font-bold text-white">
              {currentLang === "km"
                ? "ស្វែងរកគម្រោងដែលស័ក្តិសម (Find Project)"
                : "Find Your Project"}
            </h3>
          </div>
          <div className="text-xs text-gray-400">
            គម្រោងសរុប៖{" "}
            <span className="text-amber-400 font-bold">
              {filteredProjects.length}
            </span>
          </div>
        </div>

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
          const tgLink = `https://t.me/${p.telegram || "yourusername"}?text=${encodeURIComponent("I want to inquire about " + p.title)}`;
          const buyBtnText =
            currentLang === "km" ? "បញ្ជាទិញគម្រោងនេះ" : "Purchase This Plan";

          return (
            <div
              key={p.id}
              className="bg-[#111622] rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-black/50">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-black/30 pointer-events-none"></div>
                  <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-amber-400 font-extrabold px-3 py-1 text-sm rounded-lg border border-amber-500/30 shadow-md">
                    {p.price}
                  </span>
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-gray-700/60 uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-teal-400 block mb-0.5">
                      Project Code: {p.code || "P01"}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-800/80 text-xs text-gray-300">
                    {p.land && (
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                        <span>
                          Land: <strong className="text-white">{p.land}</strong>
                        </span>
                      </div>
                    )}
                    {p.builtArea && (
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        <span>
                          Built Area:{" "}
                          <strong className="text-white">{p.builtArea}</strong>
                        </span>
                      </div>
                    )}
                    {p.beds && (
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M3 7v11m0-4h18m0-7v11M7 10h4a2 2 0 012 2v2H5v-2a2 2 0 012-2z"
                          />
                        </svg>
                        <span>
                          Bedrooms:{" "}
                          <strong className="text-white">{p.beds}</strong>
                        </span>
                      </div>
                    )}
                    {p.parking && (
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M8 17h8M5 11l2-5h10l2 5M5 11h14v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z"
                          />
                        </svg>
                        <span>
                          Parking spaces:{" "}
                          <strong className="text-white">{p.parking}</strong>
                        </span>
                      </div>
                    )}
                    {p.baths && (
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M4 12v5a3 3 0 003 3h10a3 3 0 003-3v-5M4 12h16M7 12V6a2 2 0 012-2h1a2 2 0 012 2v6"
                          />
                        </svg>
                        <span>
                          Bathrooms:{" "}
                          <strong className="text-white">{p.baths}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2 items-center">
                <a
                  href={tgLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wide transition-all duration-300 shadow-md shadow-amber-500/20"
                >
                  {buyBtnText} →
                </a>
                {(isAdmin || currentUser) && (
                  <button
                    onClick={() => deleteProject(p.id)}
                    title="លុប Project នេះ"
                    className="px-3 py-2.5 rounded-lg bg-gray-800 hover:bg-red-900/40 text-gray-400 hover:text-red-400 border border-gray-700 transition text-xs"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
