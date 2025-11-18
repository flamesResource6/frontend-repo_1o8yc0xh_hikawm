import { motion } from 'framer-motion'

const packages = [
  {
    title: 'Tranquility',
    price: 149,
    perks: ['60-min massage', 'Express facial', 'Herbal tea ritual'],
    accent: 'from-emerald-200 to-emerald-400',
  },
  {
    title: 'Radiance',
    price: 229,
    perks: ['90-min massage', 'Deep cleanse facial', 'Aromatherapy add-on'],
    featured: true,
    accent: 'from-amber-300 to-amber-400',
  },
  {
    title: 'Serenity',
    price: 329,
    perks: ['120-min massage', 'Hydra glow facial', 'Private steam suite'],
    accent: 'from-stone-200 to-stone-300',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-800">Wellness Packages</h2>
          <p className="mt-2 text-stone-500">Thoughtfully curated experiences designed for complete renewal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div key={pkg.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`relative rounded-3xl border ${pkg.featured ? 'border-amber-300/80' : 'border-white/50'} bg-white/60 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6`}> 
              {pkg.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 px-3 py-1 text-xs font-semibold text-amber-900 shadow">Popular</span>
              )}
              <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${pkg.accent} shadow-inner`} />
              <h3 className="mt-4 text-xl font-medium text-stone-800">{pkg.title}</h3>
              <div className="mt-2 text-4xl font-semibold text-stone-800">
                ${'{'}pkg.price{'}'}
                <span className="text-base font-normal text-stone-500"> / person</span>
              </div>
              <ul className="mt-4 space-y-2 text-stone-600">
                {pkg.perks.map((p) => (
                  <li key={p} className="rounded-xl border border-white/50 bg-white/60 px-4 py-2">{p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-gradient-to-br from-stone-800 to-stone-700 text-white px-5 py-2.5 shadow hover:opacity-95">Book Package</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
