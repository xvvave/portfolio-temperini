import React from "react";
import ContactForm from "./ContactForm";
import SpotlightCard from "./SpotlightCard";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 md:px-0 mt-16 pt-6 sm:pt-10 md:pt-16 relative">
      <SpotlightCard className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-3xl shadow-2xl flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#F2F2F2] text-center" style={{ fontFamily: "Manrope, sans-serif" }}>
            Get in touch
          </h2>
          <ContactForm />
        </div>
      </SpotlightCard>
      {/* Iconos de redes sociales debajo de la card en mobile/tablet */}
      <div className="flex lg:hidden items-center justify-center gap-5 mt-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200"
            aria-label={social.name}
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 