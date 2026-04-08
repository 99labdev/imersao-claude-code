export default function DateBadge() {
  return (
    <div className="absolute right-[5%] top-[20%] flex flex-col gap-2 z-30">
      <div className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/30 px-8 py-6 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
        <p className="font-headline text-3xl text-on-surface">2 de Maio</p>
        <div className="h-px w-full bg-outline-variant/30 my-4"></div>
        <p className="font-headline text-3xl text-on-surface">14h00</p>
      </div>
    </div>
  )
}
