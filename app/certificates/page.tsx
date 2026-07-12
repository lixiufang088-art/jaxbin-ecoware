import Link from 'next/link';
import PageHero from '@/components/PageHero';

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
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Compliance & Standards"
        subtitle="Jaxbin Ecoware maintains rigorous certifications to ensure our products meet the highest environmental, ethical, and food-safety requirements worldwide."
        image="/assets/images/sections/hero.png"
      />

      {/* Certificates Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certs.map((cert, idx) => (
              <div key={idx} className="p-12 border border-slate-100 bg-slate-50 rounded-[40px] flex flex-col sm:flex-row gap-8 items-start hover:shadow-2xl transition-all duration-700 group">
                <div className="w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-h3 text-slate-900 mb-2 uppercase tracking-tighter italic">{cert.name}</h3>
                  <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.3em] mb-6">{cert.full}</p>
                  <p className="text-slate-500 font-medium leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Download Section */}
      <section className="bg-slate-950 text-white py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="w-64 h-[400px] bg-white/5 rounded-3xl flex items-center justify-center text-slate-700 italic border border-white/10 shadow-2xl relative overflow-hidden group">
            <img src="/assets/images/sections/hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" alt="" />
            <span className="relative z-10 font-black uppercase tracking-widest text-xs">Catalog 2026</span>
          </div>
          <div className="flex-grow text-center md:text-left">
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Procurement Resources</span>
            <h2 className="text-h2 tracking-tighter uppercase italic mb-8 leading-[0.9]">Download Our<br/>Full Catalog</h2>
            <p className="text-2xl text-slate-400 mb-12 font-medium leading-tight">Get instant access to our 2026 product range, technical data sheets, and export packaging matrices.</p>
            <button className="bg-green-600 text-white px-16 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group uppercase tracking-widest">
              DOWNLOAD PDF (12MB) →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-40 text-center bg-white border-t border-slate-100">
        <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Custom Compliance Request</span>
        <Link href="/contact" className="text-slate-950 font-black text-4xl hover:text-green-600 transition-colors tracking-tighter uppercase italic underline underline-offset-[20px] decoration-green-500 decoration-8">
          Request Test Reports →
        </Link>
      </section>
    </div>
  );
}
