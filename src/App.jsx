import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedTreatments from './components/FeaturedTreatments'
import About from './components/About'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTreatments />
        <About />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <footer className="relative border-t border-stone-200/60 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Lumière Spa & Wellness. All rights reserved.</p>
          <div className="flex items-center gap-6 text-stone-500 text-sm">
            <a href="#treatments" className="hover:text-stone-800">Treatments</a>
            <a href="#packages" className="hover:text-stone-800">Packages</a>
            <a href="#contact" className="hover:text-stone-800">Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
