import React from "react";
import SectionWrapper from "./SectionWrapper";

interface GridTwoByTwoProps {
  children: React.ReactNode;
  className?: string;
}

const GridTwoByTwo: React.FC<GridTwoByTwoProps> = ({ children, className = "" }) => (
  <SectionWrapper className={className}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
  </SectionWrapper>
);

export default GridTwoByTwo; 