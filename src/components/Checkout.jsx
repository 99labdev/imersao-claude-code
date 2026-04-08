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
              1 dia para colocar times de I.A rodando na sua operação
            </p>
            <div className="font-label text-sm leading-relaxed opacity-80 space-y-4">
              <p>
                <span className="text-primary-container font-bold">user@claude:~$</span> Em apenas 1 dia, saia com times de I.A construídos no Claude Code rodando na sua operação — substituindo funções e ferramentas que hoje custam até R$20.000 por mês na sua empresa.
              </p>
              <p>
                Não é slide com teoria. Não é mais um curso que você assiste e esquece. É 1 dia inteiro ao vivo, construindo junto conosco um time de I.A completo dentro do Claude e pronto para trabalhar na sua operação.
              </p>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[Os 4 pilares da imersão]</p>
                <p>
                  <span className="text-primary-container font-bold">01 Mapear</span> — descubra onde sua operação está sangrando e saia com os 3 maiores gargalos mapeados.<br />
                  <span className="text-primary-container font-bold">02 Construir</span> — crie cada funcionário da sua operação como uma Skill especializada, sem código e sem programador.<br />
                  <span className="text-primary-container font-bold">03 Automatizar</span> — conecte tudo em fluxos completos rodando sem você no meio do caminho.<br />
                  <span className="text-primary-container font-bold">04 Escalar</span> — transforme novos gargalos em novas Skills, dentro ou fora do seu negócio.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[Para quem é essa imersão]</p>
                <p>
                  Agências de marketing, negócios digitais, empresários com time e exércitos de 1 pessoa só que querem parar de depender de custo fixo pesado para executar o que o Claude já pode fazer por centavos. Não é necessário experiência técnica nem conhecimento de programação.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-wider">[O que você leva dessa experiência]</p>
                <p>
                  Seu time de I.A criado ao vivo, operação rodando sem você, sistema replicável e uma metodologia de diagnóstico para mapear os gargalos da sua operação — além do acesso às estruturas que usamos internamente.
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
                <span className="font-headline text-5xl md:text-6xl font-bold text-primary">R$ 49</span>
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest opacity-50 block">
                Lote promocional · Pix · Cartão · Boleto
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
                  Garantia incondicional de 7 dias
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button className="bg-primary hover:bg-on-primary-container text-white w-full py-5 md:py-6 rounded-xl font-label text-lg md:text-xl transition-all shadow-xl hover:-translate-y-1 flex justify-center items-center gap-3">
                Garantir minha vaga <span className="material-symbols-outlined">arrow_forward</span>
              </button>
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
