import React from "react";
import SectionWrapper from "./SectionWrapper";

interface ConclusionBlockProps {
  children: React.ReactNode;
  className?: string;
}

const ConclusionBlock: React.FC<ConclusionBlockProps> = ({ children, className = "" }) => (
  <SectionWrapper className={`bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-purple-800/50 text-center ${className}`}>
    {children}
  </SectionWrapper>
);

export default ConclusionBlock; 