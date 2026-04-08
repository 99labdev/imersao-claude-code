import { useState } from 'react'

const FAQS = [
  {
    q: 'Onde acontece o evento?',
    a: '100% online, ao vivo pelo Zoom. São 100 vagas para garantir uma experiência de implementação de qualidade, com possibilidade de interação em tempo real.',
  },
  {
    q: 'Não tenho experiência técnica. Vou conseguir implementar?',
    a: 'Sim. Não é necessário nenhum conhecimento de programação, nem experiência prévia com I.A. Você aprende a instruir o Claude em português e ele executa. A barreira técnica não existe nessa imersão.',
  },
  {
    q: 'Serve para qualquer tipo de empresa ou só para infoprodutos?',
    a: 'Para qualquer empresa, de qualquer nicho. Agência de marketing, e-commerce, negócio de serviços, infoproduto, empresa com time ou empresário solo. O sistema se adapta ao tipo de operação que você tem.',
  },
  {
    q: 'A imersão ficará gravada?',
    a: 'A imersão acontece ao vivo e você deve participar no dia 2 de Maio. Mas na hora de finalizar sua inscrição, você terá a opção de adquirir o acesso à gravação.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. 7 dias de garantia incondicional. Se não ficar satisfeito, é só solicitar o reembolso, sem perguntas e sem burocracia.',
  },
  {
    q: 'Preciso assinar o Claude para aproveitar a imersão?',
    a: 'Não. O que você vai aprender também funciona na versão gratuita. Mas você vai perceber durante a imersão que, em algum momento, investir em um plano pago fará muito sentido para o que você vai querer construir.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-8 py-12 md:py-20 relative scroll-mt-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-label text-xs uppercase tracking-widest text-primary opacity-70 mb-3">
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
                  <p className="px-5 md:px-7 pb-6 font-label text-sm text-secondary leading-relaxed">
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
