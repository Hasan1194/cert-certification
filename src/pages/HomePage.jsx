import CertificateCard from "../components/CertificateCard";

function HomePage({ setCurrentPage }) {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen flex flex-col items-center text-gray-800 dark:text-gray-200 py-12 transition-colors duration-300">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-yellow-400 drop-shadow-md mb-4">
          Selamat Datang di CertifyMe!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Platform verifikasi sertifikat digital berbasis blockchain untuk
          ekonomi kreatif Indonesia. Transparansi, keamanan, dan kepercayaan
          dalam satu solusi.
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>✓ Verifikasi Instan</span>
          <span>✓ Blockchain Secured</span>
          <span>✓ Digital Rights Protection</span>
        </div>
      </header>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <CertificateCard
          title=" Verifikasi Sertifikat"
          description="Validasi keaslian dokumen sertifikat secara real-time dengan teknologi blockchain."
          onClick={() => setCurrentPage("verify")}
        />
        <CertificateCard
          title=" Koleksi Sertifikat"
          description="Kelola dan monitor semua sertifikat terverifikasi Anda dengan dashboard interaktif."
          onClick={() => setCurrentPage("collection")}
        />
      </div>

      {/* Fitur Unggulan */}
      <div className="mt-16 max-w-4xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-yellow-400 dark:border-yellow-500 transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-4">
          💡 Fitur Unggulan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🔐</div>
            <p className="font-semibold text-gray-900 dark:text-yellow-300">
              Keamanan Blockchain
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Setiap sertifikat tersimpan aman di blockchain
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <p className="font-semibold text-gray-900 dark:text-yellow-300">
              Verifikasi Instan
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Hasil verifikasi dalam hitungan detik
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <p className="font-semibold text-gray-900 dark:text-yellow-300">
              Digital Rights
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Lindungi hak cipta karya kreatif Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
