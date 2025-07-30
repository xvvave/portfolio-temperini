import Image from "next/image";
import Navbar from "@/components/1 Navbar/Navbar";
import ScrollToTop from "@/components/fxscripts/scroll-to-top";

export const metadata = {
  title: "LevelUp | Plataforma Educativa | Lautaro R. Temperini",
  description: "LevelUp: Plataforma educativa gamificada desarrollada por Lautaro R. Temperini. Transforma el aprendizaje en una experiencia interactiva y motivadora.",
  keywords: "LevelUp, educación, gamificación, plataforma, Lautaro Temperini, desarrollo web, aprendizaje"
};

export default function LevelUpPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-semibold leading-tight xl:leading-[168px] text-[#F2F2F2] mb-8 md:mb-12 lg:mb-16" style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}>
            LEVELUP
          </h1>
          <div className="max-w-6xl">
            <div className="mb-12">
              <Image 
                src="/images/levelup-logo.png" 
                alt="Logo de la plataforma educativa LevelUp" 
                width={128}
                height={128}
                className="object-contain mb-8"
              />
              <p className="text-xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[38px] text-[#F2F2F2] mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                Plataforma educativa gamificada que transforma el aprendizaje en una experiencia interactiva y motivadora.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Tecnologías Utilizadas
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• React</li>
                  <li>• TypeScript</li>
                  <li>• Node.js</li>
                  <li>• PostgreSQL</li>
                  <li>• Redis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Funcionalidades Principales
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• Sistema de niveles y XP</li>
                  <li>• Logros y badges</li>
                  <li>• Contenido interactivo</li>
                  <li>• Progreso personalizado</li>
                  <li>• Comunidad de estudiantes</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Desafíos y Soluciones
              </h3>
              <p className="text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                El mayor desafío fue diseñar un sistema de gamificación que fuera verdaderamente motivador sin ser abrumador. 
                Implementamos un algoritmo de progresión que se adapta al ritmo de cada usuario, combinando elementos de 
                psicología positiva con análisis de datos para optimizar la experiencia de aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop size={48} />
    </div>
  );
} 