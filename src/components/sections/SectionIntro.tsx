import type React from "react"
import SectionWrapper from "./SectionWrapper"

interface SectionIntroProps {
  title: React.ReactNode
  subtitle?: string
  secondaryText?: string
  description?: React.ReactNode
  className?: string
  align?: "left" | "center"
  titleClassName?: string
  subtitleClassName?: string
  secondaryTextClassName?: string
  descriptionClassName?: string
  isMainTitle?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  standalone?: boolean
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  subtitle,
  secondaryText,
  description,
  className = "",
  align = "left",
  titleClassName = "text-4xl md:text-6xl lg:text-8xl font-semibold text-[#F2F2F2]",
  subtitleClassName = "text-xl xl:text-[28px] font-semibold text-[#F2F2F2] mt-4",
  secondaryTextClassName = "text-lg text-[#A6A6A6] mt-2",
  descriptionClassName = "text-base text-[#A6A6A6] mt-4 leading-relaxed",
  isMainTitle = false,
  size,
  standalone = true,
}) => {
  const content = (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h1
        className={
          isMainTitle
            ? "text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight text-[#F2F2F2]"
            : titleClassName
        }
      >
        {title}
      </h1>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      {secondaryText && <p className={secondaryTextClassName}>{secondaryText}</p>}
      {description && <div className={descriptionClassName}>{description}</div>}
    </div>
  )

  return standalone ? <SectionWrapper size={size}>{content}</SectionWrapper> : content
}

export default SectionIntro
