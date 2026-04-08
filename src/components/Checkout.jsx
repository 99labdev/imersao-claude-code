export default function Checkout() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12 relative">
      <div className="bg-inverse-surface text-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-error"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary"></div>
          <span className="ml-4 font-label text-xs opacity-50 uppercase tracking-tighter">
            Terminal — v4.5.0-sonnet
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Content Column */}
          <div className="space-y-4">
            <p className="font-label text-lg md:text-xl text-primary font-bold tracking-tight">
              Checkout: Garanta sua Imersão Claude Code
            </p>
            <div className="font-label text-sm leading-relaxed opacity-80 space-y-4">
              <p>
                <span className="text-primary-container font-bold">user@claude:~$</span> Você já imaginou criar sites, automatizar tarefas e desenvolver ferramentas digitais sem escrever uma única linha de código do zero? Na Imersão Claude Code, você vai descobrir como usar a inteligência artificial como seu parceiro de desenvolvimento — mesmo sem ter formação técnica.
              </p>
              <p>
                O Claude Code é uma ferramenta da Anthropic que permite criar projetos completos direto do terminal, usando linguagem natural. Você descreve o que precisa, e a IA constrói para você: landing pages, automações, planilhas inteligentes, aplicativos simples e muito mais.
              </p>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[O que você vai aprender]</p>
                <p>
                  Durante a imersão, vamos sair do zero e chegar a resultados práticos. Você vai entender como dar comandos claros para a IA, como revisar e ajustar o que ela entrega, e como transformar suas ideias em projetos funcionais — tudo isso com exemplos reais do dia a dia de profissionais de saúde, direito, marketing e educação.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[Para quem é essa imersão?]</p>
                <p>
                  Para empreendedores, profissionais liberais e criadores de conteúdo que querem usar tecnologia a seu favor sem depender de um desenvolvedor para cada necessidade. Se você sabe explicar o que precisa, já tem a habilidade mais importante.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[O que você leva dessa experiência]</p>
                <p>
                  Autonomia para criar soluções digitais, economia de tempo e dinheiro, e uma nova forma de pensar sobre tecnologia — não como algo distante, mas como uma ferramenta acessível que trabalha para você.
                </p>
              </div>
            </div>
          </div>
          {/* Purchase Column */}
          <div className="flex flex-col justify-center lg:border-l lg:border-surface-variant/10 lg:pl-12 space-y-8 pt-8 lg:pt-0 border-t lg:border-t-0 border-surface-variant/10">
            <div className="space-y-2">
              <span className="font-label text-xs uppercase opacity-50 block">Investimento</span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-5xl md:text-6xl font-bold text-primary">R$ 47</span>
                <span className="font-label text-xs opacity-50 uppercase">/ Acesso total</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-wider text-xs">Benefícios Incluídos:</p>
              <ul className="font-label text-sm space-y-3 uppercase tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Acesso a imersão de 5h
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Acesso a comunidade no WhatsApp
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Acesso a comunidade do Discord
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button className="bg-primary hover:bg-on-primary-container text-white w-full py-5 md:py-6 rounded-xl font-label text-lg md:text-xl transition-all shadow-xl hover:-translate-y-1 flex justify-center items-center gap-3">
                Compre agora <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="mt-4 text-center font-label text-[10px] uppercase tracking-widest opacity-40">
                Turma 04 — Limitado a 150 vagas
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-surface-variant/10">
          <p className="font-label text-xs text-outline-variant italic text-right">
            Último acesso: Qua 23 Abr 08:42:15 no console
          </p>
        </div>
      </div>
    </section>
  )
}
