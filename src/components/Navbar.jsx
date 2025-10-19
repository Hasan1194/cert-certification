import { useState, useEffect } from "react";

function Navbar({ currentPage, setCurrentPage }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg sticky top-0 z-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
          🔐 CertifyMe
        </h1>

        <div className="space-x-6 flex items-center">
          <button
            onClick={() => setCurrentPage("home")}
            className={`font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              currentPage === "home"
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "text-gray-900 hover:bg-gray-900 hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-gray-900"
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => setCurrentPage("verify")}
            className={`font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              currentPage === "verify"
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "text-gray-900 hover:bg-gray-900 hover:text-white dark:text-gray-200 dark:hover:bg-white dark:hover:text-gray-900"
            }`}
          >
            🔍 Verify
          </button>

          {/* Toggle Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-2 rounded-full bg-white/30 hover:bg-white/50 text-gray-900 dark:bg-gray-700 dark:text-white transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
