import Link from 'next/link';

export default function CertificatesPage() {
  const certs = [
    {
      name: "BSCI Certified",
      full: "Business Social Compliance Initiative",
      desc: "Ensuring fair labor conditions, health & safety, and ethical business practices across our manufacturing facilities.",
      icon: "🏢"
    },
    {
      name: "FSC Certified",
      full: "Forest Stewardship Council",
      desc: "Guaranteeing that our wood and bamboo materials are sourced from responsibly managed forests that provide environmental and social benefits.",
      icon: "🌳"
    },
    {
      name: "FDA & LFGB",
      full: "Food Grade Compliance",
      desc: "Rigorous testing to ensure all products are safe for food contact and meet international regulatory standards for US and EU markets.",
      icon: "🧪"
    },
    {
      name: "ISO 9001",
      full: "Quality Management System",
      desc: "Standardized production processes and strict quality control checkpoints to ensure consistency in every shipment.",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span>Certificates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Compliance & Quality Standards</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Jaxbin Ecoware maintains rigorous certifications to ensure our products meet the highest environmental, ethical, and food-safety requirements worldwide.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map((cert, idx) => (
              <div key={idx} className="p-8 border border-slate-100 bg-slate-50 rounded-2xl flex gap-6 items-start">
                <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.name}</h3>
                  <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-4">{cert.full}</p>
                  <p className="text-slate-600 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Download Section */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50">
          <div className="w-48 h-64 bg-slate-100 rounded-lg flex items-center justify-center text-slate-300 italic border border-slate-200">
            Catalog Cover
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Download Our Full Catalog</h2>
            <p className="text-slate-600 mb-8 text-lg">Get access to our latest product range, material technical sheets, and export packaging data.</p>
            <button className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition">
              Download PDF (12MB)
            </button>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-20 text-center">
        <p className="text-slate-500 mb-4 font-medium uppercase tracking-widest text-sm">Need specific test reports?</p>
        <Link href="/contact" className="text-green-600 font-bold text-xl hover:underline underline-offset-8">
          Request Compliance Documents →
        </Link>
      </section>
    </div>
  );
}
