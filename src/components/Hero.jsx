import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#fff6e9_0%,#f7efe6_35%,#efe7df_60%,#e7e0d9_100%)]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="py-16">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-800">
              A Sanctuary of Calm & Refined Wellness
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-5 text-lg text-stone-600 leading-relaxed">
              Experience bespoke treatments in a serene, luxury setting. Soft textures, warm gold accents, and the subtle scent of botanicals set the tone for deep relaxation.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex items-center gap-4">
              <a href="#contact" className="rounded-full bg-gradient-to-br from-amber-300 to-amber-400 text-amber-900 px-6 py-3 font-medium shadow-[0_10px_30px_rgba(217,119,6,0.25)] hover:shadow-[0_12px_40px_rgba(217,119,6,0.35)] transition-shadow">
                Book Now
              </a>
              <a href="#treatments" className="rounded-full border border-amber-300/60 bg-white/60 backdrop-blur px-6 py-3 text-stone-700">Explore Treatments</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: 'Massages', value: '12+' },
                { label: 'Facials', value: '9+' },
                { label: 'Aromatherapy', value: '6+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 p-5 shadow-sm">
                  <div className="text-2xl font-semibold text-stone-800">{stat.value}</div>
                  <div className="text-sm text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/40 bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_40px_rgba(0,0,0,0.08)]">
            <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
