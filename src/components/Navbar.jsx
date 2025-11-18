import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const navItems = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-sage-900 shadow-inner">
                <Leaf className="h-5 w-5 text-emerald-700" />
              </span>
              <span className="text-lg font-semibold tracking-wide text-stone-700">
                Lumière Spa
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-stone-600 hover:text-stone-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 text-emerald-900 px-5 py-2.5 font-medium shadow hover:opacity-90 transition-opacity">
                Book Now
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/40 backdrop-blur text-stone-700">
              {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-6 pb-6">
              <nav className="grid gap-3 pt-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-white/60 px-4 py-3 text-stone-700 shadow-sm">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-400 text-emerald-900 px-4 py-3 font-semibold shadow">
                  Book Now
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
