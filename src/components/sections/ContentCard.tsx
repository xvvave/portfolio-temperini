import type React from "react"

interface ContentCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "highlight" | "subtle"
  equalHeight?: boolean
}

const variantClasses = {
  default: "bg-[#181818] border border-[#333]",
  highlight: "bg-gradient-to-r from-green-900/20 to-purple-900/20 border border-purple-800/50",
  subtle: "bg-[#1a1a1a] border border-[#2a2a2a]",
}

const ContentCard: React.FC<ContentCardProps> = ({
  children,
  className = "",
  variant = "default",
  equalHeight = false,
}) => (
  <div
    className={`${variantClasses[variant]} rounded-2xl p-6 lg:p-8 ${
      equalHeight ? "h-full flex flex-col" : ""
    } ${className}`}
  >
    {children}
  </div>
)

export default ContentCard
