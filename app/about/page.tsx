import Link from 'next/link';
import PageHero from '@/components/PageHero';

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
      <PageHero 
        title="Manufacturing Infrastructure"
        subtitle="Jaxbin Ecoware operates integrated processing facilities designed for industrial scale, clinical-grade hygiene, and transparent quality control."
        image="/assets/images/sections/factory.png"
      />

      {/* Section 02: Infrastructure Focus */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Section 02 / Integrated Hub</span>
            <h2 className="text-h2 tracking-tighter uppercase italic leading-[0.9]">8,000 m² Scale Center</h2>
            <div className="space-y-8 text-slate-500 leading-relaxed text-lg font-medium mt-10">
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
          <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/factory.png" alt="Jaxbin factory facility" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Section 03: Machine Matrix */}
      <section className="py-32 bg-slate-950 text-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <div className="max-w-xl">
                <span className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Hardware Matrix</span>
                <h2 className="text-h2 tracking-tighter uppercase italic leading-[0.9]">Industrial Hardware Portfolio</h2>
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

      {/* Section 04: Process Transparency */}
      <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 04 / Operational Protocol</span>
          <h2 className="text-h2 tracking-tighter uppercase italic">The Path to Precision</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="text-[100px] font-black text-slate-50 absolute right-[-20px] bottom-[-40px] select-none italic">{idx + 1}</div>
              <h3 className="font-bold text-slate-900 mb-6 text-xl relative z-10 uppercase tracking-tighter italic">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-40 px-6 text-center">
         <Link href="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-green-600 transition-all shadow-2xl group">
            DOWNLOAD CAPACITY REPORT →
         </Link>
      </section>
    </div>
  );
}
