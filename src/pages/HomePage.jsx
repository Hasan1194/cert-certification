import CertificateCard from "../components/CertificateCard";

function HomePage({ setCurrentPage }) {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen flex flex-col items-center text-gray-800 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md mb-4">
          Selamat Datang di CertifyMe! 🎓
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Platform verifikasi sertifikat digital berbasis blockchain untuk ekonomi kreatif Indonesia. Transparansi, keamanan, dan kepercayaan dalam satu solusi.
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          <span>✓ Verifikasi Instan</span>
          <span>✓ Blockchain Secured</span>
          <span>✓ Digital Rights Protection</span>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <CertificateCard
          title="🔍 Verifikasi Sertifikat"
          description="Validasi keaslian dokumen sertifikat secara real-time dengan teknologi blockchain."
          onClick={() => setCurrentPage("verify")}
        />
        <CertificateCard
          title="📋 Koleksi Sertifikat"
          description="Kelola dan monitor semua sertifikat terverifikasi Anda dengan dashboard interaktif."
          onClick={() => setCurrentPage("collection")}
        />
      </div>

      <div className="mt-16 max-w-4xl bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-400">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Fitur Unggulan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🔐</div>
            <p className="font-semibold text-gray-900">Keamanan Blockchain</p>
            <p className="text-sm text-gray-600 mt-1">Setiap sertifikat tersimpan aman di blockchain</p>
          </div>
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <p className="font-semibold text-gray-900">Verifikasi Instan</p>
            <p className="text-sm text-gray-600 mt-1">Hasil verifikasi dalam hitungan detik</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <p className="font-semibold text-gray-900">Digital Rights</p>
            <p className="text-sm text-gray-600 mt-1">Lindungi hak cipta karya kreatif Anda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
