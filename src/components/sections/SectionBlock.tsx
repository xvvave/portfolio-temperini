import React from "react";

interface SectionBlockProps {
  layout?: "full" | "twocol" | "grid" | "centered";
  className?: string;
  children: React.ReactNode;
}

const layoutClasses: Record<string, string> = {
  full: "w-full",
  twocol: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  centered: "flex flex-col items-center justify-center text-center",
};

const SectionBlock: React.FC<SectionBlockProps> = ({ layout = "full", className = "", children }) => (
  <section className={`max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 ${layoutClasses[layout]} ${className}`}>
    {children}
  </section>
);

export default SectionBlock; 