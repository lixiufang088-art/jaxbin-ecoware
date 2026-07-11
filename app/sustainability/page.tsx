import Link from 'next/link';

export default function SustainabilityPage() {
  const materials = [
    { title: "Wood and Bamboo", desc: "Review species, source, surface treatment, adhesives, coatings and packaging.", id: "1" },
    { title: "Bagasse Fiber", desc: "Confirm fiber formulation, additives, barrier requirements and applicable test reports.", id: "2" },
    { title: "Paper Products", desc: "Identify board type, printing, lining or coating and local recovery options.", id: "3" },
    { title: "CPLA", desc: "Use industrial-compostability language only when supported and when appropriate facilities exist.", id: "4" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Sustainability</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Better claims begin with exact product facts</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            “Eco-friendly” is not a complete specification. Jaxbin encourages buyers to identify material composition, food-contact use and realistic end-of-life routes.
          </p>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Material first, claim second</h2>
            <div className="space-y-8">
              {materials.map((m) => (
                <div key={m.id} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200">
             <div className="text-slate-400 italic">Plant-based Material Illustration</div>
          </div>
        </div>
      </section>

      {/* Compliance CTA */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Compliance & Documentation</h2>
          <p className="text-green-100 mb-10 text-lg text-white">Request current test reports (FDA, LFGB, FSC) relevant to your specific market and material selection.</p>
          <Link href="/contact" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition">
            Request Certification Data
          </Link>
        </div>
      </section>
    </div>
  );
}
