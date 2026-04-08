import { useEffect, useState } from 'react'
import PixelChar from './PixelChar.jsx'

const IMERSAO_AT = new Date('2026-05-02T14:00:00-03:00').getTime()

function formatRemaining(ms) {
  if (ms <= 0) return 'Oferta encerrada'
  const totalHours = Math.floor(ms / (1000 * 60 * 60))
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24
  const minutes = Math.floor((ms / (1000 * 60)) % 60)
  const seconds = Math.floor((ms / 1000) % 60)
  if (days > 0) return `Oferta acaba em ${days}d ${hours}h ${minutes}m ${seconds}s`
  return `Oferta acaba em ${hours}h ${minutes}m ${seconds}s`
}

const WELCOME_TEXT = 'Bem vindo a imersão'

export default function LaptopFrame() {
  const [remaining, setRemaining] = useState(() => IMERSAO_AT - Date.now())
  const [typed, setTyped] = useState('')

  useEffect(() => {
    const id = setInterval(() => setRemaining(IMERSAO_AT - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let i = 0
    let deleting = false
    const tick = () => {
      if (!deleting) {
        i++
        setTyped(WELCOME_TEXT.slice(0, i))
        if (i === WELCOME_TEXT.length) {
          deleting = true
          return setTimeout(tick, 10000)
        }
        return setTimeout(tick, 90)
      }
      i--
      setTyped(WELCOME_TEXT.slice(0, i))
      if (i === 0) {
        deleting = false
        return setTimeout(tick, 600)
      }
      return setTimeout(tick, 45)
    }
    const t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-[70%] mx-auto z-20">
      {/* Screen Top */}
      <div className="bg-[#1c1c19] rounded-t-2xl p-1.5 shadow-2xl border-t border-x border-white/10">
        <div className="aspect-[16/10] bg-[#0d0d0d] rounded-lg relative overflow-hidden border border-white/5 flex flex-col">
          {/* Terminal Header */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
          </div>
          {/* Terminal Content */}
          <div className="p-6 font-mono text-[10px] md:text-xs text-white/70 space-y-4 flex-1">
            <div className="flex justify-between items-start opacity-40 italic">
              <span>Imersão Claude Code</span>
              <div className="text-right">
                <p>{formatRemaining(remaining)}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 space-y-4">
              <p className="text-white/90 text-sm">
                {typed}
                <span className="inline-block w-[1ch] animate-pulse">|</span>
              </p>
              <PixelChar className="scale-[2]" />
              <div className="text-center opacity-40">
                <p>2 de Maio - 14h00</p>
                <p>online</p>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex justify-between text-[8px] md:text-[10px]">
              <span className="opacity-60">
                Filelist: <span className="text-primary-fixed">PROMPTS.md</span>, README.md ...
              </span>
              <span className="opacity-40">/ PROMPTS.md</span>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop Base/Hinge */}
      <div className="h-4 bg-[#2c2c2a] w-[105%] -ml-[2.5%] rounded-b-xl border-b-4 border-black/40 relative z-10"></div>
      {/* Bottom Stand/Reflection */}
      <div className="w-[80%] h-12 bg-gradient-to-b from-black/20 to-transparent mx-auto rounded-full blur-xl -mt-2"></div>
    </div>
  )
}
