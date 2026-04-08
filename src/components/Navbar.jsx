import PixelChar from './PixelChar.jsx'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 dark:bg-[#1c1c19]/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/10">
      <div className="flex items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto justify-center">
        <span className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[#1c1c19] dark:text-[#fcf9f4]">
          <div className="flex items-center gap-2 font-headline">
            <PixelChar className="scale-[0.8] origin-left mr-2" />
            <span>IMERSÃO Claude Code</span>
          </div>
        </span>
      </div>
    </nav>
  )
}
