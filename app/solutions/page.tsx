import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Food Delivery & Takeaway",
      desc: "Standardize your single-use service items with repeatable pack formats, branded kits, and grease-resistant bagasse containers designed for the rigors of transit.",
      materials: ["Sugarcane Bagasse", "Paper", "Wood"],
      items: ["Hinged Clamshells", "Cutlery Sets", "Insulated Bowls"],
      icon: "🛵"
    },
    {
      title: "Event & Catering",
      desc: "Elevate guest experience with premium wooden cutlery, bamboo picks, and compostable plates. Ideal for large-scale tasting events, weddings, and professional catering.",
      materials: ["Birch Wood", "Bamboo", "Palm Leaf"],
      items: ["Tasting Spoons", "Knotted Picks", "Rigid Serving Plates"],
      icon: "🥂"
    },
    {
      title: "Aviation & Transportation",
      desc: "Lightweight, space-saving cutlery kits and individually wrapped stirrers. Compliant with strict safety and hygiene standards for international travel segments.",
      materials: ["CPLA", "Bamboo", "Wrapped Wood"],
      items: ["Wrapped Stirrers", "Lightweight Cutlery", "Hygienic Napkin Kits"],
      icon: "✈️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Industry Supply Programs"
        subtitle="Jaxbin structures product, packing, and quotation details around your actual route to market. Professional supply programs for distributors and high-volume brands."
        image="/assets/images/sections/hero.png"
      />

      {/* Solutions Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {solutions.map((sol, idx) => (
              <div key={idx} className="flex flex-col p-12 bg-slate-50 rounded-[50px] border border-slate-100 hover:shadow-2xl transition-all duration-700 group">
                <div className="text-6xl mb-12 group-hover:scale-110 transition-transform duration-500">{sol.icon}</div>
                <h3 className="text-h3 text-slate-900 mb-8 uppercase tracking-tighter italic">{sol.title}</h3>
                <p className="text-slate-500 font-medium mb-12 leading-relaxed flex-grow">{sol.desc}</p>
                
                <div className="space-y-8 pt-8 border-t border-slate-200">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Core Substrates</p>
                    <div className="flex flex-wrap gap-2">
                      {sol.materials.map(m => (
                        <span key={m} className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-[10px] font-black border border-slate-200 uppercase">{m}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Critical SKUs</p>
                    <ul className="text-sm font-bold text-slate-700 space-y-2">
                       {sol.items.map(i => <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-green-600 rounded-full"></span> {i}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Sourcing CTA */}
      <section className="bg-green-600 py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/sections/factory.png')] bg-cover opacity-10 grayscale"></div>
        <div className="max-w-5xl mx-auto text-white relative z-10">
          <h2 className="text-h2 tracking-tighter uppercase italic mb-8 leading-none">Need a Sector Specific Audit?</h2>
          <p className="text-2xl text-green-50 mb-16 font-medium leading-relaxed max-w-3xl mx-auto">Our coordination team can map out a full-year procurement plan across multiple categories for your specific channel.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/oem" className="bg-slate-950 text-white px-12 py-6 rounded-[40px] font-black text-xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl uppercase tracking-widest">
              Explore OEM Support
            </Link>
            <Link href="/contact" className="bg-green-500 text-white border-2 border-green-400 px-12 py-6 rounded-[40px] font-black text-xl hover:bg-green-700 transition-all uppercase tracking-widest">
              GET RFQ CHECKLIST →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
