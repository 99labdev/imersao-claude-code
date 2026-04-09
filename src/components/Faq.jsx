import { useState } from 'react'

const FAQS = [
  {
    q: 'Onde acontece o evento?',
    a: '100% online, ao vivo pelo Zoom, você participa de onde estiver. Câmera é opcional, chat fica aberto o tempo todo para perguntas.',
  },
  {
    q: 'Não tenho experiência técnica. Vou conseguir acompanhar?',
    a: 'Sim. A imersão foi desenhada para quem não programa. Se você sabe instalar um aplicativo e seguir instruções na tela, você consegue. Eu faço junto com você, passo a passo.',
  },
  {
    q: 'Serve para qualquer tipo de empresa ou só para tech?',
    a: 'Qualquer tipo. O método funciona para escritórios de advocacia, consultorias, e-commerces, agências, freelancers e profissionais liberais de todos os nichos. Se você tem tarefas repetitivas na operação, funciona.',
  },
  {
    q: 'A imersão ficará gravada?',
    a: 'Não. Mas você pode comprar a gravação e rever quantas vezes quiser.',
  },
  {
    q: 'Preciso assinar o Claude para participar?',
    a: 'O Claude tem uma versão gratuita que funciona. Para usar Claude Code, existe um custo de uso baseado em consumo. No início da imersão, eu explico exatamente o que você precisa e como configurar com o menor custo possível.',
  },
  {
    q: 'Quanto tempo até eu ver resultado?',
    a: 'Dentro da própria imersão. A proposta é que você saia com direção clara e tarefas funcionando. Se você acompanhar ao vivo e replicar, sai no mesmo dia com automações rodando.',
  },
  {
    q: 'Tem garantia?',
    a: '7 dias. Devolvemos 100% do valor, sem perguntas e sem burocracia.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-8 py-20 md:py-28 relative scroll-mt-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
          FAQ
        </p>
        <h2 className="font-headline text-4xl md:text-6xl font-bold leading-none">
          <span className="text-on-surface">Perguntas </span>
          <span className="text-primary italic">frequentes</span>
        </h2>
      </div>

      <ul className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <li
              key={item.q}
              className={`bg-surface-container/60 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-primary/40 shadow-xl'
                  : 'border-outline-variant/20 hover:border-outline-variant/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-label text-sm md:text-base font-bold uppercase tracking-wide text-on-surface">
                  {item.q}
                </span>
                <span
                  className={`material-symbols-outlined text-primary text-2xl transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  add
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-7 pb-6 font-body text-sm md:text-base text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
