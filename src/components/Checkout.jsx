import { useEffect, useState } from 'react'

const LOTE_AT = new Date('2026-05-02T14:00:00-03:00').getTime()

function formatRemaining(ms) {
  if (ms <= 0) return 'Lote encerrado'
  const totalHours = Math.floor(ms / (1000 * 60 * 60))
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24
  const minutes = Math.floor((ms / (1000 * 60)) % 60)
  const seconds = Math.floor((ms / 1000) % 60)
  if (days > 0) return `Lote encerra em ${days}d ${hours}h ${minutes}m ${seconds}s`
  return `Lote encerra em ${hours}h ${minutes}m ${seconds}s`
}

export default function Checkout() {
  const [remaining, setRemaining] = useState(() => LOTE_AT - Date.now())

  useEffect(() => {
    const id = setInterval(() => setRemaining(LOTE_AT - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="checkout" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12 relative scroll-mt-24">
      <div className="bg-inverse-surface text-surface-container-lowest p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-error"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-tertiary"></div>
          <span className="ml-4 font-label text-xs opacity-50 uppercase tracking-tighter">
            Operação Claude Code
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Content Column */}
          <div className="space-y-4">
            <p className="font-label text-lg md:text-xl text-primary font-bold tracking-tight">
              Sua operação rodando com I.A em uma única tarde
            </p>
            <div className="font-label text-sm leading-relaxed opacity-80 space-y-4">
              <p>
                <span className="text-primary-container font-bold">user@claude:~$</span> Em poucas horas você sai com um time de I.A construído ao vivo no Claude Code, pronto para assumir tarefas que hoje consomem até R$20.000 por mês entre ferramentas e pessoas na sua empresa.
              </p>
              <p>
                Esqueça apresentações de slide e cursos esquecidos na gaveta. Aqui é mão na massa do começo ao fim — você constrói junto, testa junto e sai com algo funcionando de verdade dentro do seu negócio.
              </p>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[A jornada em 4 etapas]</p>
                <p>
                  <span className="text-primary-container font-bold">01 Diagnosticar</span> — identifique onde seu tempo e dinheiro estão escapando e priorize os 3 pontos mais críticos.<br />
                  <span className="text-primary-container font-bold">02 Montar</span> — transforme cada função da operação numa Skill especializada do Claude, sem precisar saber programar.<br />
                  <span className="text-primary-container font-bold">03 Orquestrar</span> — encadeie as Skills em fluxos completos que rodam sozinhos enquanto você cuida de outras coisas.<br />
                  <span className="text-primary-container font-bold">04 Multiplicar</span> — replique o método em novos gargalos da sua empresa ou ofereça como serviço para outras.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[Feita sob medida para]</p>
                <p>
                  Donos de agência, negócios digitais, empresários com equipe e profissionais solo que querem trocar o custo fixo de ferramentas e pessoas por uma operação inteligente que custa centavos por execução. Zero pré-requisito técnico — se você sabe explicar o que precisa, já dá.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[Você sai daqui com]</p>
                <p>
                  Um time de I.A construído ao vivo na sua frente, fluxos automatizados em produção, um método replicável para qualquer novo gargalo que aparecer e acesso direto às estruturas que já usamos internamente nos nossos próprios projetos.
                </p>
              </div>
            </div>
          </div>
          {/* Purchase Column */}
          <div className="flex flex-col justify-center lg:border-l lg:border-surface-variant/10 lg:pl-12 space-y-8 pt-8 lg:pt-0 border-t lg:border-t-0 border-surface-variant/10">
            <div className="space-y-2">
              <span className="font-label text-xs uppercase opacity-50 block">Investimento</span>
              <div className="flex items-baseline gap-3">
                <span className="font-label text-xl opacity-40 line-through">R$ 497</span>
                <span className="font-headline text-5xl md:text-6xl font-bold text-primary">R$ 47</span>
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest opacity-50 block">
                Lote promocional · Pix · Cartão
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-wider text-xs">O que está incluído:</p>
              <ul className="font-label text-sm space-y-3 uppercase tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  4h de imersão ao vivo — 2 de Maio, 14h
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Implementação ao vivo dos 4 pilares
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Metodologia de diagnóstico da operação
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Acesso às estruturas que usamos internamente
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Garantia de 7 dias
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a
                href="https://pay.kiwify.com.br/Xeg2n8T"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-on-primary-container text-white w-full py-5 md:py-6 rounded-xl font-label text-lg md:text-xl transition-all shadow-xl hover:-translate-y-1 flex justify-center items-center gap-3"
              >
                Garantir minha vaga <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <p className="mt-4 text-center font-label text-[10px] uppercase tracking-widest opacity-40">
                100 vagas · 14h · Ao vivo e online
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-surface-variant/10">
          <p className="font-label text-xs text-outline-variant italic text-right">
            {formatRemaining(remaining)}
          </p>
        </div>
      </div>
    </section>
  )
}
