import Link from 'next/link';
import data from '../data/products.json';
import PageHero from '@/components/PageHero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 01: Standardized Hero */}
      <PageHero 
        title="Sustaining Global Scale"
        subtitle="High-precision manufacturing of bamboo, birch, and bagasse substrates for the world's most demanding foodservice supply chains."
        image="/assets/images/sections/hero.png"
      />

      {/* SECTION 02: Impact Calculator (ESG Focus) */}
      <section className="py-32 bg-slate-950 text-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">ESG Analytics</span>
              <h2 className="text-h2 tracking-tighter mb-10 uppercase italic leading-none">The ESG<br/>Advantage</h2>
              <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">
                Replacing conventional PS/PP polymers with Jaxbin renewable substrates is a measurable KPI for B2B sustainability reporting.
              </p>
              <div className="space-y-4">
                {[
                  { label: "CO2 Sequestration", val: "7.8 tons", desc: "Carbon capture inherent in birch/bamboo fiber." },
                  { label: "Plastic Diverted", val: "2,400 kg", desc: "Total elimination of virgin petroleum polymers." },
                  { label: "Lifecycle Gain", val: "90 Days", desc: "Return to biomass vs. 400+ years for plastic." }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[30px] group hover:bg-green-600/10 transition-all">
                    <div className="flex justify-between items-start mb-4">
                       <span className="font-black text-slate-500 uppercase text-[10px] tracking-widest">{stat.label}</span>
                       <p className="text-3xl font-black text-green-500">{stat.val}</p>
                    </div>
                    <p className="text-sm text-slate-500 leading-tight group-hover:text-slate-300 transition-colors">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 h-full">
               <div className="bg-white/[0.03] backdrop-blur-2xl p-16 rounded-[60px] border border-white/10 shadow-2xl h-full flex flex-col justify-center text-center">
                  <h3 className="text-white font-black text-h3 tracking-tight italic mb-8">Performance Matrix</h3>
                  <div className="aspect-video bg-green-900/10 rounded-3xl border border-green-500/20 flex items-center justify-center">
                     <span className="text-green-500 text-xs font-black uppercase tracking-widest">Real-time Comparative Data Visualization</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Product Portfolio (Direct Links) */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 tracking-tighter uppercase italic mb-24">The Core Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.categories.map((cat, i) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className="group relative overflow-hidden rounded-[50px] aspect-[4/5] bg-slate-100 border border-slate-200">
                <img src={`/assets/images/sections/${cat.id}.png`} alt={cat.name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" onerror="this.src='/assets/images/sections/hero.png'"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                  <h3 className="text-h4 text-white mb-6 tracking-tighter uppercase italic">{cat.name}</h3>
                  <div className="h-12 w-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-green-600 transition-all">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Global Sourcing Infrastructure */}
      <section className="py-40 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { t: "8,000 m² Hub", d: "Integrated material segregation and BRC processing.", i: "🏗️" },
              { t: "1.2B Annual Cap", d: "Mass-scale throughput with redundant energy systems.", i: "🏭" },
              { t: "Clinical QC", d: "12-point protocol: microbial, moisture, and finish audits.", i: "🔬" },
              { t: "Export Arcs", d: "Direct factory-to-port logistics for global supply speed.", i: "🚢" }
            ].map((box, i) => (
              <div key={i} className="group p-10 bg-white rounded-[40px] border border-slate-200 hover:bg-slate-950 transition-all duration-700">
                <div className="text-4xl mb-8">{box.i}</div>
                <h3 className="text-h4 text-slate-900 group-hover:text-white transition-colors">{box.t}</h3>
                <p className="text-slate-500 font-medium group-hover:text-slate-400 transition-colors">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: Final Conversion */}
      <section className="py-40 px-6 text-center bg-green-600 relative overflow-hidden">
         <div className="max-w-5xl mx-auto text-white relative z-10">
            <h2 className="text-h1 tracking-tighter uppercase italic mb-12">Scale Your<br/>Sustainability</h2>
            <Link href="/contact" className="inline-flex items-center gap-8 bg-slate-950 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group uppercase tracking-widest">
               INITIATE B2B SOURCING PROJECT →
            </Link>
         </div>
      </section>
    </main>
  );
}
