import type React from "react"
import SectionWrapper from "./SectionWrapper"

interface TwoColumnProps {
  left: React.ReactNode
  right: React.ReactNode
  reverse?: boolean
  className?: string
  noPadding?: boolean
  equalHeight?: boolean // NUEVO: opcional, por defecto false
  size?: "sm" | "md" | "lg" | "xl" // NUEVO: opcional
  alignItems?: "start" | "center" | "stretch"
}

const TwoColumn: React.FC<TwoColumnProps> = ({
  left,
  right,
  reverse = false,
  className = "",
  noPadding = false,
  equalHeight = false, // NUEVO: por defecto false (comportamiento original)
  size, // NUEVO: opcional, mantiene comportamiento original si no se especifica
  alignItems = "center",
}) => (
  <SectionWrapper className={className} noPadding={noPadding} size={size}>
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-12 ${
        equalHeight ? "items-stretch" : alignItems === "start" ? "items-start" : "items-center"
      } space-y-8 md:space-y-0`}
    >
      <div className={`col-span-12 md:col-span-6 ${reverse ? "md:order-2" : ""} ${equalHeight ? "flex flex-col" : ""}`}>
        {left}
      </div>
      <div className={`col-span-12 md:col-span-6 ${reverse ? "md:order-1" : ""} ${equalHeight ? "flex flex-col" : ""}`}>
        {right}
      </div>
    </div>
  </SectionWrapper>
)

export default TwoColumn
