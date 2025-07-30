"use client"

import { useState } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  width = 800,
  height = 600
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative">
      {!isLoaded && !hasError && <div className={`skeleton ${className}`} />}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`image-fade-in ${isLoaded ? "loaded" : ""} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
        priority={priority}
        style={{ display: hasError ? "none" : "block" }}
      />

      {hasError && (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-sm">Image not found</span>
        </div>
      )}
    </div>
  )
}
