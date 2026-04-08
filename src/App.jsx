import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Checkout from './components/Checkout.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container main-grid min-h-screen">
      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <Checkout />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
