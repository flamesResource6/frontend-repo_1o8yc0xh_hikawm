import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-sm">
              <img src="https://images.unsplash.com/photo-1741660419957-2cb7baa19e3f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGElMjBMb2JieXxlbnwwfDB8fHwxNzYzNDkxNjY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Spa Lobby" className="h-full w-full object-cover"/>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-sm">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" alt="Treatment Room" className="h-full w-full object-cover"/>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-sm">
              <img src="https://images.unsplash.com/photo-1744722952654-798e10573723?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWxheGF0aW9uJTIwQXJlYXxlbnwwfDB8fHwxNzYzNDkxNjY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Relaxation Area" className="h-full w-full object-cover"/>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-800">About Our Sanctuary</h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Nestled in the heart of the city, our spa marries modern design with natural elements. Soft beige walls, warm gold accents, and hints of sage create an atmosphere of effortless luxury.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Heated stone beds','Private steam suites','Tea lounge & botanicals','Expert therapists'].map((f)=> (
                <div key={f} className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-4 text-stone-700 shadow-sm">{f}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
