import Link from 'next/link';
import data from '../../data/products.json';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center uppercase tracking-tighter">Professional Product Range</h1>
      <p className="text-slate-600 text-center mb-20 max-w-2xl mx-auto text-lg">
        High-performance eco-friendly disposable tableware made from sustainable bamboo, birch wood, and sugarcane bagasse.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.categories.map((cat) => (
          <Link href={`/products/${cat.id}`} key={cat.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
            <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
               <img 
                 src={`/assets/images/sections/${cat.id === 'cutlery' ? 'cutlery' : cat.id === 'disposable-tableware' ? 'plates-bowls-real' : cat.id === 'food-container' ? 'food-containers-real' : cat.id === 'skewers-picks' ? 'skewers-picks-real' : cat.id === 'stirrers' ? 'stirrers-sticks-real' : cat.id === 'straws' ? 'straws-real' : 'sticks'}.png`}
                 alt={cat.name}
                 className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-black text-white tracking-tighter italic uppercase">{cat.name}</h2>
               </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3 mb-10">
                {cat.products.slice(0, 4).map((pId) => {
                  const item = (data.product_pool as any)[pId];
                  return (
                    <li key={pId} className="flex items-center text-sm font-bold text-slate-500 group-hover:text-green-600 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/30 mr-3 group-hover:bg-green-500" />
                      {item?.marketing?.title || pId.replace(/-/g, ' ')}
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                 <span className="text-xs font-black text-slate-300 uppercase tracking-widest">B2B Wholesale</span>
                 <span className="text-green-600 font-black text-sm uppercase tracking-widest">View Range →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
