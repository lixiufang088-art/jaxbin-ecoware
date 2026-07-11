import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Food Delivery & Takeaway",
      desc: "Standardize your single-use service items with repeatable pack formats, branded kits, and grease-resistant bagasse containers designed for the rigors of transit.",
      materials: ["Sugarcane Bagasse", "Paper", "Wood"],
      icon: "🛵"
    },
    {
      title: "Event & Catering",
      desc: "Elevate guest experience with premium wooden cutlery, bamboo picks, and compostable plates. Ideal for large-scale tasting events, weddings, and professional catering.",
      materials: ["Birch Wood", "Bamboo", "Palm Leaf"],
      icon: "🥂"
    },
    {
      title: "Aviation & Transportation",
      desc: "Lightweight, space-saving cutlery kits and individually wrapped stirrers. Compliant with strict safety and hygiene standards for international travel segments.",
      materials: ["CPLA", "Bamboo", "Wrapped Wood"],
      icon: "✈️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span>Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Supply programs shaped around your channel</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            A distributor, restaurant group, and aviation brand do not buy the same way. Jaxbin structures product, packing, and quotation details around your actual route to market.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {solutions.map((sol, idx) => (
              <div key={idx} className="flex flex-col p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{sol.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{sol.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{sol.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Recommended Materials</p>
                  <div className="flex flex-wrap gap-2">
                    {sol.materials.map(m => (
                      <span key={m} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to OEM */}
      <section className="bg-green-700 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a custom program?</h2>
          <p className="text-green-100 mb-10 text-lg">Our export coordination team can help you map out a full-year procurement plan across multiple categories.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/oem" className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition">
              Explore OEM Service
            </Link>
            <Link href="/contact" className="border border-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
              Get an RFQ Checklist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
