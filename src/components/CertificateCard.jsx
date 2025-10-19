function CertificateCard({ title, description, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white shadow-xl rounded-2xl p-6 w-72 text-center hover:scale-105 transition-transform duration-300 border-4 border-yellow-400 cursor-pointer hover:shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mt-3 text-gray-700">{description}</p>
      <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all">
        Mulai 🚀
      </button>
    </div>
  );
}

export default CertificateCard;
