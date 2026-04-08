import hudson from '../assets/hudson.jpg'

export default function Speaker() {
  return (
    <section id="speaker" className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-20 relative scroll-mt-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-label text-xs uppercase tracking-widest text-primary opacity-70 mb-3">
          Palestrante
        </p>
        <h2 className="font-headline text-4xl md:text-6xl font-bold leading-none">
          <span className="text-on-surface">Quem </span>
          <span className="text-primary italic">palestrará</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center bg-surface-container/60 backdrop-blur-sm border border-outline-variant/20 rounded-2xl p-6 md:p-10 shadow-xl">
        {/* Photo */}
        <div className="relative mx-auto md:mx-0">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3"></div>
          <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-2xl border border-outline-variant/30 shadow-2xl">
            <img
              alt="Hudson Brendon"
              className="w-full h-full object-cover"
              src={hudson}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-center md:text-left">
          <div>
            <h3 className="font-headline text-3xl md:text-5xl font-bold text-on-surface leading-none">
              Hudson Brendon
            </h3>
            <p className="mt-2 font-label text-xs md:text-sm uppercase tracking-widest text-primary">
              Engenheiro de Software & Arquiteto de Soluções em IA
            </p>
            <a
              href="https://www.instagram.com/99hud/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-label text-sm text-secondary hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @99hud
            </a>
          </div>

          <p className="font-label text-sm md:text-base text-secondary leading-relaxed">
            Desenvolvedor de software sênior com mais de{' '}
            <span className="text-on-surface font-bold">15 anos de experiência</span>, com
            passagem por grandes empresas como{' '}
            <span className="text-on-surface font-bold">Magazine Luiza (Luiza Labs)</span>,{' '}
            <span className="text-on-surface font-bold">Facily</span> e{' '}
            <span className="text-on-surface font-bold">Fintechs</span>. CEO e fundador da{' '}
            <span className="text-on-surface font-bold">99LabDev</span>. Especialista em IA,
            automações, chatbots e integração de sistemas de marketing.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {['15+ anos', 'IA & Automação', 'Chatbots', 'CEO 99LabDev'].map((tag) => (
              <span
                key={tag}
                className="font-label text-[10px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
