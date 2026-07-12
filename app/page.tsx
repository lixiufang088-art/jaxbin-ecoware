import Link from 'next/link';
import products from '../data/products.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('/assets/images/sections/hero.png')] bg-cover bg-center scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/60" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <nav className="flex justify-center items-center gap-4 mb-8">
            <span className="h-px w-8 bg-green-500"></span>
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px]">Since 2008 / B2B Manufacturer</span>
            <span className="h-px w-8 bg-green-500"></span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic leading-[0.9]">
            THE FUTURE OF<br/>
            <span className="text-green-500">DISPOSABLES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Integrated manufacturing of professional-grade bamboo, birch wood, and sugarcane fiber tableware for global high-volume supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-black text-lg transition shadow-2xl shadow-green-900/40 uppercase tracking-widest">
              Get Factory Quote
            </Link>
            <Link href="/products" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-slate-900 px-12 py-6 rounded-2xl font-black text-lg transition uppercase tracking-widest">
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Calculator Section (NEW) */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Environmental Benchmarking</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase italic leading-none">Carbon Impact<br/>Calculator</h2>
              <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                Switching from traditional PS/PP plastics to Jaxbin bio-substrates provides measurable ESG gains. Calculate your annual reduction based on volume.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Plastic Waste Diverted", val: "2,400 kg", unit: "per million units" },
                  { label: "CO2 Emissions Reduced", val: "7,800 kg", unit: "carbon sequestered" },
                  { label: "Landfill Volume Saved", val: "14.5 m³", unit: "compressed volume" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-green-500 transition-colors">
                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">{stat.label}</span>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900">{stat.val}</p>
                      <p className="text-[10px] text-green-600 font-bold uppercase">{stat.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <h3 className="text-white font-black text-3xl mb-10 tracking-tight italic">Resource Recovery Matrix</h3>
               <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                  {/* Simulated Visual Graph */}
                  <div className="absolute inset-0 flex items-end justify-around px-8 pb-8 gap-4">
                    {[60, 85, 45, 95, 70].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="w-full bg-green-500 rounded-t-xl opacity-80 group hover:opacity-100 transition-all cursor-pointer relative">
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs">{h}% Gain</div>
                      </div>
                    ))}
                  </div>
               </div>
               <p className="text-slate-500 text-xs mt-10 italic">*Benchmarked against PS (Polystyrene) and virgin PP (Polypropylene) industry averages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories (Expanded to 7) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Supply Specialization</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">The Core<br/>Catalog</h2>
          </div>
          <p className="text-slate-500 font-medium max-w-md leading-relaxed">
            Consistent quality, predictable lead times, and certified materials across all seven major eco-disposable categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'cutlery', name: 'Professional Cutlery', img: '/assets/images/sections/cutlery.png', count: "12 SKUs" },
            { id: 'disposable-tableware', name: 'Plates & Serving', img: '/assets/images/sections/plates-bowls-real.png', count: "24 SKUs" },
            { id: 'food-container', name: 'Food Containers', img: '/assets/images/sections/food-containers-real.png', count: "18 SKUs" },
            { id: 'skewers-picks', name: 'Skewers & Picks', img: '/assets/images/sections/skewers-picks-real.png', count: "30+ SKUs" },
            { id: 'stirrers', name: 'Stirrers & Sticks', img: '/assets/images/sections/stirrers-sticks-real.png', count: "15 SKUs" },
            { id: 'straws', name: 'Eco Straws', img: '/assets/images/sections/straws-real.png', count: "10 SKUs" },
            { id: 'ice-cream-stick', name: 'Ice Cream Sticks', img: '/assets/images/sections/sticks.png', count: "12 SKUs" }
          ].map((cat) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="group relative overflow-hidden rounded-[40px] aspect-[4/5] bg-slate-100 border border-slate-200">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                <p className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-3">{cat.count}</p>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase italic">{cat.name}</h3>
                <div className="h-12 w-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-green-600 group-hover:border-green-500 transition-all">
                  <span className="text-xl font-bold">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Visual Logistics Section (NEW) */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <span className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Global B2B Distribution</span>
               <h2 className="text-6xl font-black tracking-tighter uppercase italic mb-8">World Class Logistics</h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                 Direct factory-to-port logistics from Fuzhou and Xiamen, ensuring rapid container loading and transparent export documentation.
               </p>
            </div>
            <div className="relative aspect-[21/9] bg-white/5 rounded-[60px] border border-white/10 flex items-center justify-center group overflow-hidden">
               {/* Simulated Map Visual */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/map.png')] opacity-20 scale-150"></div>
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping left-[75%] top-[45%] shadow-[0_0_20px_rgba(34,197,94,1)]"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[20%] top-[35%] opacity-50"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[45%] top-[25%] opacity-50"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full left-[15%] top-[65%] opacity-50"></div>
                  {/* Shipping Arcs */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                     <path d="M 750,450 Q 400,200 200,350" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                     <path d="M 750,450 Q 600,600 150,650" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                  </svg>
               </div>
               <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                  <span>Main Export Ports: Fuzhou / Xiamen</span>
                  <span className="text-green-500">Real-time Container Tracking Available</span>
               </div>
            </div>
         </div>
      </section>

      {/* Why Jaxbin (B2B Infrastructure) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { t: "8,000 m² Facility", d: "Integrated processing and climate-controlled storage.", i: "🏗️" },
              { t: "1.2B Annual Capacity", d: "Scaling with your brand's global volume requirements.", i: "🏭" },
              { t: "Clinical Quality", d: "12-point QC protocol for medical and food safety.", i: "🔬" },
              { t: "OEM Mastery", d: "Custom branding, sizing, and bespoke pack formats.", i: "🏷️" }
            ].map((box, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:bg-green-600 hover:border-green-500 transition-all duration-500">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{box.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic group-hover:text-white transition-colors">{box.t}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-green-50 transition-colors">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Sourcing CTA */}
      <section className="py-32 px-6 text-center bg-green-600">
         <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-10">Scale Your Sustainability</h2>
            <p className="text-xl text-green-50 font-medium mb-16 leading-relaxed">
               Partner with a high-precision manufacturer that understands the nuances of B2B procurement, compliance, and material innovation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-slate-950 text-white px-16 py-8 rounded-[30px] font-black text-2xl hover:bg-white hover:text-slate-950 transition shadow-2xl group">
               START SOURCING PROJECT
               <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
         </div>
      </section>
    </main>
  );
}
