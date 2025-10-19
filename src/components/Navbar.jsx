function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          🔐 CertifyMe
        </h1>
        <div className="space-x-6 flex">
          <button
            onClick={() => setCurrentPage("home")}
            className={`font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              currentPage === "home"
                ? "bg-gray-900 text-white"
                : "text-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("verify")}
            className={`font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              currentPage === "verify"
                ? "bg-gray-900 text-white"
                : "text-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            🔍 Verify
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;