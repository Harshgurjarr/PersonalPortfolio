import { Warp } from "@paper-design/shaders-react"

interface WarpShaderHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function WarpShaderHero({
  title = "Your Name",
  subtitle = "Full-stack Developer creating beautiful, performant web experiences. Specializing in React, Node.js, and modern web technologies.",
  primaryButtonText = "View Projects", 
  secondaryButtonText = "Contact Me",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {}
}: WarpShaderHeroProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={[
            "hsl(200, 100%, 20%)",
            "hsl(160, 100%, 75%)",
            "hsl(180, 90%, 30%)",
            "hsl(170, 100%, 80%)"
          ]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance">
            {title}
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              {primaryButtonText}
            </button>
            <button 
              onClick={onSecondaryClick}
              className="px-8 py-4 bg-white rounded-full text-gray-800 font-medium hover:scale-105 transition-transform duration-300"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
