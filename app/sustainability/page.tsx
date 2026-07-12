import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function SustainabilityPage() {
  const materials = [
    { title: "Wood and Bamboo", desc: "Review species, source, surface treatment, adhesives, coatings and packaging.", id: "1" },
    { title: "Bagasse Fiber", desc: "Confirm fiber formulation, additives, barrier requirements and applicable test reports.", id: "2" },
    { title: "Paper Products", desc: "Identify board type, printing, lining or coating and local recovery options.", id: "3" },
    { title: "CPLA", desc: "Use industrial-compostability language only when supported and when appropriate facilities exist.", id: "4" }
  ];

  const timeline = [
    { material: "Birch Wood", period: "90 Days", environment: "Industrial Compost", result: "100% Biomass" },
    { material: "Moso Bamboo", period: "120 Days", environment: "Soil / Aerobic", result: "Natural Breakdown" },
    { material: "Sugarcane Bagasse", period: "60-90 Days", environment: "Industrial / Home", result: "Nutrient-rich Compost" },
    { material: "Kraft Paper", period: "30-60 Days", environment: "Mixed Recovery", result: "Fiber Recycled" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Verified Sustainability"
        subtitle="Better claims begin with exact product facts. We help buyers identify material composition, food-contact safety, and realistic end-of-life routes."
        image="/assets/images/sections/sustainability.png"
      />

      {/* Composting Timeline Module */}
      <section className="py-32 bg-slate-50 border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Section 02 / Lifecycle Intelligence</span>
            <h2 className="text-h2 tracking-tighter uppercase italic">Composting Timeline</h2>
          </div>
          <div className="overflow-x-auto rounded-[40px] shadow-2xl shadow-slate-200">
             <table className="w-full border-collapse bg-white text-left">
                <thead>
                   <tr className="bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                      <th className="p-10 border-r border-white/5">Substrate Material</th>
                      <th className="p-10 border-r border-white/5">Degradation Window</th>
                      <th className="p-10 border-r border-white/5">Optimal Environment</th>
                      <th className="p-10">End-of-Life Result</th>
                   </tr>
                </thead>
                <tbody className="text-sm font-bold text-slate-600">
                   {timeline.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 group hover:bg-green-50/50 transition-colors">
                         <td className="p-8 border-r border-slate-50 text-slate-900 font-black uppercase tracking-tight">{row.material}</td>
                         <td className="p-8 border-r border-slate-50 text-green-600">{row.period}</td>
                         <td className="p-8 border-r border-slate-50 text-slate-500">{row.environment}</td>
                         <td className="p-8 text-slate-900 italic">{row.result}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Section 03 / Material Stewardship</span>
            <h2 className="text-h2 tracking-tighter uppercase italic mb-12">Substrate Integrity</h2>
            <div className="space-y-6">
              {materials.map((m) => (
                <div key={m.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-green-500 transition-all group">
                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-green-700">{m.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden relative shadow-2xl group border border-slate-200">
             <img src="/assets/images/sections/sustainability.png" alt="Plant-based materials" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* Compliance CTA */}
      <section className="bg-green-600 text-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 tracking-tighter uppercase italic mb-10">Regulatory Documentation</h2>
          <p className="text-green-50 mb-16 text-xl font-medium leading-relaxed">Request current test reports (FDA, LFGB, FSC) relevant to your specific market and material selection.</p>
          <Link href="/contact" className="bg-slate-950 text-white px-16 py-8 rounded-[40px] font-black text-2xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl group">
            REQUEST CERTIFICATION DATA →
          </Link>
        </div>
      </section>
    </div>
  );
}
