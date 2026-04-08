export default function PixelChar({ className = '' }) {
  return (
    <div className={`pixel-char ${className}`}>
      <div className="pixel col-start-2 col-end-11 row-start-2 row-end-3"></div>
      <div className="pixel col-start-1 col-end-12 row-start-3 row-end-7"></div>
      <div className="pixel col-start-3 col-end-4 row-start-4 row-end-5 bg-black"></div>
      <div className="pixel col-start-9 col-end-10 row-start-4 row-end-5 bg-black"></div>
      <div className="pixel col-start-2 col-end-4 row-start-7 row-end-8"></div>
      <div className="pixel col-start-9 col-end-11 row-start-7 row-end-8"></div>
    </div>
  )
}
