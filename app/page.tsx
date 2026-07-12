import Link from 'next/link';
import products from '../data/products.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - High-End Aesthetic */}
      <section className="relative h-[95vh] flex items-center justify-center text-white bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[url('/assets/images/sections/hero.png')] bg-cover bg-center scale-100 transition-transform duration-[10000ms] hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <nav className="flex justify-center items-center gap-6 mb-10">
            <span className="h-[1px] w-12 bg-green-500/50"></span>
            <span className="text-green-500 font-black uppercase tracking-[0.5em] text-[11px]">ISO 9001:2015 Certified B2B Manufacturer</span>
            <span className="h-[1px] w-12 bg-green-500/50"></span>
          </nav>
          <h1 className="text-7xl md:text-[120px] font-black mb-10 tracking-tighter italic leading-[0.85] uppercase">
            Sustaining<br/>
            <span className="text-green-600">Global Scale</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-16 text-slate-200 font-medium max-w-4xl mx-auto leading-tight">
            High-precision manufacturing of bamboo, birch, and bagasse substrates for the world's most demanding foodservice supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-16 py-7 rounded-[40px] font-black text-xl transition-all shadow-2xl shadow-green-900/60 uppercase tracking-widest hover:scale-105 active:scale-95">
              Request Project Audit
            </Link>
            <Link href="/products" className="bg-white/5 backdrop-blur-xl text-white border border-white/30 hover:bg-white hover:text-slate-900 px-16 py-7 rounded-[40px] font-black text-xl transition-all uppercase tracking-widest hover:scale-105 active:scale-95">
              Explore Substrates
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Scroll for Intelligence</span>
           <div className="w-px h-12 bg-gradient-to-b from-green-500 to-transparent"></div>
        </div>
      </section>

      {/* Impact Calculator & ESG Benchmarking (MUSCULAR) */}
      <section className="py-40 bg-slate-950 text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600/10 blur-[200px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">ESG Analytics / Sector Audit</span>
              <h2 className="text-6xl font-black tracking-tighter mb-10 uppercase italic leading-none">The ESG<br/>Advantage</h2>
              <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">
                Replacing conventional PS/PP polymers with Jaxbin renewable substrates isn't just a material swap—it's a measurable ESG KPI. Our B2B partners use this data for annual sustainability reporting.
              </p>
              <div className="space-y-4">
                {[
                  { label: "CO2 Sequestration", val: "7.8 tons", unit: "per million units", desc: "Biological carbon capture inherent in birch/bamboo fiber." },
                  { label: "Plastic Diverted", val: "2,400 kg", unit: "per million units", desc: "Total elimination of virgin petroleum-based polymers." },
                  { label: "Lifecycle Gain", val: "90 Days", unit: "composting velocity", desc: "Return to biomass vs. 400+ years for plastic degradation." }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[30px] group hover:bg-green-600/10 hover:border-green-500/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <span className="font-black text-slate-500 uppercase text-[10px] tracking-widest">{stat.label}</span>
                       <p className="text-4xl font-black text-green-500">{stat.val}</p>
                    </div>
                    <p className="text-[11px] text-slate-300 font-bold uppercase mb-4 tracking-tighter">{stat.unit}</p>
                    <p className="text-sm text-slate-500 leading-tight group-hover:text-slate-300 transition-colors">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
               <div className="bg-white/[0.03] backdrop-blur-2xl p-16 rounded-[60px] border border-white/10 shadow-2xl h-full flex flex-col">
                  <div className="flex justify-between items-center mb-16">
                     <h3 className="text-white font-black text-3xl tracking-tight italic">Benchmarking Performance</h3>
                     <span className="bg-green-600/20 text-green-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/30">Live Market Data</span>
                  </div>
                  <div className="flex-grow flex items-end justify-between gap-6 pb-12 relative min-h-[400px]">
                    {/* Visual Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-10">
                       {[0, 1, 2, 3, 4].map(l => <div key={l} className="h-px bg-white w-full"></div>)}
                    </div>
                    {[65, 90, 55, 100, 75, 85].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-6 group cursor-pointer relative z-10">
                        <div className="w-full bg-slate-800 rounded-2xl overflow-hidden h-full min-h-[200px] flex items-end">
                           <div style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-green-700 to-green-400 group-hover:from-green-500 group-hover:to-green-300 transition-all duration-700"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">KPI-{i+1}</span>
                        {/* Tooltip */}
                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-950 px-4 py-2 rounded-xl text-xs font-black shadow-2xl">
                           +{h}% Gain
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-12 border-t border-white/5 flex justify-between items-center">
                     <p className="text-slate-500 text-xs italic font-medium">Comparison: Jaxbin Professional Series vs. Industry PS/PP Averages.</p>
                     <button className="text-green-500 font-black text-[10px] uppercase tracking-[0.2em] hover:text-white transition">Download ESG Sheet</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Architecture (The 7 Categories) */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Substrate Specialization</span>
              <h2 className="text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">The Core<br/>Portfolio</h2>
            </div>
            <p className="text-2xl text-slate-500 font-medium max-w-md leading-tight mb-2">
              Deep-inventory manufacturing for 7 critical B2B foodservice segments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { id: 'cutlery', name: 'Professional Cutlery', img: '/assets/images/sections/cutlery.png', skus: "125+ Stock SKUs" },
              { id: 'disposable-tableware', name: 'Plates & Serving', img: '/assets/images/sections/plates-bowls-real.png', skus: "85+ Stock SKUs" },
              { id: 'food-container', name: 'Food Containers', img: '/assets/images/sections/food-containers-real.png', skus: "210+ Stock SKUs" },
              { id: 'skewers-picks', name: 'Skewers & Picks', img: '/assets/images/sections/skewers-picks-real.png', skus: "450+ Stock SKUs" },
              { id: 'stirrers', name: 'Stirrers & Sticks', img: '/assets/images/sections/stirrers-sticks-real.png', skus: "60+ Stock SKUs" },
              { id: 'straws', name: 'Eco Straws', img: '/assets/images/sections/straws-real.png', skus: "40+ Stock SKUs" },
              { id: 'ice-cream-stick', name: 'Ice Cream Sticks', img: '/assets/images/sections/sticks.png', skus: "High-Precision A-Grade" }
            ].map((cat, i) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className={`group relative overflow-hidden rounded-[50px] aspect-[4/5] bg-slate-100 border border-slate-200 transition-all duration-700 hover:shadow-2xl hover:shadow-green-900/10 ${i === 3 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}>
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                  <p className="text-green-500 font-black text-[11px] uppercase tracking-[0.3em] mb-4">{cat.skus}</p>
                  <h3 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase italic">{cat.name}</h3>
                  <div className="h-16 w-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-green-600 group-hover:border-green-500 transition-all group-hover:scale-110">
                    <span className="text-2xl font-black">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution Arcs (LOGISTICS MUSCLE) */}
      <section className="py-40 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-32">
               <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Unified B2B Logistics</span>
               <h2 className="text-7xl font-black tracking-tighter uppercase italic mb-10 leading-[0.85]">Factory-to-Port<br/>Unified Speed</h2>
               <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                 Leveraging direct proximity to Xiamen and Fuzhou deep-water terminals. Unified documentation, FSC chain-of-custody tracking, and real-time container visibility.
               </p>
            </div>
            <div className="relative aspect-[21/9] bg-white/[0.02] rounded-[80px] border border-white/10 flex items-center justify-center group overflow-hidden shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/map.png')] opacity-20 scale-[2] grayscale invert"></div>
                  {/* Shipping Centers */}
                  <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping left-[75%] top-[45%] shadow-[0_0_40px_rgba(34,197,94,1)]"></div>
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full left-[75%] top-[45%]"></div>
                  {/* Delivery Nodes */}
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[20%] top-[35%] opacity-50"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[45%] top-[25%] opacity-50"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[15%] top-[65%] opacity-50"></div>
                  {/* Shipping Arcs */}
                  <svg className="absolute inset-0 w-full h-full opacity-40">
                     <path d="M 750,450 Q 400,150 200,350" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_10s_linear_infinite]" />
                     <path d="M 750,450 Q 600,600 150,650" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_15s_linear_infinite]" />
                     <path d="M 750,450 Q 800,200 900,300" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="8,8" className="animate-[dash_12s_linear_infinite]" />
                  </svg>
               </div>
               <div className="absolute bottom-12 left-16 right-16 flex justify-between items-center">
                  <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
                     <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Fuzhou Port</span>
                     <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Xiamen Port</span>
                  </div>
                  <span className="text-green-500 text-[11px] font-black uppercase tracking-[0.3em] bg-green-500/10 px-6 py-2 rounded-full border border-green-500/20">Digital Export Control</span>
               </div>
            </div>
         </div>
      </section>

      {/* Global Sourcing Infrastructure (Clinical B2B Tone) */}
      <section className="py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { t: "8,000 m² Hub", d: "Climate-controlled material segregation and BRC-standard processing.", i: "🏗️" },
              { t: "1.2B Unit Throughput", d: "Mass-scale capacity with redundant energy systems for supply security.", i: "🏭" },
              { t: "Clinical QC Tier", d: "12-point protocol: microbial, moisture, strength, and finish audits.", i: "🔬" },
              { t: "OEM Strategic Cell", d: "Bespoke development from technical drawing to retail-ready cartons.", i: "🏷️" }
            ].map((box, i) => (
              <div key={i} className="group p-12 bg-slate-50 rounded-[60px] border border-slate-100 hover:bg-slate-950 transition-all duration-700 hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">{box.i}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic group-hover:text-white transition-colors leading-none">{box.t}</h3>
                <p className="text-slate-500 text-base font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-40 px-6 text-center bg-green-600 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/assets/images/sections/factory.png')] bg-cover opacity-10 grayscale"></div>
         <div className="max-w-5xl mx-auto text-white relative z-10">
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase italic mb-12 leading-none">Scale Your<br/>Sustainability</h2>
            <p className="text-2xl text-green-50 font-medium mb-20 leading-relaxed max-w-3xl mx-auto">
               Engage with a high-precision manufacturer that masters the technical complexities of professional eco-ware supply chains.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group uppercase tracking-widest">
               INITIATE B2B SOURCING
               <span className="group-hover:translate-x-4 transition-transform italic tracking-widest font-black">→</span>
            </Link>
         </div>
      </section>
    </main>
  );
}
