import { useEffect, useState } from 'react'

const FILES = ['PROMPTS.md', 'SKILLS.md', 'PLUGINS.md']

export default function FolderPrompts() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % FILES.length)
        setFade(true)
      }, 250)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute left-[5%] top-[40%] z-30 transition-transform hover:-translate-y-1 duration-500">
      <div className="relative group">
        {/* Rotating file paper */}
        <div className="absolute -top-16 left-4 bg-white w-24 h-32 rounded-sm shadow-lg border border-black/5 p-3 flex flex-col gap-1 transform animate-paper-bounce">
          <p
            key={FILES[index]}
            className={`font-mono text-[8px] font-bold text-black/80 transition-all duration-300 ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
            }`}
          >
            {FILES[index]}
          </p>
          <div className="w-full h-0.5 bg-black/10 rounded-full mt-1"></div>
          <div className="w-2/3 h-0.5 bg-black/10 rounded-full"></div>
          <div className="w-full h-0.5 bg-black/10 rounded-full"></div>
        </div>
        {/* Folder Icon */}
        <div className="bg-[#c88d67] w-32 h-32 rounded-md shadow-2xl relative flex flex-col justify-end p-4 border-t border-white/20">
          <div className="absolute -top-3 left-0 w-12 h-6 bg-[#c88d67] rounded-t-sm"></div>
        </div>
      </div>
    </div>
  )
}
