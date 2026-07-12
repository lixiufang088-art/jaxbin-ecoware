import Link from 'next/link';
import data from '../../../data/products.json';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';

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
      {/* SECTION 01: Standardized PageHero (Single H1) */}
      <PageHero 
        title={`${category.name} Range`}
        subtitle={`Professional-grade ${category.name.toLowerCase()} solutions engineered for high-volume B2B supply chains. Verified zero-plastic performance.`}
        image={categoryImageMap[id]}
        breadcrumbs={[{ label: 'Inventory', href: '/products' }]}
      />

      {/* SECTION 02: Substrate Intelligence Matrix */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div>
              <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Material Intelligence</span>
              <h2 className="text-h2 tracking-tighter uppercase italic leading-[0.9]">Substrate<br/>Benchmarking</h2>
            </div>
            <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed mb-2">
              Deep comparison of material substrates for professional foodservice requirements.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[40px] shadow-2xl shadow-slate-200">
             <table className="w-full border-collapse bg-white text-left">
                <thead>
                   <tr className="bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                      <th className="p-10 border-r border-white/5">Technical Parameter</th>
                      <th className="p-10 border-r border-white/5">Birch Substrate</th>
                      <th className="p-10 border-r border-white/5">Moso Bamboo</th>
                      <th className="p-10">Bagasse Substrate</th>
                   </tr>
                </thead>
                <tbody className="text-sm font-bold text-slate-600">
                   {[
                      ["Structural Rigidity", "High (Zero Flex)", "Extreme (Hardened)", "Medium (Flexible)"],
                      ["Thermal Limit", "Constant 100°C", "Constant 120°C", "-20°C to 120°C"],
                      ["Moisture Control", "8% - 12% (Kiln)", "Below 10% (Shield)", "Pulp Extraction"],
                      ["Surface Audit", "Triple-Sanded (600+)", "Carnauba Wax Seal", "Molded Smooth"]
                   ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 group hover:bg-green-50/50 transition-colors">
                         <td className="p-8 border-r border-slate-50 text-slate-400 uppercase tracking-widest text-[11px] font-black">{row[0]}</td>
                         <td className="p-8 border-r border-slate-50 text-slate-900 group-hover:text-green-700 transition-colors">{row[1]}</td>
                         <td className="p-8 border-r border-slate-50 text-slate-900 group-hover:text-green-700 transition-colors">{row[2]}</td>
                         <td className="p-8 text-slate-900 group-hover:text-green-700 transition-colors">{row[3]}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Product Content Focus Loop */}
      {categoryItems.map((item, idx) => (
        <div key={idx} className="border-b border-slate-100 last:border-0">
          {/* SECTION 03: The Science of the Product */}
          <section className="py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
               <div className="lg:col-span-7">
                  <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block italic">Section 03 / Product Deep-Dive</span>
                  <h2 className="text-h2 text-slate-950 mb-12 tracking-tighter uppercase italic leading-[0.85]">{item.marketing.title}</h2>
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
               </div>
               <div className="lg:col-span-5 aspect-[4/6] bg-slate-100 rounded-[80px] overflow-hidden relative shadow-2xl group border border-slate-200">
                  <img src={getProductImage(item.marketing.title)} alt={item.marketing.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" />
               </div>
            </div>
          </section>

          {/* SECTION 04: Integrated Global Distribution & QC */}
          <section className="py-40 bg-slate-950 text-white px-6 relative overflow-hidden">
             <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                   {/* Logistics Muscle -> Integrated Global Distribution */}
                   <div className="lg:col-span-4 bg-green-600 p-16 rounded-[60px] text-white shadow-[0_40px_100px_-20px_rgba(22,163,74,0.3)] relative overflow-hidden group">
                      <h4 className="text-green-950 font-black text-xs uppercase tracking-[0.5em] mb-16 block border-b border-green-500 pb-6">Integrated Global Distribution</h4>
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
                      <h3 className="text-h3 mb-20 tracking-tighter uppercase italic leading-[0.9]">Clinical Quality<br/>Assurance Protocol</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                         {item.qc_protocol?.map((qc: string, i: number) => (
                           <div key={i} className="flex gap-10 group items-start">
                              <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-center font-black text-green-500 text-xl group-hover:bg-green-600 group-hover:text-white transition-all shadow-xl">
                                 {i < 9 ? `0${i + 1}` : i + 1}
                              </div>
                              <div>
                                 <p className="text-lg font-bold text-slate-300 leading-tight group-hover:text-white transition-colors">{qc}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </section>
        </div>
      ))}

      {/* SECTION 05: Compliance Banner (Supporting Theme) */}
      <section className="bg-slate-950 text-white py-40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="max-w-2xl">
             <h2 className="text-h3 mb-10 uppercase italic leading-[0.85]">Certified<br/>Export Compliance</h2>
             <p className="text-slate-400 font-medium text-2xl leading-relaxed">
               All products are audited to meet BRC Global Food Safety standards and FDA/LFGB regulations.
             </p>
          </div>
          <div className="flex flex-wrap gap-12 justify-center opacity-30 grayscale hover:opacity-100 transition-all duration-[2000ms]">
             {["FSC", "FDA", "LFGB", "BSCI", "BRC", "ISO9001"].map(c => (
               <span key={c} className="text-5xl font-black tracking-[0.2em] italic border-2 border-white px-8 py-3">{c}</span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA: Relevant Project Initiation */}
      <section className="py-40 px-6 text-center border-t border-slate-100">
         <Link href="/contact" className="inline-flex items-center gap-8 bg-slate-950 text-white px-24 py-10 rounded-[50px] font-black text-3xl hover:bg-green-600 transition-all shadow-2xl group uppercase tracking-widest">
            INITIATE ${category.name} PROJECT
            <span className="group-hover:translate-x-5 transition-transform italic tracking-widest font-black text-green-500 group-hover:text-white">→</span>
         </Link>
      </section>
    </div>
  );
}
