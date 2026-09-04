import React from "react";

export default function AdminPanel({
  lang,
  lockAdmin,
  formData,
  setFormData,
  handleProjectSubmit,
  handleImageChange,
  handleFileChange,
  selectedFileName,
  selectedDocName,
}) {
  return (
    <section className="bg-[#151922] border border-amber-500/40 rounded-2xl p-6 md:p-8 shadow-2xl relative mb-8">
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-bold text-white">
          {lang === "km" ? "បញ្ចូល Project ប្លង់ថ្មី" : "Add New Project"}
        </h2>
        <button
          onClick={lockAdmin}
          className="px-3.5 py-1.5 rounded-lg bg-red-900/30 hover:bg-red-900/50 text-red-300 text-xs font-semibold transition"
        >
          {lang === "km" ? "ចាក់សោរវិញ (Lock)" : "Lock Admin"}
        </button>
      </div>

      <form onSubmit={handleProjectSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder={
              lang === "km" ? "ឈ្មោះគម្រោង (Title)" : "Project Title"
            }
            className="bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
          />
          <input
            type="text"
            required
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder={lang === "km" ? "តម្លៃ (ឧ. $199 ឬ Free)" : "Price ($)"}
            className="bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
          />
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
          >
            <option value="Modern Villa">Modern Villa</option>
            <option value="Residential House">Residential House</option>
          </select>
          <input
            type="text"
            value={formData.telegram}
            onChange={(e) =>
              setFormData({ ...formData, telegram: e.target.value })
            }
            placeholder="Telegram Username (optional)"
            className="bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
          />
        </div>

        <textarea
          rows="3"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          placeholder={
            lang === "km"
              ? "បរិយាយពីទំហំដី បន្ទប់គេង..."
              : "Project Description..."
          }
          className="w-full bg-[#1c222e] border border-gray-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
        />

        {/* កន្លែង Upload រូបភាព និងឯកសារប្លង់ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-400">
              {lang === "km" ? "រូបភាពគម្រោង (Thumbnail):" : "Project Image:"}
            </label>
            <label className="cursor-pointer px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-xs font-medium text-amber-400 transition text-center">
              {selectedFileName
                ? selectedFileName
                : lang === "km"
                  ? "📁 ជ្រើសរើសរូបភាព"
                  : "📁 Choose Image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-400">
              {lang === "km"
                ? "ឯកសារប្លង់ (PDF / CAD / ZIP):"
                : "Project Document (PDF/ZIP):"}
            </label>
            <label className="cursor-pointer px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-xs font-medium text-amber-400 transition text-center">
              {selectedDocName
                ? selectedDocName
                : lang === "km"
                  ? "📎 ជ្រើសរើសឯកសារប្លង់"
                  : "📎 Choose File"}
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-sm transition shadow-lg shadow-amber-500/20 mt-4"
        >
          {lang === "km"
            ? "រក្សាទុក និងដាក់លក់ Project"
            : "Save & Publish Project"}
        </button>
      </form>
    </section>
  );
}
