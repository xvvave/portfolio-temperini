import Navbar from "@/components/1 Navbar/Navbar";
import ScrollToTop from "@/components/fxscripts/scroll-to-top";
import Footer from "@/components/5 Footer/Footer";
import SectionIntro from "@/components/sections/SectionIntro";
import TwoColumn from "@/components/sections/TwoColumn";
import FullImage from "@/components/sections/FullImage";
import GridTwoByTwo from "@/components/sections/GridTwoByTwo";
import InsightCard from "@/components/sections/InsightCard";
import ConclusionBlock from "@/components/sections/ConclusionBlock";

export const metadata = {
  title: "LevelUp | Rediseño editorial gamer | Lautaro R. Temperini",
  description:
    "Rediseñé la experiencia editorial de LevelUp con personalización y geosegmentación inteligente. Transformé un portal genérico en una experiencia relevante para el público gamer de Latinoamérica.",
  keywords:
    "LevelUp, rediseño editorial, personalización, geosegmentación, UX/UI, gaming, Latinoamérica, Lautaro Temperini, caso de estudio",
  openGraph: {
    title: "LevelUp | Rediseño editorial gamer | Lautaro R. Temperini",
    description:
      "Rediseño de portal editorial con personalización por preferencias y geografía. Experiencia adaptada para el público gamer de Latinoamérica.",
    url: "https://temperini.vercel.app/levelup",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/levelup-logo.webp",
        width: 800,
        height: 600,
        alt: "Logo de LevelUp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelUp | Rediseño editorial gamer | Lautaro R. Temperini",
    description:
      "Rediseño editorial con personalización y geosegmentación para el público gamer de Latinoamérica.",
    images: ["https://temperini.vercel.app/images/levelup-logo.webp"],
  },
};

export default function LevelUpPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main>
        {/* Hero Section */}
        <SectionIntro
          title="LEVEL UP"
          subtitle="Rediseñando la experiencia editorial gamer"
          description={
            <>
              Transformé un portal de noticias genérico en una experiencia personalizada, relevante y escalable para
              el público gamer de Latinoamérica.
              <br />
              El objetivo fue claro: crear una experiencia editorial que se adaptara a las preferencias regionales y personales de cada usuario.
            </>
          }
          align="left"
          className="min-h-screen py-24 md:py-32"
          titleClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight"
          isMainTitle
        />

        {/* Mi rol */}
        <SectionIntro
          title="Mi rol"
          description="Mi aporte específico en el proyecto: • Investigación sobre preferencias regionales de gaming. • Diseño del sistema de personalización y filtros. • Propuesta de geosegmentación automática. • Diseño de interfaz con arquitectura editorial escalable. • Estrategia de segmentación activa y pasiva."
          className="bg-[#1A1A1A]/20 border border-blue-400/25 rounded-2xl px-8 py-8"
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* El Desafío + El Problema */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El Desafío</h2>
              <p className="text-[#A6A6A6]">Transformar un portal de noticias genérico en una experiencia personalizada, relevante y escalable para el público gamer de Latinoamérica.</p>
              <p className="text-[#A6A6A6]">El reto principal era crear un sistema que respetara las diferencias regionales mientras mantuviera la escala del negocio editorial.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El Problema</h2>
              <h3 className="text-2xl font-semibold text-[#F2F2F2] mb-4">
                Una única vista editorial genera fricción para todos.
              </h3>
              <p className="text-[#A6A6A6]">Level Up publicaba más de 20 noticias diarias sin filtros ni curaduría personalizada. Los usuarios se perdían entre contenido irrelevante: noticias de consolas que no usan, juegos que no les interesan, eventos de otros países.</p>
              <blockquote className="text-[#A6A6A6] italic border-l-4 border-red-500 pl-4">
                "Yo juego en PlayStation, así que lo de Xbox o Nintendo no me sirve. Me pierdo entre tanta información."
                <br />
                <span className="text-[#F2F2F2] font-semibold">— Usuario entrevistado</span>
              </blockquote>
            </div>
          }
          className="min-h-screen"
        />

        {/* Insight Estratégico + Visión del Sistema */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Insight Estratégico</h2>
              <h3 className="text-2xl font-semibold text-[#F2F2F2] mb-4">
                Las preferencias de gaming varían por región.
              </h3>
              <p className="text-[#A6A6A6]">Durante el research identifiqué un patrón: mientras México prefiere Xbox, Argentina tiende a PlayStation o PC. Este insight dio lugar a una propuesta de valor más robusta.</p>
              <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                <p className="text-[#F2F2F2] font-semibold text-xl text-center">
                  Una experiencia editorial personalizada por preferencias y por geografía.
                </p>
              </div>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Visión del Sistema</h2>
              <p className="text-[#A6A6A6]">Proyecté una solución de segmentación activa + pasiva:</p>
              <div className="space-y-4">
                <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Segmentación pasiva:</h4>
                  <p className="text-[#A6A6A6] text-sm">
                    Filtros configurables por consola y género, guardados automáticamente vía localStorage.
                  </p>
                </div>
                <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Segmentación activa (roadmap):</h4>
                  <p className="text-[#A6A6A6] text-sm">
                    Integración de API de geolocalización para mostrar contenido regional sin intervención del usuario.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Mi Rol + Propuesta Inicial */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Mi Rol</h2>
              <h3 className="text-xl font-semibold text-[#F2F2F2] mb-4">
                Diseño de sistema + Dirección estratégica + Diseño de interfaz
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">System Design:</h4>
                  <p className="text-[#A6A6A6] text-sm">
                    Diseñé la lógica de personalización, filtros y comportamiento contextual.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">UX Strategy:</h4>
                  <p className="text-[#A6A6A6] text-sm">
                    Propuse la integración futura de geosegmentación automática y recomendaciones híbridas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">UI Design:</h4>
                  <p className="text-[#A6A6A6] text-sm">
                    Realicé la primera versión de la home con arquitectura editorial escalable.
                  </p>
                </div>
              </div>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Mi propuesta inicial</h2>
              <p className="text-[#A6A6A6] mb-6">Diseñé una interfaz más alineada a un producto digital real:</p>
              <ul className="space-y-2 text-[#A6A6A6]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Menú sidebar con dropdowns: navegación más profunda sin saturación.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Sistema de tags dinámicos: consola, género, tipo de publicación, trending.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Columna lateral de anuncios: manteniendo el modelo de negocio viable.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Personalización persistente sin login: experiencia más fluida.
                </li>
              </ul>
            </div>
          }
          reverse
        />

        {/* Versión Final + Aprendizajes */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">La versión final implementada</h2>
              <p className="text-[#A6A6A6] mb-6">El equipo decidió simplificar la interfaz:</p>
              <ul className="space-y-2 text-[#A6A6A6]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Menú horizontal con filtros visibles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Eliminación de anuncios laterales
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Etiquetas contextualizadas dentro de secciones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2F2F2] mt-1">•</span>
                  Estética limpia, modo oscuro, acento rojo
                </li>
              </ul>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Aprendizajes clave</h2>
              <div className="space-y-4">
                <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                  <p className="text-[#F2F2F2] font-medium">La personalización debe ser progresiva, no invasiva.</p>
                </div>
                <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                  <p className="text-[#F2F2F2] font-medium">
                    Las diferencias regionales son datos de diseño, no solo demográficos.
                  </p>
                </div>
                <div className="bg-[#F2F2F2]/10 backdrop-blur-sm rounded-lg p-4 border border-[#F2F2F2]/20">
                  <p className="text-[#F2F2F2] font-medium">
                    El momento de pedir personalización es tan importante como la personalización misma.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* Aprendizajes en Grid */}
        <GridTwoByTwo className="min-h-screen">
          <InsightCard title="La personalización debe ser progresiva, no invasiva.">
            Los usuarios están dispuestos a compartir preferencias si ven valor inmediato. El timing es crucial para la adopción.
          </InsightCard>
          <InsightCard title="Las diferencias regionales son datos de diseño, no solo demográficos.">
            México prefiere Xbox, Argentina PlayStation. Estas preferencias deben informar la arquitectura de contenido.
          </InsightCard>
          <InsightCard title="La UX editorial no puede desentenderse de la realidad del negocio.">
            La monetización y la experiencia de usuario deben coexistir sin comprometer ninguna de las dos.
          </InsightCard>
          <InsightCard title="El momento de pedir personalización es tan importante como la personalización misma.">
            Mostrar valor antes de pedir datos aumenta significativamente la tasa de adopción.
          </InsightCard>
        </GridTwoByTwo>

        {/* Reflexión Final */}
        <SectionIntro
          title="Reflexión Final"
          description="Este proyecto fue más que un rediseño: fue una propuesta estratégica sobre cómo un medio editorial puede adaptarse a su audiencia sin perder escala. Planteé una solución modular, contextual y sustentable, lista para evolucionar con datos reales."
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* Conclusión */}
        <ConclusionBlock className="rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6 text-center">Conclusión</h2>
          <div className="space-y-4 text-[#A6A6A6] leading-relaxed max-w-2xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#F2F2F2]">LevelUp demostró que la personalización editorial puede ser poderosa:</p>
            <p className="text-xl">La combinación de datos regionales, preferencias personales y diseño centrado en el usuario puede crear experiencias editoriales que no solo son relevantes, sino también verdaderamente útiles.</p>
          </div>
        </ConclusionBlock>
      </main>
      <Footer />
      <ScrollToTop size={48} />
    </div>
  );
} 