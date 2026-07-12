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
    // Specifically handle ice cream stick mapping within stirrers or category context
    if (itemName.toLowerCase().includes('ice cream stick')) return '/assets/images/sections/sticks.png';
    
    if (itemName.includes('Fork')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Spoon')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Knife')) return '/assets/images/sections/wooden-cutlery.png';
    if (itemName.includes('Plate')) return '/assets/images/sections/plates.png';
    if (itemName.includes('Bowl')) return '/assets/images/sections/plates-bowls-real.png';
    if (itemName.includes('Container')) return '/assets/images/sections/food-containers-real.png';
    if (itemName.includes('Skewer') || itemName.includes('Pick')) return '/assets/images/sections/skewers-picks-real.png';
    if (itemName.includes('Stirrer')) return '/assets/images/sections/stirrers-sticks-real.png';
    if (itemName.includes('Straw')) return '/assets/images/sections/straws-real.png';
    
    return categoryImageMap[id] || '/assets/images/sections/hero.png';
  };

  // Build items from product_pool
  const categoryItems = category.products.map(pId => ({
    id: pId,
    ...(data.product_pool as any)[pId]
  })).filter(item => item.marketing);

  // Group items by material substrate for L3-style navigation
  const groupedItems = categoryItems.reduce((acc, item) => {
    const material = item.technical_specs?.material?.split(' ')[0] || 'Sustainable';
    if (!acc[material]) acc[material] = [];
    acc[material].push(item);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHero 
        title={`${category.name} Solutions`}
        subtitle="High-precision bio-substrate manufacturing for global B2B supply chains. Zero plastic. 100% Performance."
        image={categoryImageMap[id]}
        breadcrumbs={[{ label: 'Inventory', href: '/products' }]}
      />

      {/* SECTION 02: Intelligence Matrix */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 tracking-tighter uppercase italic mb-20 leading-none">Substrate<br/>Benchmarking</h2>
          <div className="overflow-x-auto rounded-[40px] shadow-2xl shadow-slate-200">
             <table className="w-full border-collapse bg-white text-left">
                <thead>
                   <tr className="bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                      <th className="p-10 border-r border-white/5">Parameter</th>
                      <th className="p-10 border-r border-white/5">Birch Substrate</th>
                      <th className="p-10 border-r border-white/5">Moso Bamboo</th>
                      <th className="p-10">Bagasse Substrate</th>
                   </tr>
                </thead>
                <tbody className="text-base font-bold text-slate-600">
                   {[
                      ["Structural Rigidity", "High (Zero Flex)", "Extreme (Hardened)", "Medium (Flexible)"],
                      ["Thermal Limit", "Up to 100°C", "Up to 120°C", "-20°C to 120°C"],
                      ["Moisture Control", "8% - 12%", "Below 10%", "N/A"],
                      ["Surface Audit", "Triple-Sanded", "Carnauba Wax Seal", "Molded Smooth"]
                   ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-green-50/50 transition-colors">
                         <td className="p-8 border-r border-slate-50 text-slate-400 uppercase tracking-widest text-[11px] font-black">{row[0]}</td>
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

      {/* Grouped Product List */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        {Object.entries(groupedItems).map(([material, items]) => (
          <div key={material} className="mb-40 last:mb-0">
            <div className="flex items-center gap-6 mb-20">
              <h2 className="text-h2 text-slate-900 tracking-tighter uppercase italic">{material} Series</h2>
              <div className="h-px bg-slate-100 flex-grow"></div>
            </div>
            
            <div className="space-y-48">
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                  <div className="lg:col-span-5 aspect-square bg-slate-50 rounded-[60px] overflow-hidden relative border border-slate-100 group shadow-2xl">
                    <img src={getProductImage(item.marketing.title)} alt={item.marketing.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  
                  <div className="lg:col-span-7">
                    <h3 className="text-h3 text-slate-950 mb-8 tracking-tighter uppercase italic leading-none">{item.marketing.title}</h3>
                    <p className="text-2xl text-slate-500 font-medium mb-12 leading-relaxed">{item.material_science}</p>
                    
                    {/* B2B Specs Matrix */}
                    <div className="grid grid-cols-2 gap-12 p-12 bg-slate-50 rounded-[40px] border border-slate-100 mb-12">
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Logistics: 20GP Load</p>
                          <p className="text-2xl font-black italic uppercase text-slate-900">{item.logistics_matrix?.["20GP"] || "900 ctns"}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Export Packing</p>
                          <p className="text-2xl font-black italic uppercase text-slate-900">{item.logistics_matrix?.packing}</p>
                       </div>
                    </div>

                    <div className="space-y-4 mb-16">
                       <p className="text-[11px] font-black text-green-600 uppercase tracking-[0.4em] mb-8 block">Section 04 / QC Protocol (12 Points)</p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {item.qc_protocol?.map((qc: string, i: number) => (
                             <div key={i} className="flex gap-4 items-start text-xs font-bold text-slate-500 uppercase tracking-tight">
                                <span className="text-green-600">0{i+1}</span>
                                <span>{qc}</span>
                             </div>
                          ))}
                       </div>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-8 rounded-[40px] font-black text-xl hover:bg-green-600 transition shadow-2xl group">
                      INITIATE PROJECT →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
