import ProjectCard from "./Project-card"
// import RevealOnScroll from "../fxscripts/reveal-on-scroll"
import { projectsData } from "@/data/projectsData"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-16"
    >
      {/* Header - Static */}
      <div className="w-full flex flex-col items-start text-left mb-8 md:mb-12 lg:mb-16 px-4 md:px-6 lg:px-10">
        <div className="space-y-2">
          <h2
            className="fluid-text-3xl md:fluid-text-4xl lg:fluid-text-5xl font-semibold leading-tight text-light mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-neue-haas)" }}
          >
            De la idea a la acción
          </h2>
          <p
            className="fluid-text-base md:fluid-text-lg font-semibold leading-relaxed text-accent max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-[778px]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Proyectos donde construyo soluciones digitales robustas que superan desafíos complejos.
          </p>
        </div>
      </div>

      {/* Projects Container */}
      <div className="w-full">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 px-4 md:px-6 lg:px-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
