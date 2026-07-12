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
    { type: "Automatic Slicing", count: "12 Units", speed: "50,000 pcs/hr", power: "380V / 15kW" },
    { type: "Kiln-Drying Chambers", count: "8 Units", speed: "Digital Moisture Control", power: "Industrial Steam" },
    { type: "High-Speed Polishing", count: "24 Units", speed: "Sanding Grade 600+", power: "Pneumatic Control" },
    { type: "Laser Etching", count: "4 Units", speed: "Custom Brand Marking", power: "CO2 100W" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/sections/factory.png')] bg-cover bg-center grayscale scale-110"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-green-500 mb-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-700">/</span>
            <span>Manufacturing Profile</span>
          </nav>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter italic leading-none">
            Integrated<br/>
            <span className="text-green-600">Infrastructure</span>
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
            Jaxbin Ecoware operates integrated processing facilities designed for industrial scale, clinical-grade hygiene, and transparent quality control.
          </p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 01 / Factory Hub</span>
            <h2 className="text-6xl font-black mb-10 text-slate-900 tracking-tighter uppercase italic leading-[0.9]">8,000 m²<br/>Scale Center</h2>
            <div className="space-y-8 text-slate-500 leading-relaxed text-lg font-medium">
              <p className="text-slate-900 font-black italic border-l-4 border-green-600 pl-6">Professional material segregation for zero-contamination manufacturing.</p>
              <p>Our Fujian processing hub maintains dedicated zones for wood, bamboo, and sugarcane bagasse substrates. The facility is equipped with redundant energy systems ensuring uninterrupted high-volume B2B supply chains.</p>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                 <div>
                    <p className="text-5xl font-black text-green-600 mb-2 tracking-tighter">1.2B+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Annual Unit Throughput</p>
                 </div>
                 <div>
                    <p className="text-5xl font-black text-green-600 mb-2 tracking-tighter">20+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Global Supply Arcs</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden relative border border-slate-200 shadow-2xl group shadow-green-900/5">
             <img src="/assets/images/sections/factory.png" alt="Jaxbin factory facility" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent"></div>
             <div className="absolute bottom-16 left-16">
                <span className="bg-white/90 backdrop-blur-md text-green-900 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-green-100">Certified Facility</span>
             </div>
          </div>
        </div>
      </section>

      {/* Machine Matrix & Hardware Specs (NEW Visuals) */}
      <section className="py-32 bg-slate-950 text-white px-6 relative overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-green-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <div className="max-w-xl">
                <span className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 02 / Hardware Portfolio</span>
                <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">Industrial<br/>Hardware Matrix</h2>
             </div>
             <div className="p-8 bg-white/5 backdrop-blur-xl rounded-[30px] border border-white/10 text-center flex-grow md:flex-grow-0">
                <p className="text-4xl font-black mb-2 text-green-500 tracking-tighter">ISO 9001</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Management Tier</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {machines.map((m, idx) => (
              <div key={idx} className="p-12 border border-white/10 rounded-[50px] bg-white/[0.02] hover:bg-green-600 transition-all duration-700 group flex flex-col justify-between aspect-square">
                <div>
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white mb-8 transition-colors">{m.type}</p>
                   <p className="text-5xl font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform">{m.count}</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 italic mb-1 group-hover:text-green-100">{m.speed}</p>
                   <p className="text-[10px] font-black text-green-500 uppercase tracking-widest group-hover:text-white">{m.power}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Transparency */}
      <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Operational Protocol</span>
            <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">The Path to Precision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden group hover:translate-y-[-10px] transition-all duration-500">
                <div className="text-[100px] font-black text-slate-50 absolute right-[-20px] bottom-[-40px] group-hover:text-green-50 transition-colors select-none italic">{idx + 1}</div>
                <h3 className="font-black text-slate-900 mb-8 text-2xl relative z-10 tracking-tight uppercase leading-none">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Sourcing Infrastructure */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-5xl font-black text-slate-950 mb-12 tracking-tighter uppercase italic leading-[0.9]">Supply Chain<br/>Infrastructure</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left mb-24">
              <div className="p-12 bg-slate-50 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-shadow">
                 <div className="text-4xl mb-8">📄</div>
                 <h4 className="font-black text-sm uppercase tracking-widest text-green-700 mb-6">Documentation</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">Unified handling of FSC chains, Phytosanitary certification, and customs documentation per shipping arc.</p>
              </div>
              <div className="p-12 bg-slate-50 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-shadow">
                 <div className="text-4xl mb-8">🌡️</div>
                 <h4 className="font-black text-sm uppercase tracking-widest text-green-700 mb-6">Environment</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">Climate-controlled inventory hub ensuring moisture stability and fiber integrity before dispatch.</p>
              </div>
              <div className="p-12 bg-slate-50 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-shadow">
                 <div className="text-4xl mb-8">🚢</div>
                 <h4 className="font-black text-sm uppercase tracking-widest text-green-700 mb-6">Prime Ports</h4>
                 <p className="text-slate-500 font-medium leading-relaxed">Optimized proximity to Xiamen and Fuzhou deep-water terminals for rapid high-volume distribution.</p>
              </div>
           </div>
           <Link href="/contact" className="inline-flex items-center gap-6 bg-green-600 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-green-700 transition shadow-2xl shadow-green-200/50 group">
            DOWNLOAD CAPACITY REPORT
            <span className="group-hover:translate-x-3 transition-transform italic tracking-widest">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
