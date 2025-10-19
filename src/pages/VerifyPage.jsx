import { useState } from "react";
import { CheckCircle, AlertCircle, Upload, Search } from "lucide-react";

function VerifyPage() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [hashInput, setHashInput] = useState("");

  const generateMockHash = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setVerificationResult(null);
    }
  };

  const handleFileVerification = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      const mockHash = generateMockHash();
      setVerificationResult({
        status: "verified",
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(2),
        hash: mockHash,
        timestamp: new Date().toLocaleString("id-ID"),
        issuer: "Lembaga Sertifikasi Kreatif Indonesia",
        certificateId: "CERT-" + Date.now(),
      });
      setIsVerifying(false);
    }, 2000);
  };

  const handleHashVerification = (e) => {
    e.preventDefault();
    if (!hashInput.trim()) {
      alert("Masukkan hash terlebih dahulu.");
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      const isValid = hashInput.length > 20;
      setVerificationResult({
        status: isValid ? "verified" : "invalid",
        certificateId: "CERT-" + hashInput.substring(0, 10).toUpperCase(),
        hash: hashInput,
        timestamp: new Date().toLocaleString("id-ID"),
        issuer: isValid ? "Lembaga Sertifikasi Kreatif Indonesia" : "Unknown",
        blockchainConfirmed: isValid,
      });
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen flex flex-col items-center justify-start pt-12 text-gray-800 pb-8">
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
        🔍 Verifikasi Sertifikat
      </h1>

      <div className="max-w-2xl w-full space-y-8 px-4">
        {/* File Upload Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📤 Upload File Sertifikat
          </h2>
          <div className="space-y-4">
            <div className="relative border-3 border-dashed border-yellow-300 rounded-lg p-8 text-center hover:bg-yellow-50 transition-colors cursor-pointer">
              <input
                type="file"
                accept=".pdf,.jpg,.png,.jpeg"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="pointer-events-none">
                <div className="text-5xl mx-auto text-yellow-400 mb-2">📁</div>
                <p className="text-gray-700 font-semibold">Klik atau drag file di sini</p>
                <p className="text-sm text-gray-500">Format: PDF, JPG, PNG (Max 5MB)</p>
                {fileName && <p className="mt-3 text-green-600 font-semibold">✓ {fileName}</p>}
              </div>
            </div>
            <button
              onClick={handleFileVerification}
              disabled={isVerifying || !file}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-gray-900 font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {isVerifying ? "🔄 Sedang Verifikasi..." : "✓ Verifikasi File"}
            </button>
          </div>
        </div>

        {/* Hash Verification Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verifikasi via Hash</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Masukkan Certificate Hash..."
              value={hashInput}
              onChange={(e) => setHashInput(e.target.value)}
              className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 font-mono text-sm text-gray-900"
            />
            <button
              onClick={handleHashVerification}
              disabled={isVerifying}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-gray-900 font-bold py-3 rounded-lg transition-all"
            >
              {isVerifying ? "🔄 Sedang Verifikasi..." : "🔍 Cek Hash"}
            </button>
          </div>
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div className={`rounded-2xl p-8 border-4 ${
            verificationResult.status === "verified"
              ? "bg-green-50 border-green-400"
              : "bg-red-50 border-red-400"
          }`}>
            <div className="flex items-center gap-3 mb-6">
              {verificationResult.status === "verified" ? (
                <>
                  <span className="text-4xl">✓</span>
                  <h3 className="text-2xl font-bold text-green-700">Sertifikat Terverifikasi</h3>
                </>
              ) : (
                <>
                  <span className="text-4xl">✗</span>
                  <h3 className="text-2xl font-bold text-red-700">Verifikasi Gagal</h3>
                </>
              )}
            </div>

            <div className="space-y-3 text-gray-700">
              {verificationResult.certificateId && (
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">ID Sertifikat:</span>
                  <span className="font-mono">{verificationResult.certificateId}</span>
                </div>
              )}
              {verificationResult.fileName && (
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Nama File:</span>
                  <span>{verificationResult.fileName}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Hash:</span>
                <span className="font-mono text-xs break-all">{verificationResult.hash}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Waktu Verifikasi:</span>
                <span>{verificationResult.timestamp}</span>
              </div>
              {verificationResult.issuer && (
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Penerbit:</span>
                  <span>{verificationResult.issuer}</span>
                </div>
              )}
              {verificationResult.blockchainConfirmed && (
                <div className="flex justify-between py-2 bg-green-100 px-3 rounded-lg">
                  <span className="font-semibold">Status Blockchain:</span>
                  <span className="text-green-700 font-bold">✓ Confirmed</span>
                </div>
              )}
            </div>

            <button
              onClick={() => setVerificationResult(null)}
              className="w-full mt-6 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 rounded-lg transition-all"
            >
              ← Verifikasi Lagi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyPage;
