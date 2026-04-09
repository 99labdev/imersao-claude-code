const CARDS = [
  {
    icon: 'terminal',
    title: 'Claude Code configurado e funcionando',
    desc: 'Pronto para receber comandos, com contexto do seu negócio. Não é demo, é a sua instalação real.',
  },
  {
    icon: 'auto_awesome',
    title: '3+ Skills personalizados',
    desc: 'Automações específicas para as tarefas que mais consomem seu tempo. Criados e testados ao vivo.',
  },
  {
    icon: 'account_tree',
    title: '1 fluxo completo de operação',
    desc: 'Da entrada do dado até a saída formatada. Um pipeline inteiro rodando sem você precisar tocar.',
  },
  {
    icon: 'insights',
    title: 'Metodologia de diagnóstico 99LabDev',
    desc: 'O mesmo framework que usamos internamente para identificar onde a IA pode gerar resultado real.',
  },
]

export default function Results() {
  return (
    <section id="results" className="relative bg-inverse-surface text-surface-container-lowest py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-primary-container font-bold mb-4">
            Resultado Concreto
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
            Isso é o que vai estar rodando{' '}
            <span className="italic text-primary-container">na sua máquina</span>{' '}
            quando a imersão acabar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl p-7 border border-primary/30 bg-white/[0.03] backdrop-blur-sm hover:border-primary-container/60 hover:shadow-[0_0_40px_rgba(210,125,95,0.15)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 border border-primary/40 group-hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary-container text-2xl">
                    {c.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-surface-dim leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-container text-white px-8 py-5 rounded-xl font-label text-sm md:text-base uppercase tracking-wide shadow-2xl hover:-translate-y-1 transition-all"
          >
            Participar da imersão com o Hudson
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
