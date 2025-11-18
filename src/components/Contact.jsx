import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you. We have received your request and will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-stone-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-800">Reserve Your Moment</h2>
            <p className="mt-3 text-stone-600">Tell us a little about your ideal experience. Our concierge will confirm availability and tailor details to your preferences.</p>
            <div className="mt-6 rounded-3xl border border-white/50 bg-white/60 backdrop-blur p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="First name" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
                  <input required placeholder="Last name" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" required placeholder="Email" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
                  <input type="tel" placeholder="Phone (optional)" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 text-stone-600 outline-none focus:ring-2 focus:ring-emerald-300">
                    <option>Massage</option>
                    <option>Facial</option>
                    <option>Aromatherapy</option>
                    <option>Wellness package</option>
                  </select>
                  <input type="date" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 text-stone-600 outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <textarea rows="4" placeholder="Share any preferences or notes" className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" />
                <button type="submit" className="rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 text-emerald-900 px-6 py-3 font-medium shadow hover:opacity-90 transition-opacity">Submit Request</button>
                {status && <p className="text-emerald-700 text-sm">{status}</p>}
              </form>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop" alt="Calm botanical" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
