import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function OEMPage() {
  const customItems = [
    { title: "Product Specification", desc: "Size, thickness, shape, finish and functional requirements matched to your technical drawings.", step: "1" },
    { title: "Sustainable Packaging", desc: "Selection of FSC paper wraps, compostable sleeves, or bio-based blister options.", step: "2" },
    { title: "Primary Branding", desc: "Hot-stamping, laser etching, or multi-color sleeve printing for retail-ready presentation.", step: "3" },
    { title: "Integrated Supply Chain", desc: "Unified export documentation, automated invoicing, and rapid port-side delivery.", step: "4" }
  ];

  const timeline = [
    { stage: "Prototyping", duration: "7 Days", desc: "Technical drawing confirmation and rapid sample production." },
    { stage: "Molding", duration: "15 Days", desc: "Custom mold fabrication and industrial pilot testing." },
    { stage: "Bulk Production", duration: "30 Days", desc: "High-volume integrated manufacturing and multi-stage QC." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Bespoke Development"
        subtitle="Scale your proprietary brand with Jaxbin's end-to-end OEM/ODM framework. From technical drawing to retail-ready global distribution."
        image="/assets/images/sections/oem.png"
      />

      {/* Project Velocity Matrix Section */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Section 02 / Project Velocity</span>
            <h2 className="text-h2 tracking-tighter uppercase italic leading-[0.9]">Customization Timeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {timeline.map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl group hover:border-green-500 transition-all duration-700">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6 group-hover:text-green-500">{item.stage}</p>
                   <p className="text-5xl font-black text-slate-900 mb-6 tracking-tighter italic">{item.duration}</p>
                   <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="aspect-[4/5] bg-slate-100 rounded-[80px] overflow-hidden relative border border-slate-200 shadow-2xl group">
             <img src="/assets/images/sections/oem.png" alt="OEM Packaging" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block italic">Section 03 / Strategic Cell</span>
            <h2 className="text-h2 tracking-tighter uppercase italic mb-16 leading-[0.9]">Bespoke Product &<br/>Advanced Packing</h2>
            <div className="space-y-12">
              {customItems.map((item, idx) => (
                <div key={idx} className="flex gap-10 group">
                  <div className="flex-shrink-0 w-20 h-20 bg-slate-950 text-white rounded-[30px] flex items-center justify-center font-black text-3xl group-hover:bg-green-600 transition-all shadow-2xl shadow-slate-950/20">
                    {item.step}
                  </div>
                  <div className="border-b border-slate-50 pb-10 flex-grow">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-none">{item.title}</h3>
                    <p className="text-slate-500 text-xl leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-h1 tracking-tighter uppercase italic mb-12 leading-none">Ready to<br/>Develop?</h2>
          <p className="text-2xl text-slate-400 font-medium mb-20 max-w-3xl mx-auto leading-tight">Engage our bespoke development cell to match material performance with your brand's unique specifications.</p>
          <Link href="/contact" className="inline-flex items-center gap-10 bg-green-600 text-white px-24 py-10 rounded-[50px] font-black text-3xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group uppercase tracking-widest">
            START OEM PROJECT →
          </Link>
        </div>
      </section>
    </div>
  );
}
