import { Leaf, Sparkles, Flower2 } from 'lucide-react'
import { motion } from 'framer-motion'

const treatments = [
  {
    icon: <Leaf className="h-6 w-6 text-emerald-700" />,
    title: 'Botanical Massages',
    desc: 'Deeply restorative massages infused with organic oils and sage notes.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-amber-700" />,
    title: 'Radiance Facials',
    desc: 'Glow-boosting treatments using mineral-rich clays and gentle exfoliation.',
    image: 'https://images.unsplash.com/photo-1505575972945-280f49d3f1c1?q=80&w=1400&auto=format&fit=crop',
  },
  {
    icon: <Flower2 className="h-6 w-6 text-rose-700" />,
    title: 'Aromatherapy',
    desc: 'A curated blend of calming aromas designed to restore balance.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcm9tYXRoZXJhcHl8ZW58MHwwfHx8MTc2MzQ5MTY2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function FeaturedTreatments() {
  return (
    <section id="treatments" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-800">Featured Treatments</h2>
          <p className="mt-2 text-stone-500">Carefully designed experiences that soothe body and mind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatments.map((t, idx) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: idx * 0.05 }} className="group overflow-hidden rounded-3xl border border-white/50 bg-white/60 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="relative h-56 overflow-hidden">
                <img src={t.image} alt={t.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-white/50 shadow">
                  {t.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-800">{t.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
