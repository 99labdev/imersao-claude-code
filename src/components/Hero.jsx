import LaptopFrame from './LaptopFrame.jsx'
import FolderPrompts from './FolderPrompts.jsx'
import DateBadge from './DateBadge.jsx'
import sunburst from '../assets/sunburst.png'

export default function Hero() {
  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12 flex flex-col items-center overflow-hidden scroll-mt-24">
      {/* ===== Mobile layout (stacked, < md) ===== */}
      <div className="md:hidden w-full flex flex-col items-center gap-8 relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

        <h1 className="font-headline text-5xl sm:text-6xl font-bold leading-none text-center relative z-10">
          <span className="text-on-surface">IMERSÃO</span>
          <span className="text-primary block -mt-1">Claude Code</span>
        </h1>

        <div className="relative z-10 w-32 h-32">
          <img alt="Star" className="w-full h-full object-contain" src={sunburst} />
        </div>

        <div className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/30 px-6 py-4 rounded-2xl shadow-xl relative z-10">
          <p className="font-headline text-2xl text-on-surface text-center">2 de Maio · 14h00</p>
        </div>

        <div className="w-full max-w-md relative z-10">
          <LaptopFrame />
        </div>
      </div>

      {/* ===== Desktop / tablet layout (md+) ===== */}
      <div className="hidden md:flex w-full relative group min-h-[600px] items-center justify-center">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
        <div className="relative w-full max-w-5xl aspect-[16/9] flex flex-col items-center justify-center">
          <LaptopFrame />
          <FolderPrompts />
          <DateBadge />
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-40 pointer-events-none">
            <div className="relative flex items-center gap-8 translate-y-8">
              <div className="w-48 h-48 relative">
                <img alt="Star" className="w-full h-full object-contain" src={sunburst} />
              </div>
              <div className="flex flex-col">
                <h1 className="font-headline text-8xl md:text-9xl font-bold leading-none">
                  <span className="text-white">IMERSÃO</span>
                  <span className="text-black block -mt-2">Claude Code</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA (compartilhado) ===== */}
      <div className="mt-12 md:mt-24 flex flex-col items-center gap-6 md:gap-8 z-10 w-full">
        <a
          href="#checkout"
          className="bg-primary hover:bg-on-primary-container text-white w-full sm:w-auto px-8 sm:px-12 py-5 md:py-6 rounded-xl font-label text-base md:text-lg transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 duration-300"
        >
          Garanta sua vaga <span className="material-symbols-outlined">arrow_forward</span>
        </a>
        <p className="max-w-xl text-center font-body text-sm text-secondary italic opacity-70 px-2">
          Uma masterclass em precisão técnica. Unindo a lacuna entre o design arquitetônico criativo e agentes de código de IA avançados.
        </p>
      </div>
    </section>
  )
}
