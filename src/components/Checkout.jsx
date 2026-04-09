import { useEffect, useState } from 'react'

const EVENT_AT = new Date('2026-05-02T14:00:00-03:00').getTime()

function useCountdown(target) {
  const [remaining, setRemaining] = useState(() => target - Date.now())
  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  if (remaining <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
    ended: false,
  }
}

const INCLUDED = [
  '4 horas de imersão ao vivo (2 de maio, 14h)',
  'Implementação ao vivo nos 4 pilares do método',
  'Metodologia de diagnóstico de operação 99LabDev',
  'Acesso às estruturas e templates que usamos internamente',
  'Garantia incondicional de 7 dias',
]

export default function Checkout() {
  const c = useCountdown(EVENT_AT)

  return (
    <section id="checkout" className="relative bg-inverse-surface text-surface-container-lowest py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left: reinforcement copy */}
        <div className="space-y-6">
          <p className="font-label text-xs uppercase tracking-[0.3em] text-primary-container font-bold">
            Sua operação com IA
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
            O custo de não automatizar é{' '}
            <span className="italic text-primary-container">invisível e caro.</span>
          </h2>
          <div className="space-y-4 font-body text-base md:text-lg text-surface-dim leading-relaxed">
            <p>
              Cada semana que sua operação roda no manual, você está pagando caro e em horas
              que não voltam.
            </p>
            <p>
              O valor dessa imersão é um investimento irrisório perto da entrega final, que
              você levaria semanas tentando resolver sozinho.
            </p>
          </div>
          <div className="border-l-4 border-primary-container pl-5 py-3">
            <p className="font-headline text-lg md:text-2xl text-primary-container italic leading-snug">
              Se cada hora do seu trabalho valesse R$ 100 e você conseguisse economizar 5 horas
              por semana, seriam R$ 2.000 por mês economizados em tempo recuperado.
            </p>
          </div>
        </div>

        {/* Right: offer box */}
        <div className="relative bg-white/[0.04] backdrop-blur-md border border-primary/40 rounded-3xl p-7 md:p-10 shadow-2xl">
          {/* Countdown */}
          <div className="mb-6">
            <p className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold mb-3">
              Imersão começa em
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { l: 'Dias', v: c.days },
                { l: 'Horas', v: c.hours },
                { l: 'Min', v: c.minutes },
                { l: 'Seg', v: c.seconds },
              ].map((t) => (
                <div
                  key={t.l}
                  className="bg-primary/20 border border-primary/40 rounded-xl py-3 text-center"
                >
                  <p className="font-headline text-2xl md:text-3xl font-bold text-white">
                    {String(t.v).padStart(2, '0')}
                  </p>
                  <p className="font-label text-[9px] uppercase tracking-widest opacity-70">
                    {t.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-primary/20 pt-6 space-y-2 mb-6">
            <p className="font-label text-[10px] uppercase tracking-widest opacity-60">
              Investimento · Lote Promocional
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-label text-xl opacity-40 line-through">R$ 497</span>
              <span className="font-headline text-6xl md:text-7xl font-bold text-primary-container leading-none">
                R$ 47
              </span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest opacity-70">
              Pagamento único · Cartão ou Pix
            </p>
          </div>

          <div className="mb-6">
            <p className="font-label text-[11px] uppercase tracking-widest text-primary-container font-bold mb-4">
              O que está incluso
            </p>
            <ul className="space-y-3">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary-container mt-0.5 flex-shrink-0">◉</span>
                  <span className="font-body text-sm text-surface-dim leading-snug">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://pay.kiwify.com.br/Xeg2n8T"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary hover:bg-primary-container text-white text-center py-5 rounded-xl font-label text-base md:text-lg uppercase tracking-wide shadow-2xl hover:-translate-y-1 transition-all"
          >
            → Entrar na turma de 2 de maio
          </a>

          <p className="mt-4 text-center font-label text-[10px] uppercase tracking-widest opacity-60">
            Apenas 100 vagas · Pagamento 100% seguro pela Kiwify · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
