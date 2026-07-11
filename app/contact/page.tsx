'use server';

import data from '../../data/products.json';

export default async function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Request A Quote</h1>
        <p className="text-slate-600">
          Get direct factory pricing. Please fill out the form below and our export team will contact you within 12 hours.
        </p>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-8 md:p-12">
        <form className="space-y-8">
          {/* Basic Info Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Your Name *</label>
              <input type="text" required className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-green-600 transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Business Email *</label>
              <input type="email" required className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-green-600 transition" placeholder="john@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Company Name</label>
              <input type="text" className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-green-600 transition" placeholder="Eco Wholesalers LLC" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Destination Country *</label>
              <input type="text" required className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-green-600 transition" placeholder="United States" />
            </div>
          </div>

          {/* Product Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-slate-700">Interested Categories *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.categories.map((cat) => (
                <label key={cat.id} className="flex items-start p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3 rounded border-slate-300 text-green-600 focus:ring-green-500" value={cat.id} />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{cat.name}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Order Volume */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700">Estimated Order Quantity</label>
            <select className="w-full border border-slate-200 rounded-lg p-3 bg-white focus:outline-none focus:border-green-600 transition text-slate-600">
              <option>Sample order / LCL</option>
              <option>1x 20GP Container</option>
              <option>1x 40HQ Container</option>
              <option>Multi-container contract</option>
            </select>
          </div>

          {/* Detailed Requirements */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700">Detailed Requirements (Size, OEM Logo, Packaging, etc.)</label>
            <textarea rows={5} className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-green-600 transition" placeholder="Please specify your requirements..."></textarea>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition tracking-wide text-center">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
