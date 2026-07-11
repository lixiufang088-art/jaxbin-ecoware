import Link from 'next/link';
import data from '../../../data/products.json';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 查找对应的产品分类
  const category = data.categories.find(cat => cat.id === id);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name} Range</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Premium eco-friendly {category.name.toLowerCase()} solutions for wholesale, catering, and private label needs.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {category.items.map((item, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 group bg-white">
              <div className="aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-50">
                <div className="text-slate-300 italic group-hover:scale-110 transition duration-500">
                  {item.name} Visual
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">{item.desc}</p>
                
                {/* Specifications (Simplified for now) */}
                <div className="space-y-3 mb-10 text-sm border-t border-slate-50 pt-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Application</span>
                    <span className="text-slate-900 font-medium">B2B Wholesale</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Customization</span>
                    <span className="text-slate-900 font-medium">OEM Support</span>
                  </div>
                </div>

                <Link href="/contact" className="block text-center bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-4 rounded-xl font-bold transition shadow-sm">
                  Inquiry Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-sell / Related */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">Browse Other Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.categories.filter(c => c.id !== id).map(c => (
              <Link key={c.id} href={`/products/${c.id}`} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-green-600 hover:text-green-600 transition">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
