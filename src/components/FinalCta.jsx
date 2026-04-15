export default function FinalCta() {
  return (
    <section id="final-cta" className="relative bg-primary text-white py-24 md:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
          Sua operação vai mudar{' '}
          <span className="italic">em uma tarde.</span>
        </h2>
        <div className="font-body text-base md:text-xl space-y-1 opacity-90">
          <p>2 de maio, às 14h — 4 horas ao vivo</p>
          <p className="font-bold">R$ 47</p>
        </div>
        <div className="pt-2">
          <a
            href="https://pay.kiwify.com.br/Xeg2n8T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-surface-dim px-10 py-6 rounded-xl font-label text-base md:text-lg uppercase tracking-wide shadow-2xl hover:-translate-y-1 transition-all"
          >
            Garantir minha vaga agora
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
