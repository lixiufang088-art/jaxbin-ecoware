import Link from 'next/link';

export default function AboutPage() {
  const steps = [
    { title: "Sourcing", desc: "Selecting premium birch, bamboo, and fiber substrates from certified sustainable sources." },
    { title: "Treatment", desc: "Professional kiln-drying to maintain moisture levels between 8% - 12% for maximum stability." },
    { title: "Shaping", desc: "Precision molding and die-cutting to match technical drawings and buyer specifications." },
    { title: "Polishing", desc: "Triple-polished surface finishing to ensure a smooth, burr-free experience for food contact." },
    { title: "QC & Packing", desc: "Multi-point quality checks for dimensions and cleanliness before final export packing." }
  ];

  const machines = [
    { type: "Automatic Slicing", count: "12 Units", speed: "50,000 pcs/hr" },
    { type: "Kiln-Drying Chambers", count: "8 Units", speed: "Digital Moisture Control" },
    { type: "High-Speed Polishing", count: "24 Units", speed: "Sanding Grade 600+" },
    { type: "Laser Etching", count: "4 Units", speed: "Custom Brand Marking" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/sections/factory.png')] bg-cover bg-center grayscale"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-700">/</span>
            <span>Factory Profile</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic">Practical <span className="text-green-600">Manufacturing</span></h1>
          <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
            Jaxbin Ecoware operates integrated processing facilities designed for B2B scale, custom packing requirements, and transparent quality control.
          </p>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 01 / Infrastructure</span>
            <h2 className="text-5xl font-black mb-10 text-slate-900 tracking-tighter uppercase italic">8,000 m² Processing Hub</h2>
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
              <p className="font-bold text-slate-900">Our operating model supports rapid processing, clinical-grade packing, and high-volume export coordination.</p>
              <p>Jaxbin maintains strict material segregation for wood, bamboo, and sugarcane bagasse substrates. The exact manufacturing route and documentation are optimized per SKU to ensure global compliance.</p>
              
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-100">
                 <div>
                    <p className="text-4xl font-black text-green-600 mb-2">1.2B+</p>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Annual Unit Capacity</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black text-green-600 mb-2">15+</p>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Export Markets Served</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/factory.png" alt="Jaxbin factory facility" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Machine Specs & Capacity Report */}
      <section className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div>
                <span className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 02 / Machine Matrix</span>
                <h2 className="text-5xl font-black tracking-tighter uppercase italic">Hardware Specifications</h2>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-green-400 italic">2026 Fleet Modernization Program Completed</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machines.map((m, idx) => (
              <div key={idx} className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 group-hover:text-green-500">{m.type}</p>
                <p className="text-3xl font-black mb-2">{m.count}</p>
                <p className="text-sm font-bold text-slate-400 italic">{m.speed}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Steps */}
      <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Process Transparency</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">The Path to Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden group">
                <div className="text-7xl font-black text-slate-50 absolute -right-2 -bottom-4 group-hover:text-green-50 transition-colors">{idx + 1}</div>
                <h3 className="font-black text-slate-900 mb-6 text-xl relative z-10 uppercase tracking-tighter italic">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Global Reach */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic">Export Support Infrastructure</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-20">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-black text-xs uppercase tracking-widest text-green-700 mb-4">Documentation</h4>
                 <p className="text-sm font-medium text-slate-600">Full support for FSC, Phytosanitary, FDA and LFGB compliance filings per shipment.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-black text-xs uppercase tracking-widest text-green-700 mb-4">Storage</h4>
                 <p className="text-sm font-medium text-slate-600">3,500 m² of climate-controlled inventory space ensuring product moisture stability.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-black text-xs uppercase tracking-widest text-green-700 mb-4">Logistics</h4>
                 <p className="text-sm font-medium text-slate-600">Proximity to major shipping ports (Fuzhou/Xiamen) for streamlined B2B distribution.</p>
              </div>
           </div>
           <Link href="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-green-700 transition shadow-2xl shadow-green-200/50 group">
            DOWNLOAD CAPACITY REPORT
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
