export default function FolderPrompts() {
  return (
    <div className="absolute left-[5%] top-[40%] z-30 transition-transform hover:-translate-y-1 duration-500">
      <div className="relative group">
        {/* PROMPTS.md Paper */}
        <div className="absolute -top-16 left-4 bg-white w-24 h-32 rounded-sm shadow-lg border border-black/5 p-3 flex flex-col gap-1 transform -rotate-3 group-hover:-translate-y-4 transition-transform">
          <p className="font-mono text-[8px] font-bold text-black/80">PROMPTS.md</p>
          <div className="w-full h-0.5 bg-black/10 rounded-full mt-1"></div>
          <div className="w-2/3 h-0.5 bg-black/10 rounded-full"></div>
          <div className="w-full h-0.5 bg-black/10 rounded-full"></div>
        </div>
        {/* Folder Icon */}
        <div className="bg-[#c88d67] w-32 h-32 rounded-md shadow-2xl relative flex flex-col justify-end p-4 border-t border-white/20">
          <div className="absolute -top-3 left-0 w-12 h-6 bg-[#c88d67] rounded-t-sm"></div>
          <p className="font-headline text-xl font-bold text-black/60 relative z-10">Prompts</p>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-2 border-background">
            <span className="material-symbols-outlined text-xl">settings_input_component</span>
          </div>
        </div>
      </div>
    </div>
  )
}
