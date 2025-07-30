import Link from "next/link"
import Image from "next/image"
import { socialLinks } from "@/data/socialLinks"

export default function Footer({ onlyIcons = false }: { onlyIcons?: boolean } = {}) {
  return (
    <footer
      className="relative w-full h-auto min-h-[80px] md:min-h-[120px] overflow-hidden py-4 md:py-6 bg-[#0D0D0D]/80"
      style={{
        width: "100%",
      }}
    >
      {/* Content Container */}
      <div className="w-full px-4 md:px-6 lg:px-10 mx-auto flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-8 md:gap-4">
        {/* Left Content */}
        {!onlyIcons && (
          <div className="flex flex-col gap-4 md:gap-6 text-left">
            {/* Main Text */}
            <h3
              className="text-sm min-[381px]:text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight md:leading-[38px] text-white max-w-full md:max-w-[488px] px-2 min-[381px]:px-0"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              ¿Tenés una idea o desafío en mente?
              <style>{`
                @media (max-width: 359px) {
                  .footer-mobile-fix { font-size: 1rem !important; padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
                 }
              `}</style>
            </h3>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center justify-center w-full max-w-sm md:w-[180px] h-8 min-[360px]:h-10 md:h-[40px] rounded-full px-2 min-[360px]:px-6 transition-all duration-200 hover:shadow-lg btn-primary footer-mobile-fix"
              style={{
                background: "linear-gradient(180deg, #8900C3 72%, #595959 100%)",
                border: "1px solid rgba(156, 150, 164, 0.5)",
                borderRadius: "100px",
              }}
            >
              <span
                className="text-sm min-[360px]:text-sm md:text-[15px] font-semibold text-white whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Creemos juntos
              </span>
            </Link>
          </div>
        )}
        {/* Right Content - Social Icons */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-[36px] flex-nowrap justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}