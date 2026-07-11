import './globals.css';
import Link from 'next/link';
import data from '../data/products.json';

export const metadata = {
  title: 'Eco-Green Tableware | Leading Eco-Friendly Disposable Manufacturer',
  description: 'Professional B2B Manufacturer of Wooden, Bamboo, and Bagasse Tableware. Wholesale Worldwide.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900 bg-white">
        {/* Top Bar */}
        <div className="bg-green-900 text-white py-2 text-xs">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-90 font-medium">
            <span>Wholesale only · OEM/ODM · Export documentation support</span>
            <div className="flex gap-4">
              <a href="mailto:info@jaxbin.com" className="hover:text-green-300 transition">Email: info@jaxbin.com</a>
              <span>Global B2B Partner</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-700 tracking-tight flex items-center gap-2">
              <img src="/assets/images/jaxbin-logo.png" alt="Jaxbin Ecoware" className="h-10 w-auto" />
              <span>ECO<span className="text-slate-900">GREEN</span></span>
            </Link>
            
            <div className="hidden md:flex gap-8 items-center font-semibold">
              <Link href="/" className="text-slate-700 hover:text-green-600 transition">Home</Link>
              
              {/* Advanced Products Dropdown */}
              <div className="group relative py-6">
                <button className="text-slate-700 hover:text-green-600 transition flex items-center gap-1 uppercase tracking-wider text-sm">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                {/* Mega Menu Overlay (3-Level Architecture) */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1000px] bg-white border border-slate-100 shadow-2xl rounded-3xl p-12 hidden group-hover:grid grid-cols-4 gap-12 border-t-4 border-t-green-600">
                  {data.navigation[0].items.map((material) => (
                    <div key={material.id} className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-lg">
                          {material.id === 'wood' ? '🪵' : material.id === 'bamboo' ? '🎋' : material.id === 'bagasse' ? '🌾' : '📄'}
                        </div>
                        <p className="text-green-700 font-bold uppercase tracking-widest text-xs">
                          {material.name}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {material.products.map((product) => (
                          <li key={product}>
                            <Link 
                              href={`/products/${data.categories.find(c => c.products.some(p => p === product.toLowerCase().replace(/ /g, '-')) || c.id === material.id)?.id || 'cutlery'}`} 
                              className="text-[13px] text-slate-500 hover:text-green-600 hover:font-bold transition-all flex items-center gap-2 group/item"
                            >
                              <span className="w-1 h-1 bg-slate-200 rounded-full group-hover/item:bg-green-600 transition-colors"></span>
                              {product}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-4 mt-10 pt-10 border-t border-slate-50 flex justify-between items-center bg-slate-50 -mx-12 -mb-12 p-8 rounded-b-3xl">
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✅</span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">FSC Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✅</span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">FDA Compliant</span>
                      </div>
                    </div>
                    <Link href="/products" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-green-700 transition">Explore Full Catalog &rarr;</Link>
                  </div>
                </div>
              </div>

              <Link href="/solutions" className="text-slate-700 hover:text-green-600 transition uppercase tracking-wider text-sm border-l border-slate-100 pl-8">Solutions</Link>
              <Link href="/oem" className="text-slate-700 hover:text-green-600 transition uppercase tracking-wider text-sm">OEM Service</Link>
              <Link href="/certificates" className="text-slate-700 hover:text-green-600 transition uppercase tracking-wider text-sm">Certificates</Link>
              <Link href="/sustainability" className="text-slate-700 hover:text-green-600 transition uppercase tracking-wider text-sm">Sustainability</Link>
              <Link href="/contact" className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition shadow-lg shadow-green-100 text-sm">Get a Quote</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div>
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                 <img src="/assets/images/jaxbin-logo.png" alt="Jaxbin" className="h-8 w-auto brightness-0 invert" />
                 <h3 className="text-white text-xl font-bold tracking-tight">ECOGREEN</h3>
              </div>
              <p className="leading-relaxed mb-6">
                Dedicated to providing sustainable disposable tableware solutions for global markets since 2008.
              </p>
              <p className="text-white font-medium">Email: info@jaxbin.com</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Product Materials</h4>
              <ul className="space-y-4">
                {data.navigation[0].items.map(m => (
                  <li key={m.id}><Link href="/products" className="hover:text-white transition">{m.name} Products</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="/solutions" className="hover:text-white transition">Industry Solutions</Link></li>
                <li><Link href="/oem" className="hover:text-white transition">OEM & Private Label</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition">Sustainable Sourcing</Link></li>
                <li><Link href="/certificates" className="hover:text-white transition">Certificates & Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
              <p className="mb-4 text-slate-500">Processing Facility:<br/>No. 88 Eco-Industrial Park, Fujian, China</p>
              <div className="flex gap-4 mb-8">
                <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition">in</span>
                <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition">f</span>
                <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition">t</span>
              </div>
              <Link href="/contact" className="inline-block border border-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition">Start Project</Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 text-xs flex justify-between items-center">
            <span>&copy; {new Date().getFullYear()} Eco-Green Tableware. All rights reserved.</span>
            <div className="flex gap-6 text-slate-500">
               <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
               <span>B2B Wholesale Channel</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
