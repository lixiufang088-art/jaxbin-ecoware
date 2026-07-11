import Link from 'next/link';

export default function OEMPage() {
  const steps = [
    { title: "Forest Selection", desc: "Selecting FSC-certified birch and bamboo from managed ecosystems.", icon: "🌲" },
    { title: "Material Treatment", desc: "Kiln-drying to 8-12% moisture and triple-buffing for smooth food contact.", icon: "🔬" },
    { title: "Bespoke Shaping", desc: "Precision molding and die-cutting to match custom B2B technical specs.", icon: "📏" },
    { title: "Branding & Pack", desc: "Hot-stamping, laser etching, and custom retail or catering packaging.", icon: "🏷️" },
    { title: "Global Logistics", desc: "Documentation, port-side delivery, and unified export coordination.", icon: "🚢" }
  ];

  const customItems = [
    { title: "Product Specification", desc: "Size, thickness, shape, finish and functional requirements where feasible.", step: "1" },
    { title: "Service Packing", desc: "Bulk packs, individual wraps, kraft sleeves, napkins and combined sets.", step: "2" },
    { title: "Retail Packaging", desc: "Pack count, labels, display boxes, barcodes and shelf-ready cartons.", step: "3" },
    { title: "Export Cartons", desc: "Carton marks, handling symbols, dimensions and loading data.", step: "4" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/sections/oem.png')] bg-cover bg-center grayscale"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-700">/</span>
            <span>OEM & Private Label</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic">Bespoke <span className="text-green-600">Development</span></h1>
          <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
            Turn standard eco-ware into your proprietary product line with Jaxbin's end-to-end OEM/ODM framework.
          </p>
        </div>
      </section>

      {/* From Forest to Table Process */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-green-600 font-black uppercase tracking-widest text-[10px] mb-6 block">Supply Chain Architecture</span>
             <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">From Forest to Table</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/30 group hover:border-green-500 transition-all">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h3 className="font-black text-slate-900 mb-4 text-xl uppercase tracking-tighter">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 bg-green-50 rounded-full border border-green-100 flex items-center justify-center translate-y-[-50%] z-20">
                    <span className="text-green-600 text-xs font-black">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Details */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/3] bg-slate-100 rounded-[60px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/oem.png" alt="Private label eco tableware packaging" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-tr from-green-950/30 to-transparent"></div>
          </div>
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Private Label Strategy</span>
            <h2 className="text-5xl font-black mb-12 text-slate-900 tracking-tighter uppercase italic">Product, Pack & Presentation</h2>
            <div className="space-y-10">
              {customItems.map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-950 text-white rounded-3xl flex items-center justify-center font-black text-2xl group-hover:bg-green-600 transition-colors shadow-lg">
                    {item.step}
                  </div>
                  <div className="border-b border-slate-50 pb-8 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OEM CTA */}
      <section className="bg-slate-950 text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/sections/hero.png')] bg-cover"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase italic">Ready to develop your brand?</h2>
          <p className="text-slate-400 mb-16 text-xl font-medium">Send your artwork requirements and estimated annual volumes to our OEM coordination team.</p>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-green-600 text-white px-16 py-8 rounded-3xl font-black text-2xl hover:bg-green-700 transition shadow-2xl shadow-green-900/50 group">
            START OEM PROJECT
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
