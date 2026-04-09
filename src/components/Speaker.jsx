import hudson from '../assets/hudson.jpg'

const BADGES = [
  '15+ anos de engenharia',
  'CEO 99LabDev',
  '30+ vídeos sobre Claude',
  'IA aplicada a operações reais',
]

export default function Speaker() {
  return (
    <section id="speaker" className="relative max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 scroll-mt-24">
      <div className="text-center mb-12">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
          Quem Lidera
        </p>
        <h2 className="font-headline text-4xl md:text-6xl font-bold leading-none">
          <span className="text-on-surface">Hudson </span>
          <span className="text-primary italic">Brendon</span>
        </h2>
        <p className="mt-3 font-label text-xs md:text-sm uppercase tracking-widest text-primary">
          Engenheiro de Software · CEO 99LabDev · @99hud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center bg-surface-container/60 backdrop-blur-sm border border-outline-variant/30 rounded-2xl p-6 md:p-10 shadow-xl">
        <div className="relative mx-auto md:mx-0">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3" />
          <div className="relative w-56 h-72 md:w-72 md:h-96 overflow-hidden rounded-2xl border border-outline-variant/30 shadow-2xl">
            <img alt="Hudson Brendon" className="w-full h-full object-cover" src={hudson} />
          </div>
        </div>

        <div className="space-y-5 font-body text-sm md:text-base text-secondary leading-relaxed">
          <p>
            Eu passei{' '}
            <span className="text-on-surface font-bold">15 anos construindo softwares</span>{' '}
            para empresas como Magazine Luiza, Facily e fintechs. O tipo de trabalho onde você
            monta sistemas que processam milhões de transações e precisa que tudo funcione sem
            supervisão.
          </p>
          <p>
            Quando o Claude Code surgiu em maio de 2025, eu vi a mesma lógica se aplicar a
            qualquer operação. Não importa se você é empresário, médico, advogado, dentista,
            contador, infoprodutor, escritório ou agência de marketing. Os princípios são os
            mesmos:{' '}
            <span className="text-on-surface font-bold">
              diagnosticar o gargalo, montar a automação, orquestrar o fluxo, multiplicar o
              resultado
            </span>
            .
          </p>
          <p>
            Nos últimos meses, publiquei{' '}
            <span className="text-on-surface font-bold">mais de 30 vídeos</span> mostrando
            como usar o Claude na prática. Configuração, truques, integrações com Google,
            LinkedIn, Instagram, geração de texto, criação de sites. Tudo que eu aprendo, eu
            testo antes e compartilho com vocês.
          </p>
          <p className="text-on-surface font-bold">
            A imersão é a versão amplificada de tudo isso. 4 horas para construir junto o que
            eu levei meses para refinar.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {BADGES.map((tag) => (
              <span
                key={tag}
                className="font-label text-[10px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="https://www.instagram.com/99hud/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-sm text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              Veja mais no @99hud
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="#checkout"
          className="inline-flex items-center gap-3 bg-primary hover:bg-on-primary-container text-white px-8 py-5 rounded-xl font-label text-sm md:text-base uppercase tracking-wide shadow-xl hover:-translate-y-1 transition-all"
        >
          Quero minha vaga
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  )
}
