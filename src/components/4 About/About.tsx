import TiltedCard from "./TiltedCard"
import RevealOnScroll from "../fxscripts/reveal-on-scroll"

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center"
      style={{
        background:
          "conic-gradient(from 203.7deg at 53.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center mb-24 px-4 md:px-6 lg:px-10">
        {/* ABOUT Title */}
        <RevealOnScroll className="about-slide-in">
          <div className="mb-0 mt-6">
            <h2
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight text-[#A6A6A6]"
              style={{ 
                fontFamily: "var(--font-neue-haas)",
                filter: "contrast(1.1) brightness(1.05)",
                mixBlendMode: "lighten"
              }}
            >
              ABOUT
            </h2>
          </div>
        </RevealOnScroll>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1">
          {/* Left Content - Text */}
          <div className="flex-1 max-w-2xl lg:max-w-xl xl:max-w-2xl mt-0">
            <RevealOnScroll delay={100}>
              <p
                className="mt-0 text-base sm:text-lg md:text-xl xl:text-[24px] 2xl:text-[28px] font-semibold leading-relaxed xl:leading-[32px] 2xl:leading-[38px] text-[#F2F2F2]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Soy Lautaro R. Temperini, diseñador multimedia enfocado en experiencias digitales funcionales,
                intuitivas y visualmente sólidas. Trabajo en la intersección entre diseño, código y movimiento, con foco
                en UX/UI. Concibo el diseño como un proceso estratégico, iterativo y guiado por intención. Apunto a
                soluciones claras, bien pensadas y visualmente coherentes.
              </p>
              {/* Imagen entre párrafos solo en mobile */}
              <div className="block md:hidden w-full my-6 flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm">
                  <TiltedCard
                    imageSrc="/images/foto-lautaro.webp"
                    altText="Lautaro R. Temperini - Diseñador Multimedia"
                    captionText=""
                    aspectRatio={1}
                    scaleOnHover={1.02}
                    rotateAmplitude={4}
                    showTooltip={false}
                  />
                </div>
              </div>
              <p
                className="text-base sm:text-lg md:text-xl xl:text-[24px] 2xl:text-[28px] font-semibold leading-relaxed xl:leading-[32px] 2xl:leading-[38px] text-[#F2F2F2] mt-4 text-right md:text-left"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Me entusiasma jugar el juego, pero sobre todo entender cómo está construido el tablero. Por eso me
                interesa colaborar con personas que entienden el diseño como proceso, no como resultado.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Content - Imagen en md+ */}
          <div className="w-full md:w-1/2 xl:w-[45%] flex-shrink-0 flex justify-center md:justify-end -mt-24 hidden md:block">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <TiltedCard
                imageSrc="/images/foto-lautaro.webp"
                altText="Lautaro R. Temperini - Diseñador Multimedia"
                captionText=""
                aspectRatio={1}
                scaleOnHover={1.02}
                rotateAmplitude={4}
                showTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
