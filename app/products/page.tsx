import Link from 'next/link';
import data from '../../data/products.json';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center">Our Product Range</h1>
      <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
        Explore our wide range of eco-friendly disposable tableware made from sustainable bamboo, wood, and bagasse materials.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.categories.map((cat) => (
          <div key={cat.id} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition group">
            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
               {/* 这里将来展示来自 Cloudflare R2 的产品图 */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
                 {cat.name} Image
               </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-slate-900">{cat.name}</h2>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                    {item.name}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 rounded-md font-semibold transition">
                Inquiry Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
