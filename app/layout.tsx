import './globals.css';
import Link from 'next/link';
import data from '../data/products.json';

export const metadata = {
  title: 'Eco-Green Tableware | Leading Eco-Friendly Disposable Manufacturer',
  description: 'Manufacturer of Wooden, Bamboo, and Bagasse Tableware. B2B Wholesale Worldwide.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900 bg-white">
        {/* Navigation Bar */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-700 tracking-tight flex items-center gap-2">
              <img src="/assets/images/jaxbin-logo.png" alt="Jaxbin Ecoware" className="h-10 w-auto" />
              <span>ECO<span className="text-slate-900">GREEN</span></span>
            </Link>
            
            <div className="hidden md:flex gap-8 items-center font-medium">
              <Link href="/" className="hover:text-green-600 transition">Home</Link>
              <div className="group relative py-4">
                <button className="hover:text-green-600 transition flex items-center gap-1">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Mega Menu Overlay */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-slate-100 shadow-2xl rounded-xl p-6 hidden group-hover:grid grid-cols-2 gap-4">
                  {data.categories.map(cat => (
                    <Link key={cat.id} href={`/products/${cat.id}`} className="p-3 hover:bg-slate-50 rounded-lg transition">
                      <p className="font-bold text-slate-900">{cat.name}</p>
                      <p className="text-xs text-slate-500">{cat.items.length} items available</p>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/oem" className="hover:text-green-600 transition">OEM Service</Link>
              <Link href="/about" className="hover:text-green-600 transition">About Us</Link>
              <Link href="/contact" className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">Get a Quote</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-6">ECOGREEN</h3>
              <p className="text-sm leading-relaxed">
                Dedicated to providing sustainable disposable tableware solutions for global markets since 2008.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Categories</h4>
              <ul className="space-y-3 text-sm">
                {data.categories.slice(0, 4).map(cat => (
                  <li key={cat.id}><Link href={`/products/${cat.id}`} className="hover:text-white transition">{cat.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/certificates" className="hover:text-white transition">Certificates</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
              <p className="text-sm mb-4">Stay updated with our latest products and news.</p>
              <input type="email" placeholder="Email address" className="w-full bg-slate-800 border-none rounded p-3 text-sm text-white focus:ring-1 focus:ring-green-500" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 text-xs text-center">
            &copy; {new Date().getFullYear()} Eco-Green Tableware. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
