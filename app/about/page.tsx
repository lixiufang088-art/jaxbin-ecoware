import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  const steps = [
    { title: "Sourcing", desc: "Selecting premium birch, bamboo, and fiber substrates from certified sustainable sources." },
    { title: "Treatment", desc: "Professional kiln-drying to maintain moisture levels between 8% - 12% for maximum stability." },
    { title: "Shaping", desc: "Precision molding and die-cutting to match technical drawings." },
    { title: "Polishing", desc: "Triple-polished surface finishing to ensure a smooth, burr-free experience." },
    { title: "Clinical QC", desc: "Multi-point quality checks for dimensions and cleanliness before final export packing." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Integrated Infrastructure"
        subtitle="Integrated processing facilities designed for industrial scale, clinical-grade hygiene, and transparent quality control."
        image="/assets/images/sections/factory.png"
      />

      {/* Section 02: Infrastructure Focus */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 02 / Infrastructure</span>
            <h2 className="text-h2 tracking-tighter uppercase italic leading-[0.9]">8,000 m² Scale Center</h2>
            <div className="space-y-8 text-slate-500 leading-relaxed text-lg font-medium mt-10">
              <p className="text-slate-900 font-black italic border-l-4 border-green-600 pl-6">Professional material segregation for zero-contamination manufacturing.</p>
              <p>Our Fujian processing hub maintains dedicated zones for wood, bamboo, and sugarcane substrates. The facility is equipped with redundant energy systems ensuring uninterrupted supply chains.</p>
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/factory.png" alt="Jaxbin factory facility" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* Section 03: Process Transparency */}
      <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Operational Protocol</span>
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
