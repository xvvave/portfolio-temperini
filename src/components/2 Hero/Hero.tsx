import Link from "next/link"
import RevealOnScroll from "../fxscripts/reveal-on-scroll"
import Image from "next/image"
import Threads from "../Threads"

function HeroContent() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center pt-32 md:pt-40 lg:pt-48 px-4 md:px-6 lg:px-10">
      {/* Main Heading */}
      <RevealOnScroll>
        <div className="mb-4 md:mb-6">
          <h1
            className="fluid-text-3xl md:fluid-text-4xl lg:fluid-text-5xl font-semibold leading-tight text-light max-w-full md:max-w-md lg:max-w-lg xl:max-w-[394px]"
            style={{ fontFamily: "var(--font-neue-haas)" }}
          >
            Pensar distinto,<br />
            crear con intención.
          </h1>
        </div>
      </RevealOnScroll>

      {/* Subtitle */}
      <RevealOnScroll delay={100}>
        <div className="mb-6 md:mb-8">
          <p
            className="fluid-text-base md:fluid-text-lg font-semibold leading-relaxed text-accent max-w-full md:max-w-md lg:max-w-lg xl:max-w-[427px]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Transformo ideas en experiencias digitales reales.
          </p>
        </div>
      </RevealOnScroll>

      {/* CTA Button */}
      <RevealOnScroll delay={200}>
        <Link
          href="/#projects"
          className="flex items-center justify-center w-full max-w-xs md:w-auto md:max-w-none md:min-w-[257px] h-10 md:h-[40px] bg-gradient-to-r from-[#F2F2F2] via-[#F2F2F2] to-[#9D00E0] rounded-full px-6 shadow-[0px_4px_25px_rgba(115,0,165,0.25)] transition-all duration-200 hover:shadow-[0px_6px_30px_rgba(115,0,165,0.4)] btn-primary group cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const section = document.getElementById("projects");
            if (section) {
              smoothScrollToElement(section, 300);
            } else {
              window.location.hash = '#projects';
            }
          }}
        >
          <span
            className="fluid-text-sm font-semibold text-background group-hover:text-background transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explorá mis trabajos
          </span>
        </Link>
      </RevealOnScroll>
    </div>
  )
}

function smoothScrollToElement(element: HTMLElement, duration = 300) {
  const start = window.scrollY;
  const end = element.getBoundingClientRect().top + window.scrollY;
  const change = end - start;
  const startTime = performance.now();

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutCubic(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  requestAnimationFrame(animateScroll);
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Effect - Static */}
      <div className="absolute pointer-events-none hidden md:block left-0 right-0 bottom-0 h-1/2 w-full">
        <div className="absolute inset-0 w-full h-full">
          <Threads 
            color={[0.4, 0.4, 0.45]} 
            amplitude={0.8} 
            distance={0.1} 
            enableMouseInteraction={true}
          />
        </div>
      </div>

      {/* Mobile Background Effect - Static */}
      <div className="absolute pointer-events-none md:hidden left-0 right-0 bottom-0 h-1/2 w-full opacity-20">
        <div className="absolute inset-0 w-full h-full">
          <Threads 
            color={[0.4, 0.4, 0.45]} 
            amplitude={0.6} 
            distance={0.05} 
            enableMouseInteraction={false}
          />
        </div>
      </div>

      {/* Content */}
      <HeroContent />
    </section>
  )
}
  