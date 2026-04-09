export default function Problem() {
  return (
    <section id="problem" className="relative bg-inverse-surface text-surface-container-lowest py-20 md:py-28 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-primary-container font-bold">
          O Problema
        </p>

        <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
          Você cansou de ouvir que a IA vai mudar tudo.{' '}
          <span className="italic text-primary-container">Mas na prática, mudou o quê?</span>
        </h2>

        <div className="space-y-6 font-body text-base md:text-lg text-surface-dim leading-relaxed">
          <p>
            <span className="text-primary-container font-mono">$ </span>
            Você já baixou o Claude, testou alguns comandos, implementou algumas tarefas de
            forma genérica, fechou a aba e voltou a fazer metade das demandas na mão.
          </p>
          <p>
            <span className="text-primary-container font-mono">$ </span>
            Ou talvez tenha ido mais longe. Assistiu vídeos, leu threads, comprou um curso
            básico e, mesmo assim, não sentiu uma grande mudança na rotina de trabalho.
          </p>
          <p>
            <span className="text-primary-container font-mono">$ </span>
            O problema não é a IA em si, mas a forma de plugar ela de verdade dentro da sua
            operação de trabalho.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-6 py-4">
          <p className="font-headline text-xl md:text-3xl text-primary-container leading-snug italic">
            A maioria das pessoas usa IA como Google para gerar texto bonito. Nessa imersão,
            você vai aprender a usá-la para montar uma equipe.
          </p>
        </div>

        <div className="pt-4">
          <a
            href="#checkout"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-xl font-label text-sm md:text-base uppercase tracking-wide border-2 border-primary text-primary-container hover:bg-primary hover:text-white transition-all"
          >
            Quero aprender a usar IA de verdade
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
