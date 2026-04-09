const YES = [
  'Você tem uma empresa, agência ou operação e quer colocar IA para trabalhar de verdade.',
  'Você é um profissional solo e quer fazer o trabalho de 3 pessoas sem contratar ninguém.',
  'Você tem equipe e quer montar um sistema de IA que o time inteiro consiga usar.',
  'Você já tentou usar IA por conta própria e ficou com a sensação de que está subutilizando.',
]

const NO = [
  'Você quer um curso teórico sobre "o futuro da IA" sem aplicação prática.',
  'Você espera resultados mágicos sem dedicar um mínimo de 4 horas de atenção.',
  'Você já é desenvolvedor avançado de Claude Code e quer conteúdo de nível engenharia — essa imersão é implementação, não arquitetura profunda.',
]

export default function ForWho() {
  return (
    <section id="for-who" className="relative max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="text-center mb-14">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">
          Para Quem É
        </p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-on-surface max-w-3xl mx-auto">
          Você tem uma operação que roda no manual e{' '}
          <span className="italic text-primary">quer mudar isso em uma tarde?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-surface-container/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl p-7 md:p-9 shadow-xl">
          <p className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6">
            Isso é pra você se…
          </p>
          <ul className="space-y-5">
            {YES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check_circle
                </span>
                <span className="font-body text-sm md:text-base text-on-surface leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface-container/40 backdrop-blur-sm border border-outline-variant/40 rounded-2xl p-7 md:p-9 shadow-sm">
          <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-6">
            Não é pra você se…
          </p>
          <ul className="space-y-5">
            {NO.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-error/70 mt-0.5">
                  cancel
                </span>
                <span className="font-body text-sm md:text-base text-secondary leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#checkout"
          className="inline-flex items-center gap-3 bg-primary hover:bg-on-primary-container text-white px-10 py-6 rounded-xl font-label text-base md:text-lg uppercase tracking-wide shadow-2xl hover:-translate-y-1 transition-all"
        >
          Entrar na turma de 2 de maio
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  )
}
