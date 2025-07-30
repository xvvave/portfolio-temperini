import React from "react";
import SectionWrapper from "./SectionWrapper";
import OptimizedImage from "@/components/optimized-image";

interface FullImageProps {
  src: string;
  alt: string;
  className?: string;
  shadow?: boolean;
  border?: boolean;
  width?: number;
  height?: number;
}

const FullImage: React.FC<FullImageProps> = ({ src, alt, className = "", shadow = false, border = true, width, height }) => (
  <SectionWrapper>
    <div className={`rounded-lg overflow-hidden bg-[#F2F2F2] ${shadow ? 'shadow-2xl' : ''} ${border ? 'border-2 border-[#A6A6A6]' : ''}`}>
      <OptimizedImage src={src} alt={alt} className={className} width={width} height={height} />
    </div>
  </SectionWrapper>
);

export default FullImage; 