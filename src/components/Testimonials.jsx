import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Olivia M.',
    quote: 'The most serene experience I have ever had. Every detail is perfection—textures, scents, and the warmth of the team.',
  },
  {
    name: 'Daniel K.',
    quote: 'The Radiance package left my skin glowing for days. The space feels luxurious yet comforting.',
  },
  {
    name: 'Sophia R.',
    quote: 'From the tea lounge to the aromatherapy, everything was thoughtfully curated. Highly recommend.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 to-emerald-50/20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-800">What Our Guests Say</h2>
          <p className="mt-2 text-stone-500">Real moments of calm and care, shared by our community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/50 bg-white/60 backdrop-blur p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-stone-700 leading-relaxed">{t.quote}</p>
              <div className="mt-4 text-sm font-medium text-stone-600">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
