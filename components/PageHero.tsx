import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
  image?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, category, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-20">
          <img src={image} className="w-full h-full object-cover blur-[120px] scale-150" alt="" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-green-500 mb-16">
          <Link href="/" className="hover:text-white transition text-green-500 no-underline">Home</Link>
          {breadcrumbs?.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span className="text-slate-800">/</span>
              <Link href={crumb.href} className="hover:text-white transition text-green-500 no-underline">{crumb.label}</Link>
            </span>
          ))}
          <span className="text-slate-800">/</span>
          <span className="text-white">{category || title}</span>
        </nav>
        <div className="max-w-5xl">
          {category && <p className="text-green-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">{category}</p>}
          <h1 className="text-h1 tracking-tighter italic leading-[0.8] uppercase mb-10">
            {title}
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl leading-tight font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
