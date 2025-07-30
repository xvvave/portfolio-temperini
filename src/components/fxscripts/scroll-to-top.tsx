"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { createPortal } from "react-dom"

export default function ScrollToTop({ size = 32 }: { size?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Detectar el contenedor scroll principal
    let scrollElement: HTMLElement | Window = window;
    if (typeof window !== 'undefined') {
      // Buscar el primer elemento con scroll
      const scrollingElement = document.scrollingElement || document.documentElement;
      if (scrollingElement.scrollHeight > scrollingElement.clientHeight + 10) {
        scrollElement = window;
      } else {
        // Buscar posibles contenedores con overflow auto/scroll
        const all = Array.from(document.querySelectorAll('*')) as HTMLElement[];
        const scrollables = all.filter(el => {
          const style = window.getComputedStyle(el);
          return (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 10;
        });
        if (scrollables.length > 0) {
          scrollElement = scrollables[0];
        }
      }
    }

    const getScrollTop = () => {
      if (scrollElement === window) {
        return window.pageYOffset;
      } else if (scrollElement instanceof HTMLElement) {
        return scrollElement.scrollTop;
      }
      return 0;
    };

    const toggleVisibility = () => {
      if (getScrollTop() > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    scrollElement.addEventListener("scroll", toggleVisibility)
    return () => scrollElement.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Ocultar el botón si el footer es visible
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    // Detectar el contenedor scroll principal
    let scrollElement: HTMLElement | Window = window;
    if (typeof window !== 'undefined') {
      const scrollingElement = document.scrollingElement || document.documentElement;
      if (scrollingElement.scrollHeight > scrollingElement.clientHeight + 10) {
        scrollElement = window;
      } else {
        const all = Array.from(document.querySelectorAll('*')) as HTMLElement[];
        const scrollables = all.filter(el => {
          const style = window.getComputedStyle(el);
          return (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 10;
        });
        if (scrollables.length > 0) {
          scrollElement = scrollables[0];
        }
      }
    }

    // Animación suave personalizada (como en Navbar)
    const duration = 300;
    const start = scrollElement === window ? window.scrollY : (scrollElement as HTMLElement).scrollTop;
    const change = -start;
    const startTime = performance.now();

    function easeInOutCubic(t: number) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newPosition = start + change * easeInOutCubic(progress);
      if (scrollElement === window) {
        window.scrollTo(0, newPosition);
      } else if (scrollElement instanceof HTMLElement) {
        scrollElement.scrollTop = newPosition;
      }
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  if (!mounted) return null;
  return createPortal(
    isVisible && !footerVisible && (
      <button
        onClick={scrollToTop}
        style={{ width: size, height: size }}
        className={"fixed bottom-2 md:bottom-4 right-6 md:right-12 z-[99999] bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-105"}
        aria-label="Scroll to top"
      >
        <ArrowUp size={size * 0.42} color="#f2f2f2" />
      </button>
    ),
    document.body
  )
}
