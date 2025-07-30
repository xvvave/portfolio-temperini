import Image from "next/image";
import Navbar from "@/components/1 Navbar/Navbar";
import ScrollToTop from "@/components/fxscripts/scroll-to-top";

export const metadata = {
  title: "RectoFinal | Gestión Inmobiliaria | Lautaro R. Temperini",
  description: "RectoFinal: Plataforma de gestión inmobiliaria desarrollada por Lautaro R. Temperini. Simplifica el proceso de compra, venta y alquiler de propiedades.",
  keywords: "RectoFinal, inmobiliaria, gestión, Lautaro Temperini, desarrollo web, propiedades, alquiler, compra, venta",
  openGraph: {
    title: "RectoFinal | Gestión Inmobiliaria | Lautaro R. Temperini",
    description: "RectoFinal: Plataforma de gestión inmobiliaria desarrollada por Lautaro R. Temperini. Simplifica el proceso de compra, venta y alquiler de propiedades.",
    url: "https://temperini.vercel.app/rectofinal",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/rectofinal-logo.png",
        width: 800,
        height: 600,
        alt: "Logo de RectoFinal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RectoFinal | Gestión Inmobiliaria | Lautaro R. Temperini",
    description: "RectoFinal: Plataforma de gestión inmobiliaria desarrollada por Lautaro R. Temperini. Simplifica el proceso de compra, venta y alquiler de propiedades.",
    images: ["https://temperini.vercel.app/images/rectofinal-logo.png"]
  }
};

export default function RectoFinalPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-semibold leading-tight xl:leading-[168px] text-[#F2F2F2] mb-8 md:mb-12 lg:mb-16" style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}>
            RECTOFINAL
          </h1>
          <div className="max-w-6xl">
            <div className="mb-12">
              <Image 
                src="/images/rectofinal-logo.png" 
                alt="Logo de la inmobiliaria RectoFinal" 
                width={128}
                height={128}
                className="object-contain mb-8"
              />
              <p className="text-xl xl:text-[28px] font-semibold leading-relaxed xl:leading-[38px] text-[#F2F2F2] mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>
                Plataforma de gestión inmobiliaria que simplifica el proceso de compra, venta y alquiler de propiedades.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Tecnologías Utilizadas
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Prisma</li>
                  <li>• PostgreSQL</li>
                  <li>• AWS S3</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Funcionalidades Principales
                </h3>
                <ul className="text-[#A6A6A6] space-y-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                  <li>• Catálogo de propiedades</li>
                  <li>• Sistema de filtros avanzados</li>
                  <li>• Chat entre usuarios</li>
                  <li>• Gestión de documentos</li>
                  <li>• Dashboard administrativo</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Desafíos y Soluciones
              </h3>
              <p className="text-[#A6A6A6] leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                El principal desafío fue crear un sistema de filtros que fuera tanto potente como intuitivo. 
                Implementamos un motor de búsqueda con Elasticsearch que permite filtros complejos manteniendo 
                una interfaz simple y rápida. También optimizamos la carga de imágenes con lazy loading y CDN.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop size={48} />
    </div>
  );
} 