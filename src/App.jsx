import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./components/firebase";
import { defaultProjects } from "./data/defaultProjects";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";

const ADMIN_PASS = "666666";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [currentLang, setCurrentLang] = useState("km");
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("my_archi_projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [priceFilter, setPriceFilter] = useState("ALL");

  // Modal State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Secret Click State
  const [clickCount, setClickCount] = useState(0);

  // Form Upload State
  const [pTitle, setPTitle] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [pCategory, setPCategory] = useState("Modern Villa");
  const [pTelegram, setPTelegram] = useState("");
  const [pDesc, setPDesc] = useState("");
  const [pCode, setPCode] = useState("");
  const [pLand, setPLand] = useState("");
  const [pBuiltArea, setPBuiltArea] = useState("");
  const [pBeds, setPBeds] = useState("");
  const [pBaths, setPBaths] = useState("");
  const [pParking, setPParking] = useState("");
  const [uploadedImageBase64, setUploadedImageBase64] = useState("");
  const [fileNameDisplay, setFileNameDisplay] = useState("");

  useEffect(() => {
    localStorage.setItem("my_archi_projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const switchTab = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSecretClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        promptAdminLogin();
        return 0;
      }
      setTimeout(() => setClickCount(0), 1000);
      return next;
    });
  };

  const promptAdminLogin = () => {
    if (isAdmin) {
      switchTab("projects");
      return;
    }
    const pass = prompt(
      "សូមវាយបញ្ចូល Password របស់អ្នកគ្រប់គ្រង (Admin Password):",
    );
    if (pass === ADMIN_PASS) {
      setIsAdmin(true);
      switchTab("projects");
      alert("✓ ស្វាគមន៍! ផ្ទាំង Upload និងប៊ូតុងលុបគម្រោងត្រូវបានបើក។");
    } else if (pass !== null) {
      alert("✕ Password មិនត្រឹមត្រូវទេ!");
    }
  };

  const lockAdmin = () => {
    setIsAdmin(false);
    alert("✓ បានចាក់សោរវិញដោយជោគជ័យ។");
  };

  const previewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setUploadedImageBase64(uploadEvent.target.result);
        setFileNameDisplay("✓ បានរើសរូប៖ " + file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (!uploadedImageBase64) {
      alert("សូមជ្រើសរើសរូបភាព Render ជាមុនសិន!");
      return;
    }

    const newProj = {
      id: Date.now(),
      title: pTitle,
      category: pCategory,
      price: pPrice,
      image: uploadedImageBase64,
      descKm: pDesc,
      descEn: pDesc,
      telegram: pTelegram || "yourusername",
      code: pCode || "P01",
      land: pLand,
      builtArea: pBuiltArea,
      beds: pBeds,
      baths: pBaths,
      parking: pParking,
    };

    setProjects([newProj, ...projects]);
    setPSignDefaults();
    alert("✓ បញ្ចូលគម្រោងថ្មីបានជោគជ័យ!");
  };

  const setPSignDefaults = () => {
    setPTitle("");
    setPPrice("");
    setPCategory("Modern Villa");
    setPTelegram("");
    setPDesc("");
    setPCode("");
    setPLand("");
    setPBuiltArea("");
    setPBeds("");
    setPBaths("");
    setPParking("");
    setUploadedImageBase64("");
    setFileNameDisplay("");
  };

  const deleteProject = (id) => {
    if (window.confirm("តើអ្នកពិតជាចង់លុបគម្រោងនេះចេញមែនទេ?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "km" ? "en" : "km");
  };

  const toggleAuthModal = () => {
    if (currentUser) {
      if (window.confirm("តើបងពិតជាចង់ចាកចេញ (Logout) មែនទេ?")) {
        signOut(auth).then(() => alert("បានចាកចេញដោយជោគជ័យ!"));
      }
    } else {
      setIsLoginModalOpen(!isLoginModalOpen);
      setLoginError("");
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setIsSubmittingLogin(true);
    setLoginError("");

    signInWithEmailAndPassword(auth, adminEmail, adminPassword)
      .then(() => {
        setIsLoginModalOpen(false);
        setAdminEmail("");
        setAdminPassword("");
        alert("ចូលប្រើប្រាស់ជោគជ័យ! សូមស្វាគមន៍ Admin។");
      })
      .catch(() => {
        setLoginError("Email ឬ Password មិនត្រឹមត្រូវទេ!");
      })
      .finally(() => {
        setIsSubmittingLogin(false);
      });
  };

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchText =
      p.title.toLowerCase().includes(q) ||
      (p.descKm || "").toLowerCase().includes(q) ||
      (p.descEn || "").toLowerCase().includes(q);
    const matchCat = categoryFilter === "ALL" || p.category === categoryFilter;
    const isFree =
      (p.price || "").toLowerCase().includes("free") ||
      p.price === "$0" ||
      p.price === "0";
    const matchPrice =
      priceFilter === "ALL" ||
      (priceFilter === "FREE" && isFree) ||
      (priceFilter === "PAID" && !isFree);
    return matchText && matchCat && matchPrice;
  });

  return (
    <div className="bg-[#0e1015] text-gray-200 antialiased selection:bg-amber-500 selection:text-black min-h-screen flex flex-col justify-between font-sans">
      {/* Header Component */}
      <Header
        currentTab={currentTab}
        switchTab={switchTab}
        currentLang={currentLang}
        toggleLanguage={toggleLanguage}
        toggleAuthModal={toggleAuthModal}
        currentUser={currentUser}
        handleSecretClick={handleSecretClick}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full">
        {currentTab === "home" && (
          <Home currentLang={currentLang} switchTab={switchTab} />
        )}

        {currentTab === "projects" && (
          <Projects
            currentLang={currentLang}
            isAdmin={isAdmin}
            currentUser={currentUser}
            lockAdmin={lockAdmin}
            handleProjectSubmit={handleProjectSubmit}
            pTitle={pTitle}
            setPTitle={setPTitle}
            pPrice={pPrice}
            setPPrice={setPPrice}
            pCategory={pCategory}
            setPCategory={setPCategory}
            pTelegram={pTelegram}
            setPTelegram={setPTelegram}
            previewImage={previewImage}
            fileNameDisplay={fileNameDisplay}
            pDesc={pDesc}
            setPDesc={setPDesc}
            pCode={pCode}
            setPCode={setPCode}
            pLand={pLand}
            setPLand={setPLand}
            pBuiltArea={pBuiltArea}
            setPBuiltArea={setPBuiltArea}
            pBeds={pBeds}
            setPBeds={setPBeds}
            pBaths={pBaths}
            setPBaths={setPBaths}
            pParking={pParking}
            setPParking={setPParking}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            filteredProjects={filteredProjects}
            deleteProject={deleteProject}
          />
        )}

        {currentTab === "services" && <Services currentLang={currentLang} />}

        {currentTab === "about" && <About currentLang={currentLang} />}
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Admin Login Modal Component */}
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        toggleAuthModal={toggleAuthModal}
        handleAdminLogin={handleAdminLogin}
        adminEmail={adminEmail}
        setAdminEmail={setAdminEmail}
        adminPassword={adminPassword}
        setAdminPassword={setAdminPassword}
        loginError={loginError}
        isSubmittingLogin={isSubmittingLogin}
      />
    </div>
  );
}
