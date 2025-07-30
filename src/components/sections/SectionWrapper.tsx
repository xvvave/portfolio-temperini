import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-20",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", noPadding = false, size }) => {
  const paddingClass = size ? sizeClasses[size] : "py-12 md:py-20"

  return (
    <section className={`${noPadding ? "" : `max-w-7xl mx-auto px-6 lg:px-12 ${paddingClass}`} ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper
