const STEPS = [
  {
    n: '01',
    title: 'Diagnosticar',
    desc: 'Onde seu tempo vai embora? Quais tarefas se repetem todo dia? Antes de configurar qualquer coisa, vamos mapear sua operação e identificar 3 pontos principais onde a IA vai atuar com impacto imediato.',
    out: 'Mapa de diagnóstico da sua operação.',
  },
  {
    n: '02',
    title: 'Montar',
    desc: 'Aqui a gente coloca a mão na massa. Irei configurar ao vivo a estrutura de Claude Code, Skills e automações. Você replica no seu ambiente enquanto acompanha.',
    out: 'Claude Code configurado + Skills personalizados.',
  },
  {
    n: '03',
    title: 'Orquestrar',
    desc: 'Skills soltos não resolvem. Nessa etapa, conectamos tudo: um fluxo completo onde as peças conversam entre si (entrada, processamento, saída formatada). Nada de remendos.',
    out: 'Fluxos automatizados completos em produção.',
  },
  {
    n: '04',
    title: 'Multiplicar',
    desc: 'Agora que funciona, como escalar? Você aprende a replicar o método para resolver outros gargalos, treinar sua equipe e transformar o que construímos em serviço para seus clientes.',
    out: 'Um método replicável para qualquer novo projeto.',
  },
]

export default function Method() {
  return (
    <section id="method" className="relative bg-surface-container-lowest py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary text-white border border-primary-container/40 px-5 py-2 rounded-full mb-6">
            <p className="font-label text-[11px] uppercase tracking-[0.25em] font-bold">
              Método 99LabDev
            </p>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-on-surface">
            Tudo que você vai aprender{' '}
            <span className="italic text-primary">em 4 horas</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto font-body text-base md:text-lg text-secondary">
            Cada etapa é construída em cima da anterior. Você participa, sai com direção,
            pronto para aplicar no seu negócio e obter resultados práticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl p-6 shadow-xl border border-primary/20 bg-gradient-to-br"
              style={{
                background: `linear-gradient(135deg, rgba(146,74,48,${0.08 + i * 0.06}), rgba(146,74,48,${0.18 + i * 0.08}))`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-headline text-4xl md:text-5xl font-bold text-primary">
                  {s.n}
                </span>
                <div className="h-px flex-1 bg-primary/30" />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="border-t border-primary/20 pt-3">
                <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                  Você sai com
                </p>
                <p className="font-body text-sm text-on-surface font-bold">{s.out}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    arrow_forward
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-label text-xs uppercase tracking-wider text-secondary opacity-70">
          O mesmo framework que usamos nos projetos da 99LabDev.
        </p>

        <div className="text-center mt-10">
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 bg-primary hover:bg-on-primary-container text-white px-8 py-5 rounded-xl font-label text-sm md:text-base uppercase tracking-wide shadow-xl hover:-translate-y-1 transition-all"
          >
            Quero sair da imersão com tudo isso rodando
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
