import sunburst from '../assets/sunburst.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-16 scroll-mt-24"
    >
      {/* Floating "100 VAGAS" badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 lg:-top-2 lg:-right-2 xl:-right-6 z-30 rotate-6">
        <div className="bg-error text-white border-2 border-white/30 shadow-2xl px-4 py-3 rounded-2xl animate-pulse">
          <p className="font-label text-[10px] uppercase tracking-widest opacity-90">Apenas</p>
          <p className="font-headline text-2xl md:text-3xl font-bold leading-none">100 VAGAS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center relative">
        {/* Left: Video embed placeholder */}
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-primary/10 rounded-3xl rotate-[-1deg]" />
          <div className="relative aspect-video w-full bg-inverse-surface rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Video embed goes here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-surface-container-lowest/80">
              <span className="material-symbols-outlined text-6xl text-primary-container">play_circle</span>
              <p className="font-label text-xs uppercase tracking-widest opacity-60">Embed do vídeo do Hudson</p>
            </div>
            {/* Terminal dots */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-tertiary" />
            </div>
          </div>
        </div>

        {/* Right: Headline + CTA */}
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <img src={sunburst} alt="" className="w-8 h-8 md:w-10 md:h-10 mt-1" />
            <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary font-bold leading-relaxed">
              Imersão ao vivo<br />
              Claude para Empresas e Profissionais<br />
              <span className="opacity-70">Método 99LabDev</span>
            </p>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] text-on-surface">
            Em 4 horas, aprenda a montar um{' '}
            <span className="italic text-primary">time de IA</span> que trabalha para você.
          </h1>

          <p className="font-body text-base md:text-lg text-secondary leading-relaxed">
            Você vai sair dessa imersão sabendo configurar Claude Code, Skills rodando e fluxos
            automatizados dentro da sua operação. Ao vivo junto comigo,{' '}
            <span className="text-on-surface font-bold">sem precisar saber programar</span>.
          </p>

          <div className="flex flex-wrap gap-2">
            {['2 DE MAIO', '14H ÀS 18H', '100% ONLINE', '100 VAGAS'].map((b) => (
              <span
                key={b}
                className="font-label text-[10px] md:text-xs uppercase tracking-wider px-3 py-2 rounded-full bg-primary/10 text-primary border border-primary/30"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#checkout"
              className="bg-primary hover:bg-on-primary-container text-white inline-flex items-center justify-center gap-3 px-8 py-5 md:py-6 rounded-xl font-label text-base md:text-lg uppercase tracking-wide shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              Garantir minha vaga por R$ 47
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <p className="mt-3 font-label text-[11px] md:text-xs text-secondary opacity-70">
              Lote promocional primeira turma. Valor regular: R$ 247. Garantia de 7 dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
