import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function OEMPage() {
  const customItems = [
    { title: "Product Specification", desc: "Size, thickness, shape, finish and functional requirements.", step: "1" },
    { title: "Service Packing", desc: "Bulk packs, individual wraps, and combined sets.", step: "2" },
    { title: "Retail Packaging", desc: "Pack count, barcodes and shelf-ready cartons.", step: "3" },
    { title: "Integrated Distribution", desc: "Unified export documentation and logistics speed.", step: "4" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Bespoke Development"
        subtitle="Turn standard eco-ware into your proprietary product line with Jaxbin's end-to-end OEM/ODM framework."
        image="/assets/images/sections/oem.png"
      />

      {/* Strategy Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/3] bg-slate-100 rounded-[60px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/oem.png" alt="OEM Packaging" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Private Label Strategy</span>
            <h2 className="text-h2 tracking-tighter uppercase italic mb-12 leading-[0.9]">Bespoke Product & Pack</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 text-white py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-h1 tracking-tighter uppercase italic mb-10">Ready to develop?</h2>
          <Link href="/contact" className="inline-flex items-center gap-8 bg-green-600 text-white px-16 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group">
            START OEM PROJECT →
          </Link>
        </div>
      </section>
    </div>
  );
}
