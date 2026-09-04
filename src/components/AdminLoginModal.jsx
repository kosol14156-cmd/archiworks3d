import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // ពិនិត្យ Path ទៅកាន់ firebase.js របស់អ្នក

export default function AdminLoginModal({
  isLoginModalOpen,
  toggleAuthModal,
  adminEmail,
  setAdminEmail,
  adminPassword,
  setAdminPassword,
  loginError,
  setLoginError,
  isSubmittingLogin,
  setIsSubmittingLogin,
}) {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingLogin(true);
    setLoginError("");

    try {
      if (isRegisterMode) {
        // ចុះឈ្មោះគណនីថ្មី
        await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
        alert("✓ បានបង្កើតគណនីនិងចូលដោយជោគជ័យ!");
        toggleAuthModal();
      } else {
        // ចូលប្រើប្រាស់គណនីស្រាប់
        await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        alert("✓ ចូលប្រើប្រាស់ជោគជ័យ!");
        toggleAuthModal();
      }
    } catch (err) {
      setLoginError(
        err.message || "មានបញ្តហាក្នុងការផ្ទៀងផ្ទាត់ សូមព្យាយាមម្តងទៀត។",
      );
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#181a20] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl text-white relative">
        <button
          onClick={toggleAuthModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl mx-auto flex items-center justify-center text-amber-500 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h3 className="text-lg font-bold">
            {isRegisterMode ? "Admin Register Portal" : "Admin Login Portal"}
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            {isRegisterMode
              ? "បង្កើតគណនីថ្មីសម្រាប់គ្រប់គ្រងគម្រោង"
              : "ចូលប្រើប្រាស់ដើម្បីគ្រប់គ្រងគម្រោង"}
          </p>
        </div>

        {/* Tab Switcher សម្រាប់ប្តូររវាង Login និង Register */}
        <div className="flex bg-[#101216] p-1 rounded-xl mb-5 border border-white/5">
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(false);
              setLoginError("");
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              !isRegisterMode
                ? "bg-amber-500 text-black shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Login (ចូល)
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(true);
              setLoginError("");
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              isRegisterMode
                ? "bg-amber-500 text-black shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Register (ចុះឈ្មោះ)
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Email គណនី
            </label>
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="w-full bg-[#101216] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-[#101216] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {loginError && <p className="text-xs text-rose-500">{loginError}</p>}

          <button
            type="submit"
            disabled={isSubmittingLogin}
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            {isSubmittingLogin
              ? "កំពុងដំណើរការ..."
              : isRegisterMode
                ? "បង្កើតគណនី (Register)"
                : "ចូលប្រើប្រាស់ (Login)"}
          </button>
        </form>
      </div>
    </div>
  );
}
