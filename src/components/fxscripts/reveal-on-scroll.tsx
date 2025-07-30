"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealOnScroll({ children, delay = 0, className = "" }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${isVisible ? "revealed" : ""} ${className}`} aria-hidden="true">
      {children}
    </div>
  )
}
