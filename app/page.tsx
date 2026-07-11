import Link from 'next/link';
import products from '../data/products.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white bg-slate-900">
        <div className="absolute inset-0 opacity-40 bg-[url('https://your-r2-url.com/hero-bg.jpg')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Leading Eco-Friendly Disposable Tableware Since 2008
          </h1>
          <p className="text-xl mb-8 text-slate-200">
            Professional Manufacturer of Bamboo, Wood, and Bagasse Products. Providing OEM & ODM Services for Global B2B Partners.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-md font-semibold transition">
              Get Free Quote
            </Link>
            <Link href="/products" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-md font-semibold transition">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">8,000 m²</p>
            <p className="text-green-100 text-sm">Processing Facility</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">5 Materials</p>
            <p className="text-green-100 text-sm">Eco-friendly Selection</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">OEM/ODM</p>
            <p className="text-green-100 text-sm">Custom Packaging</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">Global</p>
            <p className="text-green-100 text-sm">Export Logistics</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Products</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'cutlery', name: 'Wooden & Bamboo Cutlery', img: '/assets/images/sections/cutlery.png' },
            { id: 'disposable-tableware', name: 'Plates & Bowls', img: '/assets/images/sections/plates-bowls-real.png' },
            { id: 'food-container', name: 'Food Containers', img: '/assets/images/sections/food-containers-real.png' },
            { id: 'skewers-picks', name: 'Skewers & Picks', img: '/assets/images/sections/skewers-picks-real.png' },
            { id: 'stirrers', name: 'Stirrers & Sticks', img: '/assets/images/sections/stirrers-sticks-real.png' },
            { id: 'straws', name: 'Eco Straws', img: '/assets/images/sections/straws-real.png' },
            { id: 'ice-cream-stick', name: 'Ice Cream Sticks', img: '/assets/images/sections/sticks.png' }
          ].map((cat) => (
            <Link key={cat.id} href={`/products/${cat.id}`} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-white/80 group-hover:translate-x-2 transition-transform">Explore More &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Jaxbin Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">A Practical B2B Partner, Not Just a Product Catalog</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Clear specifications, practical customization options and a quotation flow that helps reduce sourcing back-and-forth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-2xl mb-6">▦</div>
              <h3 className="text-xl font-bold mb-3">Multi-category Sourcing</h3>
              <p className="text-slate-600 text-sm">Consolidate related tableware and foodservice accessories under one project.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-2xl mb-6">✎</div>
              <h3 className="text-xl font-bold mb-3">Private-label Options</h3>
              <p className="text-slate-600 text-sm">Develop sleeves, wraps, labels, retail packs and shipping cartons for your brand.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-2xl mb-6">✓</div>
              <h3 className="text-xl font-bold mb-3">Quality Checkpoints</h3>
              <p className="text-slate-600 text-sm">Confirm samples, dimensions, moisture, surface finish, packing and carton marks.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-2xl mb-6">⇄</div>
              <h3 className="text-xl font-bold mb-3">Export Coordination</h3>
              <p className="text-slate-600 text-sm">Support for mixed specifications, packing lists, shipment planning and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Certificates */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* 这里可以放 BSCI, FSC, FDA 等图标 */}
          <span className="text-xl font-bold">BSCI Certified</span>
          <span className="text-xl font-bold">FSC Sourced</span>
          <span className="text-xl font-bold">FDA Approved</span>
          <span className="text-xl font-bold">ISO 9001</span>
        </div>
      </section>
    </main>
  );
}
