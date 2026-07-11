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
    const itemKey = itemName.toLowerCase().replace(/ /g, '-');
    const itemData = (data.product_pool as any)[itemKey];
    
    // Attempt to map based on item type
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

  // Group items by material substrate
  const groupedItems = categoryItems.reduce((acc, item) => {
    const material = item.technical_specs?.material?.split(' ')[0] || 'Sustainable';
    if (!acc[material]) acc[material] = [];
    acc[material].push(item);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero & Breadcrumbs */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
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
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Professional-grade {category.name.toLowerCase()} engineered for high-volume B2B supply chains. Zero plastic. 100% Performance.
          </p>
        </div>
      </section>

      {/* Why Jaxbin Category Block */}
      <section className="py-20 bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-black text-green-950 mb-6 tracking-tight">Engineered Sustainability</h2>
            <p className="text-green-900/80 leading-relaxed text-lg font-medium">
              Every Jaxbin {category.name.toLowerCase()} item undergoes rigorous structural testing. We balance natural material aesthetics with the durability required for hot, cold, oily, and liquid food environments.
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-green-200/50">
              <div className="text-3xl mb-2">🍃</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Plastic-Free</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-green-200/50">
              <div className="text-3xl mb-2">♻️</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Compostable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped High-Density Content */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        {Object.entries(groupedItems).map(([material, items]) => (
          <div key={material} className="mb-40 last:mb-0">
            <div className="flex items-center gap-6 mb-20">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">{material} Series</h2>
              <div className="h-px bg-slate-100 flex-grow"></div>
            </div>
            
            <div className="space-y-48">
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                  {/* Left: Real Visual */}
                  <div className="lg:col-span-5 aspect-square bg-slate-50 rounded-[40px] overflow-hidden relative border border-slate-100 group">
                    <img 
                      src={getProductImage(item.marketing.title)} 
                      alt={item.marketing.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent"></div>
                    <div className="absolute bottom-10 left-10">
                       <span className="bg-white/90 backdrop-blur-md text-green-900 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">Factory Direct</span>
                    </div>
                  </div>
                  
                  {/* Right: Technical & Marketing Density */}
                  <div className="lg:col-span-7">
                    <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">B2B Product Profile</span>
                    <h3 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-none">{item.marketing.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {item.marketing.benefits.map((b: string) => (
                        <span key={b} className="bg-slate-950 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase">{b}</span>
                      ))}
                    </div>

                    <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">{item.desc || "High-performance eco-ware designed for global distribution and foodservice efficiency."}</p>
                    
                    {/* Hardcore Specs Matrix */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-16 border-t border-slate-100 pt-12">
                       <div>
                          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Material Grade</p>
                          <p className="text-slate-900 font-bold text-lg">{item.technical_specs?.material || "Standard"}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Dimensions</p>
                          <p className="text-slate-900 font-bold text-lg">{item.technical_specs?.dimensions || "Customizable"}</p>
                       </div>
                       {item.technical_specs?.moisture_content && (
                         <div>
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Moisture Control</p>
                            <p className="text-slate-900 font-bold text-lg">{item.technical_specs.moisture_content}</p>
                         </div>
                       )}
                       {item.technical_specs?.surface_finish && (
                         <div>
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Surface Finish</p>
                            <p className="text-slate-900 font-bold text-lg">{item.technical_specs.surface_finish}</p>
                         </div>
                       )}
                    </div>

                    {/* OEM & Logistics Capability */}
                    <div className="bg-slate-50 rounded-3xl p-10 mb-12 border border-slate-100">
                       <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                          Supply Chain Capability
                       </h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div>
                             <p className="text-[10px] font-black text-green-700/50 uppercase mb-2">OEM Options</p>
                             <ul className="text-sm font-bold text-slate-700 space-y-1">
                                {item.oem_capabilities?.customization.map((c: string) => <li key={c}>+ {c}</li>)}
                             </ul>
                          </div>
                          <div>
                             <p className="text-[10px] font-black text-green-700/50 uppercase mb-2">Logistics Unit</p>
                             <p className="text-sm font-bold text-slate-700">{item.logistics?.inner_packing}</p>
                             <p className="text-[10px] text-slate-400 mt-1">{item.logistics?.carton_data}</p>
                          </div>
                       </div>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-green-700 transition shadow-2xl shadow-green-200/50 group">
                      GET RFQ & SAMPLES
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Compliance / Global Standards Section */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
             <h2 className="text-4xl font-black tracking-tighter mb-6">Certified Compliance</h2>
             <p className="text-slate-500 font-medium text-lg leading-relaxed">
               All {category.name.toLowerCase()} products are manufactured under ISO 9001 standards and meet direct food-contact safety regulations for US, EU, and Asian markets.
             </p>
          </div>
          <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <span className="text-3xl font-black tracking-widest text-slate-900 border-2 border-slate-900 px-4 py-1">FSC</span>
             <span className="text-3xl font-black tracking-widest text-slate-900 border-2 border-slate-900 px-4 py-1">FDA</span>
             <span className="text-3xl font-black tracking-widest text-slate-900 border-2 border-slate-900 px-4 py-1">LFGB</span>
             <span className="text-3xl font-black tracking-widest text-slate-900 border-2 border-slate-900 px-4 py-1">BSCI</span>
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-slate-950 text-white py-32 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 tracking-tight text-white uppercase italic">Explore Other Professional Substrates</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-12 py-5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:border-green-500 hover:text-white transition-all font-black text-xs tracking-widest uppercase">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
