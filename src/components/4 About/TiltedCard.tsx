"use client"

import type React from "react"
import Image from "next/image"

import { useRef, useState, useEffect } from "react"

const springValues = {
  damping: 50,
  stiffness: 80,
  mass: 1.5,
}

interface TiltedCardProps {
  imageSrc: string
  altText?: string
  captionText?: string
  className?: string
  aspectRatio?: number
  scaleOnHover?: number
  rotateAmplitude?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  className = "",
  aspectRatio = 16 / 9,
  scaleOnHover = 1.02,
  rotateAmplitude = 6,
  showMobileWarning = true,
  showTooltip = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, opacity: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
      }
    }
    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current || isMobile || !isMounted) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude * 0.5
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude * 0.5

    setTransform({
      rotateX: rotationX,
      rotateY: rotationY,
      scale: scaleOnHover,
    })

    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    })
  }

  function handleMouseLeave() {
    if (!isMounted) return
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 })
    setTooltipPos((prev) => ({ ...prev, opacity: 0 }))
  }

  if (!isMounted) {
    return (
      <figure className={`relative flex flex-col items-center justify-center ${className}`}>
        <div
          className="relative w-full bg-gray-200 rounded-[15px] skeleton"
          style={{
            width: "100%",
            paddingBottom: `${100 / aspectRatio}%`,
          }}
        />
        {captionText && <div className="mt-3 text-center font-medium">{captionText}</div>}
      </figure>
    )
  }

  return (
    <figure
      ref={ref}
      className={`relative flex flex-col items-center justify-center ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
    >
              <div
          className="relative w-full transition-all duration-500 ease-out"
          style={{
            width: "100%",
            paddingBottom: `${100 / aspectRatio}%`,
            transform: isMobile
              ? "none"
              : `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
            transformStyle: "preserve-3d",
          }}
        >
        <Image
          src={imageSrc || "/images/foto-lautaro.png"}
          alt={altText}
          fill
          className="object-cover rounded-[15px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {showTooltip && !isMobile && captionText && (
        <div
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-[#E6DADA] px-[10px] py-[4px] text-[10px] text-[#2d2d2d] z-[3] transition-opacity duration-200"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            opacity: tooltipPos.opacity,
          }}
        >
          {captionText}
        </div>
      )}

      {captionText && (isMobile || !showTooltip) && (
        <div className="mt-3 text-center font-medium text-white">{captionText}</div>
      )}
    </figure>
  )
}
