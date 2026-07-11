import Link from 'next/link';

export default function OEMPage() {
  const customItems = [
    { title: "Product Specification", desc: "Size, thickness, shape, finish and functional requirements where feasible.", step: "1" },
    { title: "Service Packing", desc: "Bulk packs, individual wraps, kraft sleeves, napkins and combined sets.", step: "2" },
    { title: "Retail Packaging", desc: "Pack count, labels, display boxes, barcodes and shelf-ready cartons.", step: "3" },
    { title: "Export Cartons", desc: "Carton marks, handling symbols, dimensions and loading data.", step: "4" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span>OEM & Private Label</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Turn standard tableware into your product line</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Jaxbin supports practical OEM development: specification matching, pack structure, artwork zones, sample approval and production controls.
          </p>
        </div>
      </section>

      {/* What can be customized */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic">
               Private Label Packaging Image
             </div>
          </div>
          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">What can be customized</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Product, pack and presentation</h2>
            <div className="space-y-8">
              {customItems.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to develop your brand?</h2>
          <p className="text-slate-400 mb-10 text-lg text-white">Send your artwork requirements and estimated quantities to our OEM team.</p>
          <Link href="/contact" className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition">
            Start OEM Project
          </Link>
        </div>
      </section>
    </div>
  );
}
