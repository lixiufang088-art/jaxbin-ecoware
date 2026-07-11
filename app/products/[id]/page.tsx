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
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic">
            {category.name.split(' ')[0]}<br/>
            <span className="text-green-600">{category.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium mb-12">
            Discover our high-performance {category.name.toLowerCase()} collection. Engineered for professional foodservice, delivery, and retail environments with zero plastic waste.
          </p>
          <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
            <div className="flex items-center gap-3">
               <span className="text-2xl">🍃</span>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Plastic-Free</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-2xl">♻️</span>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Compostable</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-2xl">🌳</span>
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">FSC Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped High-Density Content Loop */}
      {categoryItems.map((item, idx) => (
        <div key={idx}>
          {/* 屏2: Material Science */}
          <section className="py-24 bg-green-50 border-b border-green-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 02 / Material Science</span>
                  <h2 className="text-4xl font-black text-green-950 mb-8 tracking-tight">The Science of {item.technical_specs?.material}</h2>
                  <p className="text-green-900/80 leading-relaxed text-xl font-medium mb-10">
                    {item.material_science}
                  </p>
                  <div className="p-8 bg-white/50 backdrop-blur rounded-3xl border border-green-200/50">
                     <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                        Carbon Footprint Impact
                     </h4>
                     <p className="text-green-800 italic">{item.carbon_footprint}</p>
                  </div>
               </div>
               <div className="aspect-square bg-white rounded-[40px] overflow-hidden relative shadow-2xl shadow-green-900/10 group">
                  <img 
                    src={getProductImage(item.marketing.title)} 
                    alt={item.marketing.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent"></div>
               </div>
            </div>
          </section>

          {/* 屏3: Technical & Logistics Matrix */}
          <section className="py-32 bg-white">
             <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                   <div className="max-w-2xl">
                      <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 03 / Logistics Matrix</span>
                      <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">{item.marketing.title}</h2>
                   </div>
                   <div className="flex gap-4">
                      {item.marketing.benefits.map((b: string) => (
                        <span key={b} className="bg-slate-950 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase">{b}</span>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                   {/* Physical Specs */}
                   <div className="lg:col-span-2 grid grid-cols-2 gap-8 p-12 bg-slate-50 rounded-[40px] border border-slate-100">
                      <div>
                         <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Substrate Material</p>
                         <p className="text-slate-900 font-bold text-xl">{item.technical_specs?.material || "Standard"}</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Precision Dimensions</p>
                         <p className="text-slate-900 font-bold text-xl">{item.technical_specs?.dimensions || "Customizable"}</p>
                      </div>
                      {item.technical_specs?.moisture && (
                        <div>
                           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Moisture Control</p>
                           <p className="text-slate-900 font-bold text-xl">{item.technical_specs.moisture}</p>
                        </div>
                      )}
                      {item.technical_specs?.surface && (
                        <div>
                           <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Surface Finish</p>
                           <p className="text-slate-900 font-bold text-xl">{item.technical_specs.surface}</p>
                        </div>
                      )}
                   </div>

                   {/* Logistics Matrix */}
                   <div className="p-12 bg-green-900 text-white rounded-[40px] shadow-2xl shadow-green-900/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <span className="text-9xl font-black">📦</span>
                      </div>
                      <h4 className="font-black text-xs uppercase tracking-widest mb-10 flex items-center gap-3">
                         <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                         Export Matrix
                      </h4>
                      <div className="space-y-8 relative z-10">
                         <div className="flex justify-between border-b border-white/10 pb-4">
                            <span className="text-green-400 font-bold text-xs uppercase">20GP Capacity</span>
                            <span className="font-black text-lg">{item.logistics_matrix?.["20GP"] || "900 ctns"}</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-4">
                            <span className="text-green-400 font-bold text-xs uppercase">40HQ Capacity</span>
                            <span className="font-black text-lg">{item.logistics_matrix?.["40HQ"] || "2100 ctns"}</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-green-400 font-bold text-xs uppercase">Standard Packing</span>
                            <span className="font-black text-lg text-right">{item.logistics_matrix?.packing || "Bulk Export"}</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 屏4: QC Protocol */}
          <section className="py-32 bg-slate-50 border-y border-slate-100">
             <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                   <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 04 / Quality Control</span>
                   <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">The 12-Point QC Protocol</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                   {[
                     { n: "01", t: "Sourcing", i: "🌲" }, { n: "02", t: "Moisture", i: "💧" }, 
                     { n: "03", t: "Sanding", i: "✨" }, { n: "04", t: "Dimensions", i: "📏" },
                     { n: "05", t: "Strength", i: "💪" }, { n: "06", t: "Microbial", i: "🔬" },
                     { n: "07", t: "Color", i: "🎨" }, { n: "08", t: "Count", i: "🔢" },
                     { n: "09", t: "Dust-Free", i: "💨" }, { n: "10", t: "Seal", i: "🔒" },
                     { n: "11", t: "Labels", i: "🏷️" }, { n: "12", t: "Loading", i: "🚢" }
                   ].map((qc) => (
                     <div key={qc.n} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-green-500 transition-colors group">
                        <div className="text-xs font-black text-slate-300 mb-3 group-hover:text-green-600">{qc.n}</div>
                        <div className="text-3xl mb-3">{qc.i}</div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">{qc.t}</p>
                     </div>
                   ))}
                </div>
                <div className="mt-16 p-10 bg-white rounded-3xl border border-slate-200 max-w-4xl mx-auto">
                   <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-green-600 rounded-full"></span>
                      Category Protocol Highlights
                   </h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.qc_protocol?.map((qc: string, i: number) => (
                        <li key={i} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                           <span className="text-green-600">✓</span> {qc}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </section>

          {/* 屏5: OEM/ODM Packaging & Customization */}
          <section className="py-32 bg-white">
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 aspect-[4/3] bg-slate-100 rounded-[40px] overflow-hidden relative border border-slate-200 group">
                   <img src="/assets/images/sections/oem.png" alt="OEM Packaging" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="order-1 lg:order-2">
                   <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Section 05 / OEM & Supply Chain</span>
                   <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">Packaging & Brand Options</h2>
                   <div className="space-y-8 mb-12">
                      {item.oem_capabilities?.customization.map((c: string) => (
                        <div key={c} className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <span className="text-green-600">★</span>
                           </div>
                           <p className="font-bold text-slate-800 uppercase tracking-widest text-sm">{c}</p>
                        </div>
                      ))}
                   </div>
                   <Link href="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-green-700 transition shadow-2xl shadow-green-200/50 group w-full justify-center">
                      GET RFQ & CUSTOM SAMPLES
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                   </Link>
                </div>
             </div>
          </section>
        </div>
      ))}

      {/* Global Standards Banner */}
      <section className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-20">
          <div className="max-w-xl">
             <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase italic">Compliance & Certification</h2>
             <p className="text-slate-400 font-medium text-lg leading-relaxed">
               All products are manufactured under ISO 9001 standards and meet direct food-contact safety regulations for US, EU, and Asian markets.
             </p>
          </div>
          <div className="flex flex-wrap gap-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             {item.compliance?.certifications.map((c: string) => (
               <span key={c} className="text-4xl font-black tracking-widest text-white border-2 border-white px-6 py-2 italic">{c}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-slate-950 text-white py-32 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 tracking-tight text-white uppercase italic">Explore Other Professional Substrates</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-12 py-5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:border-green-500 hover:text-white transition-all font-black text-[10px] tracking-widest uppercase">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
