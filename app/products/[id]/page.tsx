import Link from 'next/link';
import data from '../../../data/products.json';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find category
  const category = data.categories.find(cat => cat.id === id);
  
  if (!category) {
    notFound();
  }

  // Precise mapping for categories and specific items using real images
  const categoryImageMap: Record<string, string> = {
    'cutlery': '/assets/images/sections/cutlery.png',
    'disposable-tableware': '/assets/images/sections/plates-bowls-real.png',
    'food-container': '/assets/images/sections/food-containers-real.png',
    'skewers-picks': '/assets/images/sections/skewers-picks-real.png',
    'stirrers': '/assets/images/sections/stirrers-sticks-real.png',
    'straws': '/assets/images/sections/straws-real.png',
    'ice-cream-stick': '/assets/images/sections/sticks.png'
  };

  const getProductImage = (itemName: string) => {
    if (itemName.includes('Fork')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Spoon')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Knife')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Plate')) return '/assets/images/sections/plates.png';
    if (itemName.includes('Bowl')) return '/assets/images/sections/plates-bowls-real.png';
    if (itemName.includes('Container')) return '/assets/images/sections/food-containers-real.png';
    if (itemName.includes('Skewer') || itemName.includes('Pick')) return '/assets/images/sections/skewers-picks-real.png';
    if (itemName.includes('Stirrer')) return '/assets/images/sections/stirrers-sticks-real.png';
    if (itemName.includes('Straw')) return '/assets/images/sections/straws-real.png';
    if (itemName.includes('Stick')) return '/assets/images/sections/sticks.png';
    
    return categoryImageMap[id] || '/assets/images/sections/hero.png';
  };

  // Build items from product_pool
  const categoryItems = category.products.map(pId => ({
    id: pId,
    ...(data.product_pool as any)[pId]
  })).filter(item => item.marketing);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 01: High-Density Hero & Impact Lead */}
      <section className="bg-slate-950 text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={categoryImageMap[id]} className="w-full h-full object-cover blur-[120px] scale-150" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-green-500 mb-16">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-800">/</span>
            <Link href="/products" className="hover:text-white transition">Inventory</Link>
            <span className="text-slate-800">/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
             <div className="lg:col-span-8">
                <h1 className="text-7xl md:text-[140px] font-black mb-10 tracking-tighter italic leading-[0.8] uppercase">
                  {category.name.split(' ')[0]}<br/>
                  <span className="text-green-600">{category.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl leading-tight font-medium mb-12">
                  Integrated substrate manufacturing for global B2B procurement. Professional-grade performance with verified zero-plastic compostability.
                </p>
             </div>
             <div className="lg:col-span-4 border-l border-white/10 pl-12 pb-4">
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-6">Tier 01 Compliance</p>
                <div className="space-y-6">
                   {["FSC Chain-of-Custody", "FDA Food Contact Safe", "EN13432 Compostable", "ISO 9001:2015 QC"].map(t => (
                      <div key={t} className="flex items-center gap-4">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-xs font-bold text-slate-200 uppercase tracking-tighter">{t}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Material Comparison & Comparison Intelligence (NEW) */}
      <section className="py-40 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Material Intelligence Matrix</span>
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9]">Substrate<br/>Benchmarking</h2>
            </div>
            <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed mb-2">
              Choosing the correct substrate for your application: physical rigidity vs. thermal tolerance.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[60px] shadow-2xl shadow-slate-200">
             <table className="w-full border-collapse bg-white text-left">
                <thead>
                   <tr className="bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                      <th className="p-12 border-r border-white/5">Technical Parameter</th>
                      <th className="p-12 border-r border-white/5">Birch Substrate</th>
                      <th className="p-12 border-r border-white/5">Bamboo Substrate</th>
                      <th className="p-12">Bagasse Substrate</th>
                   </tr>
                </thead>
                <tbody className="text-base font-bold text-slate-600">
                   {[
                      ["Structural Rigidity", "High (Zero Flex)", "Extreme (Hardened)", "Medium (Flexible)"],
                      ["Thermal Limit", "Constant 100°C", "Constant 120°C", "-20°C to 120°C"],
                      ["Moisture Control", "8% - 12% (Kiln)", "Below 10% (Shield)", "Pulp Extraction"],
                      ["Compost Period", "Industrial: 90 Days", "Aerobic: 120 Days", "BPI: 60-90 Days"],
                      ["Surface Audit", "Triple-Sanded (600+)", "Carnauba Wax Seal", "Molded Smooth"]
                   ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 group hover:bg-green-50/50 transition-colors">
                         <td className="p-10 border-r border-slate-50 text-slate-400 uppercase tracking-widest text-[11px] font-black">{row[0]}</td>
                         <td className="p-10 border-r border-slate-50 text-slate-900 group-hover:text-green-700 transition-colors">{row[1]}</td>
                         <td className="p-10 border-r border-slate-50 text-slate-900 group-hover:text-green-700 transition-colors">{row[2]}</td>
                         <td className="p-10 text-slate-900 group-hover:text-green-700 transition-colors">{row[3]}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Grouped High-Density Content Loop */}
      {categoryItems.map((item, idx) => (
        <div key={idx} className="border-b border-slate-100 last:border-0">
          {/* SECTION 03: Material Science Deep-Dive */}
          <section className="py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
               <div className="lg:col-span-7">
                  <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block italic">Section 03 / The Science of {item.technical_specs?.material}</span>
                  <h2 className="text-7xl md:text-8xl font-black text-slate-950 mb-12 tracking-tighter uppercase italic leading-[0.85]">{item.marketing.title}</h2>
                  <p className="text-3xl text-slate-500 font-medium mb-16 leading-tight tracking-tight">
                    {item.material_science}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                     {item.marketing.benefits.map((b: string) => (
                        <div key={b} className="flex flex-col gap-6 p-10 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm hover:border-green-500 transition-all group">
                           <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 font-black">★</div>
                           <span className="text-sm font-black uppercase tracking-widest text-slate-800 leading-tight">{b}</span>
                        </div>
                     ))}
                  </div>
                  <div className="p-12 bg-green-950 rounded-[50px] shadow-[0_40px_100px_-20px_rgba(20,83,45,0.4)] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[80px] group-hover:bg-green-600/20 transition-all duration-700"></div>
                     <p className="text-[11px] font-black text-green-500 uppercase tracking-[0.4em] mb-6 block">Carbon Footprint Impact Audit</p>
                     <p className="text-white text-2xl font-bold italic leading-relaxed">"{item.carbon_footprint}"</p>
                  </div>
               </div>
               <div className="lg:col-span-5 aspect-[4/6] bg-slate-100 rounded-[80px] overflow-hidden relative shadow-2xl group border border-slate-200">
                  <img 
                    src={getProductImage(item.marketing.title)} 
                    alt={item.marketing.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 group-hover:rotate-1 grayscale-[0.2] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-950/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-16 left-16 bg-white/95 backdrop-blur-2xl p-8 rounded-[40px] border border-green-100 shadow-2xl">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-green-900 block mb-2">B2B Tier</span>
                     <p className="text-2xl font-black text-slate-900 italic tracking-tighter">Clinical Grade Substrate</p>
                  </div>
               </div>
            </div>
          </section>

          {/* SECTION 04: Technical Matrix & Logistics Muscle */}
          <section className="py-40 bg-slate-950 text-white px-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
             <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                   {/* Logistics Unit - High Contrast */}
                   <div className="lg:col-span-4 bg-green-600 p-16 rounded-[60px] text-white shadow-[0_40px_100px_-20px_rgba(22,163,74,0.3)] relative overflow-hidden group">
                      <div className="absolute bottom-[-10%] right-[-10%] text-[240px] font-black opacity-10 select-none italic group-hover:translate-x-[-10px] transition-transform duration-1000">UNIT</div>
                      <h4 className="text-green-950 font-black text-xs uppercase tracking-[0.5em] mb-16 block border-b border-green-500 pb-6">Supply Chain Matrix</h4>
                      <div className="space-y-16">
                         <div>
                            <p className="text-[11px] font-black text-green-200 uppercase tracking-widest mb-4">Export Inner Packing</p>
                            <p className="text-4xl font-black italic uppercase tracking-tighter">{item.logistics_matrix?.packing}</p>
                         </div>
                         <div className="grid grid-cols-2 gap-12">
                            <div>
                               <p className="text-[11px] font-black text-green-200 uppercase tracking-widest mb-4">20GP Load</p>
                               <p className="text-4xl font-black tracking-tighter">{item.logistics_matrix?.["20GP"]}</p>
                            </div>
                            <div>
                               <p className="text-[11px] font-black text-green-200 uppercase tracking-widest mb-4">40HQ Load</p>
                               <p className="text-4xl font-black tracking-tighter">{item.logistics_matrix?.["40HQ"]}</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Technical Protocol Matrix */}
                   <div className="lg:col-span-8 flex flex-col justify-center">
                      <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Section 04 / Quality Control Protocol</span>
                      <h3 className="text-6xl font-black mb-20 tracking-tighter uppercase italic leading-[0.9]">Clinical Quality<br/>Assurance Protocol</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                         {item.qc_protocol?.map((qc: string, i: number) => (
                           <div key={i} className="flex gap-10 group items-start">
                              <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-center font-black text-green-500 text-xl group-hover:bg-green-600 group-hover:text-white transition-all shadow-xl">
                                 {i < 9 ? `0${i + 1}` : i + 1}
                              </div>
                              <div>
                                 <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3 group-hover:text-green-400 transition-colors">Test Point {i+1}</p>
                                 <p className="text-lg font-bold text-slate-300 leading-tight group-hover:text-white transition-colors">{qc}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* SECTION 05: OEM & Private Label Capability */}
          <section className="py-40 bg-white px-6">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                   <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Section 05 / Strategic Development</span>
                   <h2 className="text-7xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.85]">Packaging &<br/>Custom Programs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   {[
                      { t: "Hot-Stamping Branding", d: "Zero-ink heat transfer logo application for wood/bamboo substrates.", i: "🏷️" },
                      { t: "Custom Sizing & Sets", d: "Bespoke length and thickness profiles matched to technical drawings.", i: "📐" },
                      { t: "Mixed Freight Ready", d: "Reinforced 5-layer export cartons optimized for seafreight stability.", i: "🚢" }
                   ].map((oem, i) => (
                      <div key={i} className="p-16 bg-slate-50 rounded-[60px] border border-slate-100 group hover:bg-slate-950 transition-all duration-700 hover:translate-y-[-10px] hover:shadow-2xl">
                         <div className="text-6xl mb-12 group-hover:scale-110 transition-transform duration-500">{oem.i}</div>
                         <h4 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic group-hover:text-white transition-colors">{oem.t}</h4>
                         <p className="text-slate-500 text-lg font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{oem.d}</p>
                      </div>
                   ))}
                </div>
                <div className="mt-32 flex justify-center">
                   <Link href="/contact" className="inline-flex items-center gap-8 bg-slate-950 text-white px-24 py-10 rounded-[50px] font-black text-3xl hover:bg-green-600 transition-all shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] group uppercase tracking-widest">
                      INITIATE B2B PROJECT
                      <span className="group-hover:translate-x-5 transition-transform italic tracking-widest font-black text-green-500 group-hover:text-white">→</span>
                   </Link>
                </div>
             </div>
          </section>
        </div>
      ))}

      {/* Global Standards Banner */}
      <section className="bg-slate-950 text-white py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-600/5 blur-[180px] rounded-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20 relative z-10">
          <div className="max-w-2xl">
             <h2 className="text-6xl font-black tracking-tighter mb-10 uppercase italic leading-[0.85]">Certified<br/>Export Compliance</h2>
             <p className="text-slate-400 font-medium text-2xl leading-relaxed">
               Jaxbin products undergo multi-stage auditing to meet BRC Global Standard for Food Safety, FSC material chains, and FDA/LFGB regulations for premium supply arcs.
             </p>
          </div>
          <div className="flex flex-wrap gap-12 justify-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-[2000ms]">
             {["FSC", "FDA", "LFGB", "BSCI", "BRC", "ISO9001"].map(c => (
               <span key={c} className="text-7xl font-black tracking-[0.2em] italic border-2 border-white px-8 py-3">{c}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-white py-40 px-6 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-24 tracking-tighter text-slate-950 uppercase italic">Explore Other Engineered Substrates</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-16 py-8 bg-slate-50 border border-slate-200 rounded-[35px] text-slate-400 hover:border-green-600 hover:text-green-700 transition-all font-black text-[13px] tracking-[0.4em] uppercase shadow-2xl shadow-slate-100">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
