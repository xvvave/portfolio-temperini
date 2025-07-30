import RevealOnScroll from "./fxscripts/reveal-on-scroll"
import OptimizedImage from "./optimized-image"

interface CaseStudySection {
  title: string
  content: string
  image: string
}

interface CaseStudyData {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  challenge: string
  solution: string
  results: string[]
  sections: CaseStudySection[]
}

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen pt-16 md:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen overflow-hidden py-12 md:py-16 lg:py-20"
        style={{
          background:
            "conic-gradient(from 203.7deg at 53.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <RevealOnScroll>
              <div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {data.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#8900C3]/20 border border-[#8900C3]/30 rounded-full text-sm text-[#8900C3] font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-tight xl:leading-[67px] text-[#F2F2F2] mb-4"
                    style={{ fontFamily: "var(--font-neue-haas)" }}
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-xl md:text-2xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[36px] text-[#8900C3] mb-6"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {data.subtitle}
                  </p>
                  <p
                    className="text-lg md:text-xl xl:text-[20px] leading-relaxed xl:leading-[28px] text-[#A6A6A6]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Hero Image */}
            <RevealOnScroll delay={100}>
              <div className="relative">
                <OptimizedImage
                  src={data.image}
                  alt={`${data.title} - ${data.subtitle}`}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <RevealOnScroll>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-semibold text-[#F2F2F2] mb-4"
                  style={{ fontFamily: "var(--font-neue-haas)" }}
                >
                  El Desafío
                </h2>
                <p className="text-lg leading-relaxed text-[#A6A6A6]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {data.challenge}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-semibold text-[#F2F2F2] mb-4"
                  style={{ fontFamily: "var(--font-neue-haas)" }}
                >
                  La Solución
                </h2>
                <p className="text-lg leading-relaxed text-[#A6A6A6]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {data.solution}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-10">
          <RevealOnScroll>
            <h2
              className="text-2xl md:text-3xl font-semibold text-[#F2F2F2] mb-8 text-center"
              style={{ fontFamily: "var(--font-neue-haas)" }}
            >
              Resultados
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {data.results.map((result, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="text-center p-6 bg-[#0D0D0D] border border-[#333] rounded-xl">
                  <p
                    className="text-lg md:text-xl font-semibold text-[#8900C3]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {result}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
          <RevealOnScroll>
            <h2
              className="text-2xl md:text-3xl font-semibold text-[#F2F2F2] mb-12 text-center"
              style={{ fontFamily: "var(--font-neue-haas)" }}
            >
              Proceso
            </h2>
          </RevealOnScroll>

          <div className="space-y-16 md:space-y-20">
            {data.sections.map((section, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <RevealOnScroll delay={index * 100}>
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h3
                      className="text-xl md:text-2xl font-semibold text-[#F2F2F2] mb-4"
                      style={{ fontFamily: "var(--font-neue-haas)" }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-[#A6A6A6]" style={{ fontFamily: "var(--font-manrope)" }}>
                      {section.content}
                    </p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={index * 100 + 50}>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <OptimizedImage src={section.image} alt={section.title} className="w-full h-auto rounded-xl" />
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
