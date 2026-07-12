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
      {/* 屏1: Page Hero & Marketing Lead */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={categoryImageMap[id]} className="w-full h-full object-cover blur-2xl scale-110" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-green-500 mb-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-700">/</span>
            <Link href="/products" className="hover:text-white transition">Products</Link>
            <span className="text-slate-700">/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter italic leading-none">
            {category.name.split(' ')[0]}<br/>
            <span className="text-green-600">{category.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium mb-12">
            Professional-grade {category.name.toLowerCase()} solutions engineered for high-volume B2B supply chains. Zero plastic. 100% Performance.
          </p>
          <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
            {["Plastic-Free", "Compostable", "FSC Certified", "FDA Approved"].map(t => (
               <div key={t} className="flex items-center gap-3">
                  <span className="text-green-600 text-lg">★</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{t}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 屏2: Material Comparison Table (NEW) */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 02 / Material Intelligence</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Substrate Comparison</h2>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full border-collapse bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50">
                <thead>
                   <tr className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest text-left">
                      <th className="p-8 border-r border-white/5">Parameter</th>
                      <th className="p-8 border-r border-white/5">Birch Wood</th>
                      <th className="p-8 border-r border-white/5">Moso Bamboo</th>
                      <th className="p-8">Sugarcane Bagasse</th>
                   </tr>
                </thead>
                <tbody className="text-sm font-bold text-slate-600">
                   {[
                      ["Structural Rigidity", "High (No Flex)", "Extreme (Hard)", "Medium (Semi-Rigid)"],
                      ["Temperature Range", "Up to 100°C", "Up to 120°C", "-20°C to 120°C"],
                      ["Moisture Control", "8% - 12%", "Below 10%", "N/A (Fiber Pulp)"],
                      ["Composting Time", "90 Days", "120 Days", "60-90 Days"],
                      ["Surface Texture", "Triple-Polished", "Natural Grain / Wax", "Smooth Internal"]
                   ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                         <td className="p-8 border-r border-slate-50 text-slate-400 uppercase tracking-widest text-[10px]">{row[0]}</td>
                         <td className="p-8 border-r border-slate-50 text-slate-900">{row[1]}</td>
                         <td className="p-8 border-r border-slate-50 text-slate-900">{row[2]}</td>
                         <td className="p-8 text-slate-900">{row[3]}</td>
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
          {/* 屏3: Material Science & Branding */}
          <section className="py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div>
                  <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Product Deep-Dive</span>
                  <h2 className="text-6xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-[0.9]">{item.marketing.title}</h2>
                  <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">
                    {item.material_science}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                     {item.marketing.benefits.map((b: string) => (
                        <div key={b} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                           <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                           <span className="text-xs font-black uppercase tracking-widest text-slate-700">{b}</span>
                        </div>
                     ))}
                  </div>
                  <div className="p-10 bg-green-950 rounded-[40px] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/10 blur-3xl group-hover:bg-green-600/20 transition-all"></div>
                     <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-4">Carbon Impact Statement</p>
                     <p className="text-white text-lg font-bold italic leading-relaxed">"{item.carbon_footprint}"</p>
                  </div>
               </div>
               <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden relative shadow-2xl group">
                  <img 
                    src={getProductImage(item.marketing.title)} 
                    alt={item.marketing.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-950/20 to-transparent"></div>
                  <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-green-100">
                     <span className="text-[10px] font-black uppercase tracking-widest text-green-900">B2B Professional Grade</span>
                  </div>
               </div>
            </div>
          </section>

          {/* 屏4: Technical & Logistics Matrix */}
          <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
             <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                   {/* Logistics Unit */}
                   <div className="lg:col-span-4 bg-slate-950 p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute bottom-[-50px] right-[-50px] text-[200px] font-black opacity-5 select-none">BOX</div>
                      <h4 className="text-green-500 font-black text-xs uppercase tracking-[0.3em] mb-12">Supply Chain Matrix</h4>
                      <div className="space-y-12">
                         <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Inner Packing</p>
                            <p className="text-2xl font-black italic uppercase">{item.logistics_matrix?.packing}</p>
                         </div>
                         <div className="grid grid-cols-2 gap-8">
                            <div>
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">20GP Qty</p>
                               <p className="text-xl font-black text-green-400">{item.logistics_matrix?.["20GP"]}</p>
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">40HQ Qty</p>
                               <p className="text-xl font-black text-green-400">{item.logistics_matrix?.["40HQ"]}</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Technical Protocol */}
                   <div className="lg:col-span-8 flex flex-col justify-center">
                      <h3 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic border-l-8 border-green-600 pl-10">Quality Protocol Summary</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                         {item.qc_protocol?.map((qc: string, i: number) => (
                           <div key={i} className="flex gap-6 group">
                              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-green-600 border border-slate-200 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                                 {i + 1}
                              </div>
                              <p className="text-sm font-bold text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors uppercase tracking-tight">{qc}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 屏5: OEM Packaging Gallery (Simplified for visual impact) */}
          <section className="py-32 bg-white px-6">
             <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                   <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 05 / OEM Capability</span>
                   <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">Packaging & Private Label</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                      { t: "Hot-Stamping Logo", d: "High-precision heat transfer for clear wood branding.", i: "🏷️" },
                      { t: "Custom Pack Formats", d: "Sleeved, wrapped, or retail-ready display boxes.", i: "📦" },
                      { t: "Unified Export Packing", d: "Reinforced 5-layer cartons for global ocean freight.", i: "🚢" }
                   ].map((oem, i) => (
                      <div key={i} className="p-12 bg-slate-50 rounded-[50px] border border-slate-100 group hover:bg-green-600 transition-all duration-700">
                         <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{oem.i}</div>
                         <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic group-hover:text-white">{oem.t}</h4>
                         <p className="text-slate-500 font-medium leading-relaxed group-hover:text-green-50">{oem.d}</p>
                      </div>
                   ))}
                </div>
                <div className="mt-20 flex justify-center">
                   <Link href="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-20 py-8 rounded-[40px] font-black text-2xl hover:bg-green-600 transition shadow-2xl shadow-slate-300 group">
                      START B2B PROJECT
                      <span className="group-hover:translate-x-3 transition-transform italic tracking-widest font-black">→</span>
                   </Link>
                </div>
             </div>
          </section>
        </div>
      ))}

      {/* Global Standards Banner */}
      <section className="bg-slate-950 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
             <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase italic leading-none">Certified<br/>Export Compliance</h2>
             <p className="text-slate-400 font-medium text-xl leading-relaxed">
               Jaxbin products undergo multi-stage auditing to meet BRC Global, ISO 9001, and direct food-contact safety regulations (FDA/LFGB) for high-barrier global supply chains.
             </p>
          </div>
          <div className="flex flex-wrap gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {["FSC", "FDA", "LFGB", "BSCI", "BRC"].map(c => (
               <span key={c} className="text-6xl font-black tracking-widest italic">{c}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-slate-50 py-32 px-6 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter text-slate-900 uppercase italic">Explore Other Material Substrates</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-14 py-6 bg-white border border-slate-200 rounded-3xl text-slate-400 hover:border-green-600 hover:text-green-600 transition-all font-black text-xs tracking-[0.3em] uppercase shadow-lg shadow-slate-200/50">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
