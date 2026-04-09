import logo from '../assets/99labdev.png'

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-surface-dim w-full py-12 md:py-14 px-4 border-t border-outline-variant/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <img
          alt="99labdev — Tecnologia e IA"
          className="h-10 md:h-12 w-auto object-contain opacity-90"
          src={logo}
        />
        <div className="flex items-center gap-6 font-label text-xs uppercase tracking-widest opacity-70">
          <a href="#" className="hover:text-primary-container transition-colors">Termos</a>
          <span className="opacity-30">·</span>
          <a href="#" className="hover:text-primary-container transition-colors">Privacidade</a>
          <span className="opacity-30">·</span>
          <a
            href="https://www.instagram.com/99hud/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors"
          >
            @99hud
          </a>
        </div>
        <p className="font-label text-[11px] uppercase tracking-[0.2em] opacity-50 text-center">
          Desenvolvido por 99LabDev · Tecnologia e IA © 2025 · Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
