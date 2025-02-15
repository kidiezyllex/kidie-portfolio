import type React from "react"

const ScrollButton: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="container_mouse flex flex-col items-center">
        <span className="mouse-btn relative w-8 h-14 border-[3px] border-violet-400 rounded-full flex mb-2">
          <span className="mouse-scroll absolute w-4 h-4 bg-gradient-to-b from-violet-300 to-violet-400 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4 animate-scrolling" />
        </span>
      </div>
    </div>
  )
}

export default ScrollButton

