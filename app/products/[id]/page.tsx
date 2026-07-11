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

  // Precise mapping for categories and specific items
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
    'Bagasse Plate': '/assets/images/sections/bowl.png',
    'Wooden Container': '/assets/images/sections/containers.png',
    'Cocktail Sticks': '/assets/images/sections/picks.png',
    'Knotted Picks': '/assets/images/sections/picks.png',
    'Bamboo Coffee Stirrer': '/assets/images/sections/stirrers.png',
    'Paper Straw': '/assets/images/sections/straws.png'
  };

  const getProductImage = (itemName: string) => {
    return itemImageMap[itemName] || categoryImageMap[id] || '/assets/images/sections/hero.png';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition">Products</Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name} Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Configure your {category.name.toLowerCase()} requirements for wholesale, catering, or retail distribution.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {category.items.map((item, idx) => (
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{item.name}</h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">{item.desc}</p>
                
                {/* B2B Specification Table */}
                <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-600 rounded-full"></span>
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Material</p>
                      <p className="text-slate-900 font-medium">{item.specs?.material || "Standard"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Size Range</p>
                      <p className="text-slate-900 font-medium">{item.specs?.size || "Customizable"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">Packing Options</p>
                      <p className="text-slate-900 font-medium">{item.specs?.packing || "Bulk Export"}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">MOQ Guidance</p>
                      <p className="text-slate-900 font-medium">{item.specs?.moq || "Discuss with sales"}</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-100">
                  Request Factory Quote
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">Explore Other Sustainable Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:border-green-500 hover:text-white transition">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
