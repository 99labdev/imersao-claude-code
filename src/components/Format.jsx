export default function Format() {
  const info = [
    { label: 'Quando', value: '2 de maio, sábado', icon: 'calendar_month' },
    { label: 'Horário', value: '14h às 18h (Brasília)', icon: 'schedule' },
    { label: 'Onde', value: 'Zoom ao vivo, chat aberto', icon: 'videocam' },
    { label: 'Vagas', value: '100 vagas', icon: 'groups' },
    { label: 'Gravação', value: 'Não ficará gravada', icon: 'videocam_off' },
  ]

  return (
    <section id="format" className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold">
            O Formato
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-on-surface">
            4 horas ao vivo.{' '}
            <span className="italic text-primary">Tudo construído na sua frente.</span>
          </h2>
          <div className="space-y-4 font-body text-base md:text-lg text-secondary leading-relaxed">
            <p>Não é palestra. Não é curso gravado. Não é PDF com prints.</p>
            <p>
              É uma sessão ao vivo pelo Zoom onde eu vou montar, na sua frente, uma operação
              de IA usando Claude Code. Você acompanha, replica, pergunta. No final, sai com
              os mesmos sistemas que rodam dentro da{' '}
              <span className="text-on-surface font-bold">99LabDev</span>.
            </p>
          </div>
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 bg-primary hover:bg-on-primary-container text-white px-8 py-5 rounded-xl font-label text-sm md:text-base uppercase tracking-wide shadow-xl hover:-translate-y-1 transition-all"
          >
            Quero aplicar esse método na minha operação
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {info.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container/60 backdrop-blur-sm border border-outline-variant/30 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {item.icon}
                </span>
                <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                  {item.label}
                </p>
              </div>
              <p className="font-headline text-lg md:text-xl text-on-surface font-bold leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
