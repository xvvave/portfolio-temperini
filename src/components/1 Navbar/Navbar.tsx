"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      console.log('Navbar scroll event:', { currentScrollY, lastScrollY })

      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
        setMobileMenuOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Detectar si el scroll ocurre en window o en otro contenedor
    setTimeout(() => {
      const scrollingElement = document.scrollingElement || document.documentElement
      if (scrollingElement.scrollHeight > scrollingElement.clientHeight) {
        console.log('El scroll principal ocurre en:', scrollingElement === document.body ? 'body' : 'documentElement')
      } else {
        // Buscar posibles contenedores con overflow auto/scroll
        const all = Array.from(document.querySelectorAll('*'))
        const scrollables = all.filter(el => {
          const style = window.getComputedStyle(el)
          return (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight
        })
        if (scrollables.length > 0) {
          console.log('Scroll detectado en otros contenedores:', scrollables)
        } else {
          console.log('No se detectaron contenedores con scroll personalizado.')
        }
      }
    }, 1000)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isActive = (path: string) => pathname === path

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

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("projects");
      if (section) {
        smoothScrollToElement(section, 300);
      }
    } else {
      e.preventDefault();
      router.push("/#projects");
    }
  };

  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 right-0 w-full h-16 md:h-20 lg:h-24 z-[9999] flex items-center justify-between px-4 md:px-6 lg:px-10 transition-all duration-300 bg-[#0D0D0D] border-b border-[#333]/50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Logo TEMPERINI */}
      <Link href="/" className="flex items-center justify-center group cursor-pointer">
        <h1
          className={`fluid-text-xl md:fluid-text-3xl lg:fluid-text-4xl xl:fluid-text-5xl font-medium tracking-[0.15em] transition-all duration-200
            ${pathname === '/' ? 'underline underline-offset-8 decoration-[#666973]' : ''}
            group-hover:animate-flip
          `}
          style={{
            fontFamily: "var(--font-manrope)",
            WebkitTextStroke: "3px #A6A6A6",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          TEMPERINI
        </h1>
      </Link>

      {/* Desktop Navigation Links - absolutely centered */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-8 lg:gap-16">
          {/* Temporarily commented out - Projects and Playground not ready yet */}
          {/* 
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className={`fluid-text-sm font-extrabold transition-all duration-150 relative cursor-pointer ${
              pathname === "/proyectos"
                ? "text-[#9D00E0]"
                : pathname === "/playground"
                ? "text-[#595959] hover:text-[#F2F2F2]"
                : pathname === "/"
                ? "text-[#F2F2F2]"
                : "text-[#F2F2F2] hover:text-[#A6A6A6]"
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Proyectos
            {isActive("/proyectos") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9D00E0] rounded-full" />}
          </a>
          <Link
            href="/playground"
            className={`fluid-text-sm font-extrabold transition-all duration-150 relative cursor-pointer ${
              pathname === "/playground"
                ? "text-[#A6A6A6]"
                : pathname === "/"
                ? "text-[#595959] hover:text-[#F2F2F2]"
                : "text-[#F2F2F2] hover:text-[#A6A6A6]"
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Playground
            {isActive("/playground") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#666973] rounded-full" />
            )}
          </Link>
          */}
        </div>
      </div>

      {/* CTA + Hamburguesa alineados derecha en sm */}
      <div className="flex items-center gap-2 relative z-10">
        {/* Desktop CTA Button */}
        {pathname !== '/contact' && (
          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center px-6 h-10 md:h-[40px] rounded-full transition-all duration-200 hover:shadow-lg btn-primary cursor-pointer"
            style={{
              background: "linear-gradient(180deg, #8900C3 72%, #595959 100%)",
              border: "1px solid rgba(156, 150, 164, 0.5)",
              borderRadius: "100px",
            }}
          >
            <span
              className={`fluid-text-sm font-semibold text-[#F2F2F2] whitespace-nowrap relative`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Conectemos
              {pathname === '/contact' && (
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#B277D1] rounded-full" />
              )}
            </span>
          </Link>
        )}
        {/* Social icons in navbar only on /contact and lg+ */}
        {pathname === '/contact' && (
          <div className="hidden lg:flex items-center gap-2 ml-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        )}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#F2F2F2] transition-transform duration-200 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="navbar-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="navbar-mobile-menu"
          className="absolute top-full left-0 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-t border-[#333]/50 md:hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {/* Temporarily commented out - Projects and Playground not ready yet */}
            {/* 
            <a
              href="#projects"
              onClick={e => { handleProjectsClick(e); setMobileMenuOpen(false); }}
              className="fluid-text-base font-extrabold text-[#F2F2F2] hover:text-[#A6A6A6] transition-colors py-2 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Proyectos
            </a>
            <Link
              href="/playground"
              className="fluid-text-base font-extrabold text-[#F2F2F2] hover:text-[#A6A6A6] transition-colors py-2 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Playground
            </Link>
            */}
            {/* Mobile Contact Button */}
            {pathname !== '/contact' && (
              <Link
                href="/contact"
                className="flex items-center justify-center px-6 h-10 rounded-full mt-4 transition-all cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, #8900C3 72%, #595959 100%)",
                  border: "1px solid rgba(156, 150, 164, 0.5)",
                  borderRadius: "100px",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className={`fluid-text-base font-semibold text-[#F2F2F2] relative`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Conectemos
                  {pathname === '/contact' && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[#666973] rounded-full" />
                  )}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
