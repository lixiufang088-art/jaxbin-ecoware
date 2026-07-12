import Link from 'next/link';
import data from '../data/products.json';
import PageHero from '@/components/PageHero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* SECTION 01: High-Density Hero (Single H1) */}
      <PageHero 
        title="Sustaining Global Scale"
        subtitle="Integrated manufacturing of bamboo, birch, and bagasse substrates for the world's most demanding high-volume supply chains. Since 2008."
        image="/assets/images/sections/hero.png"
      />

      {/* SECTION 02: Unified Logistics Arcs (NEW SVG MAP) */}
      <section className="py-40 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Global B2B Distribution</span>
            <h2 className="text-h2 tracking-tighter uppercase italic mb-12 leading-[0.85]">Unified Supply Arcs</h2>
            <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-medium mb-24 leading-relaxed">
              Leveraging direct proximity to Xiamen and Fuzhou deep-water terminals. Unified documentation, FSC chain-of-custody tracking, and real-time container visibility.
            </p>
            
            <div className="relative aspect-[21/9] bg-white/[0.02] rounded-[80px] border border-white/10 flex items-center justify-center group overflow-hidden shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/map.png')] opacity-20 scale-[2] grayscale invert"></div>
                  {/* Origin Points (Ping Animation) */}
                  <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping left-[75%] top-[45%]"></div>
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full left-[75%] top-[45%]"></div>
                  {/* Shipping Arcs SVG */}
                  <svg className="absolute inset-0 w-full h-full opacity-40">
                     <path d="M 750,225 Q 400,50 200,175" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_10s_linear_infinite]" />
                     <path d="M 750,225 Q 600,300 150,325" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_15s_linear_infinite]" />
                     <path d="M 750,225 Q 850,100 950,150" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_12s_linear_infinite]" />
                  </svg>
               </div>
               <div className="absolute bottom-12 left-16 right-16 flex justify-between items-center">
                  <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 uppercase">
                     <span>Fuzhou / Xiamen Port Direct</span>
                  </div>
                  <span className="text-green-500 text-[11px] font-black uppercase tracking-[0.3em] bg-green-500/10 px-6 py-2 rounded-full border border-green-500/20">Digital Export Control</span>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 03: Product Portfolio */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-h2 tracking-tighter uppercase italic mb-24">The Core Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className="group relative overflow-hidden rounded-[50px] aspect-[3/4] bg-slate-100 border border-slate-200">
                <img src={`/assets/images/sections/${cat.id}.png`} alt={cat.name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                  <h3 className="text-h4 text-white tracking-tighter uppercase italic">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: Factory Excellence */}
      <section className="py-40 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { t: "8,000 m² Hub", d: "Integrated material segregation and BRC processing.", i: "🏗️" },
              { t: "1.2B Unit Throughput", d: "Mass-scale capacity with redundant energy systems.", i: "🏭" },
              { t: "12-Point QC", d: "Clinical protocol: microbial, moisture, and finish audits.", i: "🔬" },
              { t: "Global Distribution", d: "Direct factory-to-port logistics for global supply speed.", i: "🚢" }
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
            <Link href="/contact" className="inline-flex items-center gap-8 bg-slate-950 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group uppercase tracking-widest no-underline">
               INITIATE B2B SOURCING PROJECT →
            </Link>
         </div>
      </section>
    </main>
  );
}
