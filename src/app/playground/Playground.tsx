"use client"

import { useState } from "react"
import RevealOnScroll from "../../components/fxscripts/reveal-on-scroll"
import OptimizedImage from "../../components/optimized-image"
import { playgroundItems } from "@/data/playgroundItems"
import { filterOptions } from "@/data/playgroundFilters"
import GlareHover from "../../components/fxscripts/GlareHover"

export default function PlaygroundGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all" ? playgroundItems : playgroundItems.filter((item) => item.type === activeFilter)

  return (
    <section
      className="relative w-full min-h-screen overflow-visible py-12 md:py-16 lg:py-20"
      style={{
        background:
          "conic-gradient(from 203.7deg at 53.78% 39.65%, #0D0D0D 0deg, #0D0D0D 114.23deg, #666973 238.85deg, #0D0D0D 360deg)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-tight xl:leading-[67px] text-[#F2F2F2] mb-6"
              style={{ fontFamily: "var(--font-neue-haas)" }}
            >
              Playground
            </h1>
            <p
              className="text-lg md:text-xl xl:text-[24px] font-semibold leading-relaxed xl:leading-[32px] text-[#A6A6A6] max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Un espacio para experimentar, prototipar y explorar nuevas ideas. Aquí es donde las ideas toman forma
              antes de convertirse en soluciones.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Buttons */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full border transition-all duration-200 hover:scale-105 bg-[#010101]/50 ${
                  activeFilter === option.value
                    ? "border-[#A6A6A6] text-[#A6A6A6]"
                    : "border-[#595959] text-[#595959] hover:border-[#666973] hover:text-[#666973]"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {filteredItems.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 100}>
              <GlareHover
                className="group bg-[#0D0D0D] border border-[#9C96A4] rounded-2xl transition-all duration-300 hover:border-[#8900C3] hover:shadow-[0px_8px_35px_rgba(115,0,165,0.18)] hover:scale-[1.005] cursor-pointer"
                glareColor="#f2f2f2"
                glareOpacity={0.07}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={700}
                playOnce={true}
                style={{ borderRadius: '1rem', boxShadow: undefined }}
              >
                <div className="p-6 min-h-[420px]">
                  {/* Image */}
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3
                      className="text-xl font-semibold text-[#F2F2F2] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 border border-[#595959] rounded-full text-xs text-[#595959] font-medium"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlareHover>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
