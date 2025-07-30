import Link from "next/link"
import OptimizedImage from "../optimized-image"
import GlareHover from '../fxscripts/GlareHover'

interface ProjectCardProps {
  image: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  slug: string
  className?: string
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  tags,
  slug,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`w-full ${className}`}>
      <Link href={`/${slug}`} className="block relative w-full group cursor-pointer">
        <GlareHover
          className="group bg-[#0D0D0D] border border-[#9C96A4] rounded-2xl transition-all duration-300 hover:border-[#8900C3] hover:shadow-[0px_8px_35px_rgba(115,0,165,0.18)] hover:scale-[1.005] cursor-pointer"
          glareColor="#f2f2f2"
          glareOpacity={0.07}
          glareAngle={-30}
          glareSize={200}
          transitionDuration={700}
          playOnce={true}
          style={{ borderRadius: '1rem', boxShadow: undefined }}
        >
          <div className="p-6">
            {/* Mobile Layout */}
            <div className="flex flex-row items-center md:hidden gap-4">
              {/* Project Image */}
              <div className="w-16 h-16 flex-shrink-0 drop-shadow-xs" style={{ filter: 'drop-shadow(0px 4px 12px rgba(115,0,165,0.10))' }}>
                <OptimizedImage src={image} alt={title} className="w-full h-full rounded-full object-cover" />
              </div>

              {/* Project Info */}
              <div className="flex-1 text-left">
                <h3
                  className="fluid-text-xl font-semibold leading-tight text-[#F2F2F2] mb-1 transition-shadow group-hover:shadow-lg"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {title}
                </h3>
                <p
                  className="fluid-text-lg font-normal leading-tight mb-1"
                  style={{ fontFamily: "var(--font-inter)", color: '#A6A6A6' }}
                >
                  {subtitle}
                </p>
                <p
                  className="fluid-text-base font-normal"
                  style={{ fontFamily: "var(--font-inter)", color: '#595959' }}
                >
                  {description}
                </p>
              </div>
              {/* Arrow for mobile */}
              <div className="flex items-center justify-center w-10 h-10 flex-shrink-0 ml-2">
                <span
                  className="fluid-text-2xl font-bold leading-none text-center transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: "bold",
                    background: "linear-gradient(180deg, #f2f2f2 0%, #a6a6a6 88%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  🡆
                </span>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Project Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 flex-shrink-0 mt-4">
                <OptimizedImage src={image} alt={title} className="w-full h-full rounded-full object-cover" />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0 mt-4">
                <h3
                  className="fluid-text-xl md:fluid-text-2xl lg:fluid-text-3xl font-semibold leading-tight text-[#F2F2F2] mb-2 md:mb-3 lg:mb-4 transition-shadow group-hover:shadow-lg"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {title}
                </h3>
                <p
                  className="fluid-text-lg md:fluid-text-xl font-normal leading-tight text-[#A6A6A6] mb-2 md:mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {subtitle}
                </p>
                <p
                  className="fluid-text-base md:fluid-text-lg font-normal text-[#A6A6A6] mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 lg:gap-3 xl:gap-4">
                  {/* Menos de 768px (sm) sin tags */}
                  {tags.slice(0, 3).map((tag, index) => (
                    <div
                      key={index}
                      className="hidden sm:flex lg:hidden items-center justify-center px-3 py-1 md:px-4 md:py-2 border border-[#595959] rounded-full flex-shrink-0"
                    >
                      <span
                        className="fluid-text-xs md:fluid-text-sm font-semibold whitespace-nowrap transition-colors"
                        style={{ fontFamily: "var(--font-inter)", color: '#595959' }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                  {/* Entre 1024 y 1280px (lg) muestra 4 tags */}
                  {tags.slice(0, 4).map((tag, index) => (
                    <div
                      key={index}
                      className="hidden lg:flex xl:hidden items-center justify-center px-3 py-1 lg:px-4 lg:py-2 border border-[#595959] rounded-full flex-shrink-0"
                    >
                      <span
                        className="fluid-text-xs md:fluid-text-sm font-semibold whitespace-nowrap transition-colors"
                        style={{ fontFamily: "var(--font-inter)", color: '#595959' }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                  {/* Arriba de 1280px (xl) muestra 5 tags */}
                  {tags.slice(0, 5).map((tag, index) => (
                    <div
                      key={index}
                      className="hidden xl:flex items-center justify-center px-3 py-1 xl:px-4 xl:py-2 border border-[#595959] rounded-full flex-shrink-0"
                    >
                      <span
                        className="fluid-text-xs md:fluid-text-sm font-semibold whitespace-nowrap transition-colors"
                        style={{ fontFamily: "var(--font-inter)", color: '#595959' }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 xl:w-[136px] xl:h-[118px] flex-shrink-0">
                <span
                  className="fluid-text-4xl lg:fluid-text-5xl font-bold leading-none text-center transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: "bold",
                    background: "linear-gradient(180deg, #f2f2f2 0%, #a6a6a6 88%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  🡆
                </span>
              </div>
            </div>
          </div>
        </GlareHover>
      </Link>
    </div>
  )
}
