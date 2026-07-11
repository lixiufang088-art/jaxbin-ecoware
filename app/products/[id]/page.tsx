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

  const itemImageMap: Record<string, string> = {
    'Wooden Cutlery': '/assets/images/sections/wooden-cutlery.png',
    'Bamboo Cutlery': '/assets/images/sections/bamboo-cutlery.png',
    'Bagasse Cutlery': '/assets/images/sections/compostable-cutlery.png',
    'Wooden Plate': '/assets/images/sections/plates.png',
    'Bagasse Plate': '/assets/images/sections/plates-bowls-real.png',
    'Wooden Container': '/assets/images/sections/food-containers-real.png',
    'Cocktail Sticks': '/assets/images/sections/skewers-picks-real.png',
    'Knotted Picks': '/assets/images/sections/skewers-picks-real.png',
    'Bamboo Coffee Stirrer': '/assets/images/sections/stirrers-sticks-real.png',
    'Paper Straw': '/assets/images/sections/straws-real.png'
  };

  const getProductImage = (itemName: string) => {
    return itemImageMap[itemName] || categoryImageMap[id] || '/assets/images/sections/hero.png';
  };

  // Group items by material for "Muscular" content (BioPak style)
  const groupedItems = category.items.reduce((acc, item) => {
    const material = item.specs?.material?.split(' ')[0] || 'Premium';
    if (!acc[material]) acc[material] = [];
    acc[material].push(item);
    return acc;
  }, {} as Record<string, typeof category.items>);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={categoryImageMap[id]} className="w-full h-full object-cover blur-3xl" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-8 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition">Products</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{category.name} Range</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Discover our high-performance {category.name.toLowerCase()} collection. Engineered for professional foodservice, delivery, and retail environments with zero plastic waste.
          </p>
        </div>
      </section>

      {/* Why This Category (BioPak Style Trust Block) */}
      <section className="py-16 bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Why choose Jaxbin {category.name}?</h2>
            <p className="text-green-800 leading-relaxed text-lg">
              Our {category.name.toLowerCase()} is selected based on durability, functional performance, and end-of-life compostability. 
              We offer multiple material substrates to match your brand's aesthetic and operational requirements—from premium birch wood to 100% renewable sugarcane fiber.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-green-100 text-center flex-1">
              <p className="text-2xl mb-1">🌿</p>
              <p className="text-xs font-bold text-slate-500 uppercase">Plastic Free</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-green-100 text-center flex-1">
              <p className="text-2xl mb-1">♻️</p>
              <p className="text-xs font-bold text-slate-500 uppercase">Compostable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped Product List */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {Object.entries(groupedItems).map(([material, items]) => (
          <div key={material} className="mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-900">{material} Solutions</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            
            <div className="space-y-32">
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-b border-slate-100 pb-32 last:border-0 last:pb-0">
                  <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-100 shadow-inner group relative">
                    <img 
                      src={getProductImage(item.name)} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100" 
                    />
                  </div>
                  
                  <div>
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Product Overview</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{item.name}</h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">{item.desc}</p>
                    
                    {/* B2B Specification Table */}
                    <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Substrate Material</p>
                          <p className="text-slate-900 font-bold">{item.specs?.material || "Standard"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Dimensions</p>
                          <p className="text-slate-900 font-bold">{item.specs?.size || "Customizable"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Standard Packing</p>
                          <p className="text-slate-900 font-bold">{item.specs?.packing || "Bulk Export"}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Wholesale MOQ</p>
                          <p className="text-slate-900 font-bold">{item.specs?.moq || "Discuss with sales"}</p>
                        </div>
                        {item.specs?.moisture && (
                          <div>
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Moisture Control</p>
                            <p className="text-slate-900 font-bold">{item.specs.moisture}</p>
                          </div>
                        )}
                        {item.specs?.surface && (
                          <div>
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Surface Treatment</p>
                            <p className="text-slate-900 font-bold">{item.specs.surface}</p>
                          </div>
                        )}
                        {item.specs?.coating && (
                          <div>
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Coating</p>
                            <p className="text-slate-900 font-bold">{item.specs.coating}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition shadow-xl shadow-green-100">
                      Request Factory Quote
                      <span className="text-xl">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Cross-sell */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 tracking-tight text-white">Explore Other Sustainable Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-10 py-4 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:border-green-500 hover:text-white transition-all font-bold text-sm">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
