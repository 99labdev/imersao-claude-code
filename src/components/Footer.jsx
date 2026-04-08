import logo from '../assets/99labdev.png'

export default function Footer() {
  return (
    <footer className="bg-[#f0ede8]/90 backdrop-blur-md dark:bg-[#1c1c19]/90 border-t border-outline-variant/10 w-full py-10 md:py-12 flex flex-col items-center px-4 relative main-grid">
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#635d5e] opacity-80">
          Desenvolvido por
        </p>
        <img
          alt="99labdev — Tecnologia e IA"
          className="h-12 md:h-14 w-auto object-contain hover:opacity-80 transition-opacity"
          src={logo}
        />
      </div>
    </footer>
  )
}
