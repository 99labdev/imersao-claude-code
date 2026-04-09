import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Format from './components/Format.jsx'
import Method from './components/Method.jsx'
import Results from './components/Results.jsx'
import ForWho from './components/ForWho.jsx'
import Speaker from './components/Speaker.jsx'
import Checkout from './components/Checkout.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container main-grid min-h-screen">
      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <Problem />
        <Format />
        <Method />
        <Results />
        <ForWho />
        <Speaker />
        <Checkout />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
