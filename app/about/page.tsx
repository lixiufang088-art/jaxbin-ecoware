import Link from 'next/link';

export default function AboutPage() {
  const steps = [
    { title: "Sourcing", desc: "Selecting premium birch, bamboo, and fiber substrates from certified sustainable sources." },
    { title: "Treatment", desc: "Professional kiln-drying to maintain moisture levels between 8% - 12% for maximum stability." },
    { title: "Shaping", desc: "Precision molding and die-cutting to match technical drawings and buyer specifications." },
    { title: "Polishing", desc: "Triple-polished surface finishing to ensure a smooth, burr-free experience for food contact." },
    { title: "QC & Packing", desc: "Multi-point quality checks for dimensions and cleanliness before final export packing." }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span>Factory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">A practical partner for bulk eco tableware</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Jaxbin Ecoware serves B2B buyers that need product breadth, custom packing and a clear export purchasing process.
          </p>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Facility</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">8,000 m² processing capability</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">Our operating model supports processing, packing, quality coordination and export preparation for eco-friendly disposable tableware.</p>
              <p>Product programs can include wood, bamboo, sugarcane bagasse, paper and CPLA items. The exact manufacturing route, facility and documentation may vary by product.</p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Incoming material and sample review",
                  "Dimension, surface and pack-count checks",
                  "Custom sleeve, label and carton coordination",
                  "Export packing and loading preparation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
             <img src="/assets/images/sections/factory.png" alt="Jaxbin factory facility" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Transparency Manufacturing Module */}
      <section className="py-24 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs mb-4 block">Process Transparency</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Manufacturing Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="text-5xl font-black text-slate-50 absolute -right-2 -bottom-2 group-hover:text-green-50 transition-colors">{idx + 1}</div>
                <h3 className="font-bold text-slate-900 mb-4 text-xl relative z-10">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Need a detailed factory profile?</h2>
          <p className="text-slate-600 mb-10 text-lg">Contact our export coordination team for specific facility information, test reports and product capabilities.</p>
          <Link href="/contact" className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-200">
            Get Factory Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
