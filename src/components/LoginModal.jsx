import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function LoginModal({
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
  if (!isLoginModalOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (setIsSubmittingLogin) setIsSubmittingLogin(true);
    if (setLoginError) setLoginError("");

    try {
      // ធ្វើការ Login ចូលដោយផ្អែកលើ Email និង Password ដែលមានស្រាប់
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
      alert("✓ ចូលប្រើប្រាស់ Admin Panel ជោគជ័យ!");
      toggleAuthModal();
    } catch (err) {
      if (setLoginError) {
        setLoginError("Email ឬ Password មិនត្រឹមត្រូវ!");
      }
    } finally {
      if (setIsSubmittingLogin) setIsSubmittingLogin(false);
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
          <h3 className="text-lg font-bold">Admin Portal</h3>
          <p className="text-xs text-gray-400 mt-1">
            សម្រាប់ម្ចាស់វេបសាយចូលរួមគ្រប់គ្រងគម្រោងប៉ុណ្ណោះ
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Admin Email
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
              ? "កំពុងផ្ទៀងផ្ទាត់..."
              : "ចូលប្រើប្រាស់ (Login)"}
          </button>
        </form>
      </div>
    </div>
  );
}
