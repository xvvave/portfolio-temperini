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
  title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
  description:
    "GloryFit es una app de fitness rediseñada para el smartwatch Q18. Un proyecto de UX/UI enfocado en la personalización de rutinas a partir de datos biométricos, con especial énfasis en confianza, progresión gradual y diseño accesible.",
  keywords:
    "GloryFit, UX/UI, smartwatch Q18, diseño de experiencia, rutinas personalizadas, datos biométricos, onboarding, confianza, Lautaro Temperini, fitness app, caso de estudio",
  openGraph: {
    title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
    description:
      "App de fitness diseñada para personalizar rutinas según datos biométricos. Un enfoque estratégico de UX/UI que reduce fricción y construye confianza desde el primer uso.",
    url: "https://temperini.vercel.app/gloryfit",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/gloryfit-logo.webp",
        width: 800,
        height: 600,
        alt: "Logo de GloryFit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GloryFit | App de entrenamiento personalizado | Lautaro R. Temperini",
    description:
      "Diseño UX/UI para una app de entrenamiento inteligente. Rutinas adaptadas, onboarding progresivo y decisiones basadas en datos reales de usuarios.",
    images: ["https://temperini.vercel.app/images/gloryfit-logo.webp"],
  },
};

export default function GloryFitPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main>
        {/* Intro: layout exacto como el original */}
        <SectionIntro
          title="GLORYFIT"
          subtitle="Rutinas personalizadas a partir de tus datos"
          description={
            <>
              Diseñamos una experiencia móvil que transforma datos biométricos en rutinas adaptadas, accesibles y motivadoras.
              <br />
              El objetivo fue claro: generar la confianza suficiente para que el usuario comparta información sensible a cambio de recomendaciones que realmente impacten en su salud.
            </>
          }
          align="left"
          className="min-h-screen py-24 md:py-32"
          titleClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight"
          isMainTitle
        />

        {/* Mi rol: inmediatamente después de la intro, fondo verde sólido notorio, bordes redondeados, padding extra */}
        <SectionIntro
          title="Mi rol"
          description="Mi aporte específico en el proyecto: • Investigación cualitativa sobre barreras al ingreso de datos biométricos. • Diseño del flujo de onboarding y personalización de rutina. • Construcción del sistema visual completo (tipografía, color, iconografía, componentes). • Prototipado funcional en Figma para Android, validado con usuarios reales."
          className="bg-[#004F3E]/20 border border-green-400/25 rounded-2xl px-8 py-8"
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* El reto + Investigación */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El reto</h2>
              <p className="text-[#A6A6A6]">GloryFit venía preinstalada en el smartwatch Q18, un wearable económico dirigido a un público amplio. Su promesa: registrar pasos, frecuencia cardíaca, sueño, y ofrecer rutinas básicas de entrenamiento.</p>
              <p className="text-[#A6A6A6]">Pero al usarla, el problema se hacía evidente. La interfaz era arbitraria, el onboarding caótico, y las rutinas, genéricas. No había una experiencia que conectara con el usuario ni que justificara por qué debía compartir sus datos.</p>
              <p className="text-[#A6A6A6]">Desde el principio, el foco del rediseño fue replantear esa lógica: ¿cómo construimos una experiencia que invite, no imponga? ¿Cómo logramos que el usuario entienda para qué sirve dar su edad, peso o historial médico sin que eso genere fricción o sospecha?</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Investigación y descubrimiento</h2>
              <p className="text-[#A6A6A6]">Arrancamos mapeando los puntos de fricción en apps de fitness existentes. Hicimos entrevistas breves a usuarios de wearables, encuestas sobre privacidad de datos y benchmarks de plataformas como Google Fit, Zepp y MiFitness. También probamos GloryFit tal como venía, para detectar los errores más flagrantes.</p>
              <p className="text-[#A6A6A6]">Un patrón se repetía: los usuarios estaban dispuestos a compartir datos biométricos si percibían valor inmediato. No al final del onboarding. No después de cinco pantallas. Sino en el momento. Además, la falta de claridad sobre el uso de los datos generaba desconfianza y abandono.</p>
            </div>
          }
          className="min-h-screen"
        />

        {/* Estrategia de diseño + User Flow */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Estrategia de diseño</h2>
              <p className="text-[#A6A6A6]">Tomamos una decisión clave: el valor tenía que mostrarse antes que la recolección de datos. El flujo debía ser progresivo, pero no lento. Simple, pero no superficial. Transparente, sin caer en tecnicismos.</p>
              <p className="text-[#A6A6A6]">Dividimos la experiencia en dos grandes momentos:</p>
              <ul className="list-disc pl-5 text-[#A6A6A6] space-y-2">
                <li>Primero, el ingreso gradual y justificado de información. Pedimos solo lo esencial al inicio: edad, nivel de actividad, objetivos. Más adelante, una vez que el usuario veía lo que la app podía ofrecer, le pedíamos datos más sensibles como peso o historial médico. Cada dato venía acompañado de una explicación contextual: por qué lo pedimos, cómo se usa, y qué gana el usuario a cambio.</li>
                <li>Segundo, la personalización visible desde el inicio. Apenas completado el paso básico, el usuario accedía al módulo &quot;Mi Rutina&quot;, donde ya podía ver ejercicios sugeridos según su perfil. Nada de listas genéricas: cada rutina tenía una justificación visible y ofrecía ajustes en intensidad, foco muscular o duración. Esto reforzaba una lógica simple pero poderosa: dar un dato equivale a recibir algo valioso.</li>
              </ul>
            </div>
          }
          right={
            <div className="min-h-[500px] bg-[#F2F2F2] flex items-center justify-center rounded-xl">
              <FullImage
                src="/images/gloryfitImages/UserFlow.webp"
                alt="User Flow de GloryFit: diagrama del proceso de configuración y personalización de rutinas en la app"
                width={1200}
                height={800}
                border={false}
                className="max-h-[400px] w-auto"
              />
            </div>
          }
          reverse
        />

        {/* El sistema detrás + Diseño de experiencia  */}
        <TwoColumn
          alignItems="start"
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El sistema detrás</h2>
              <p className="text-[#A6A6A6]">Diseñamos un sistema conceptual de personalización que cruzaba edad, nivel de actividad, historial médico y objetivos. Este sistema no era solo interno: el usuario podía ver por qué se le recomendaba cada ejercicio.</p>
              <ul className="list-disc pl-5 text-[#A6A6A6] space-y-2">
                <li>Un usuario sedentario de más de 40 años recibía una rutina progresiva de bajo impacto.</li>
                <li>Un usuario activo sin lesiones, una rutina de intensidad media-alta.</li>
                <li>Si había historial de lesiones, se priorizaban ejercicios de bajo riesgo o rehabilitación.</li>
              </ul>
              <p className="text-[#A6A6A6]">Desarrollamos además un módulo de transparencia algorítmica. Cada recomendación podía desplegar su lógica. La idea no era &quot;maravillar&quot; con inteligencia artificial, sino mostrar que la app piensa, pero no oculta.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Diseño de experiencia</h2>
              <p className="text-[#A6A6A6]">La experiencia debía transmitir claridad, control y salud. No glamour ni &quot;fitness extremo&quot;. Así que fuimos por una interfaz limpia, con lenguaje claro y componentes que acompañaran ese tono.</p>
              <ul className="list-disc pl-5 text-[#A6A6A6] space-y-2">
                <li>Botones segmentados para elegir nivel de actividad y tiempo</li>
                <li>Dropdowns con ejemplos reales (&quot;Lesión de rodilla&quot;, &quot;Objetivo: retomar actividad&quot;)</li>
                <li>Tooltips animados que explicaban para qué se usa cada dato</li>
                <li>FAB central siempre visible para iniciar la rutina</li>
                <li>Indicadores de progreso en cada paso del onboarding</li>
              </ul>
              <h4 className="text-lg font-semibold text-[#F2F2F2]">Sistema visual:</h4>
              <p className="text-[#A6A6A6]">El sistema visual apostó a la calma y la confianza: verdes suaves como color primario, grises neutros para la información, tipografía Roboto por su legibilidad en Android, e iconografía médica sin parecer técnica.</p>
            </div>
          }
        />

        {/* Style Guide: imagen full width */}
        <FullImage
          src="/images/gloryfitImages/StyleTile.webp"
          alt="Style Tile de GloryFit: paleta de colores, tipografía, componentes de interfaz e iconografía de la app"
          className="max-w-[60vw] w-full h-auto mx-auto"
          shadow
        />

        {/* Iteraciones y validación*/}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Iteraciones y validación</h2>
              <p className="text-[#A6A6A6]">Durante los primeros testeos funcionales, identificamos un momento crítico: cuando pedíamos datos sensibles demasiado pronto (como peso o historial médico), el flujo se caía. Incluso usuarios que ya habían avanzado abandonaban la experiencia.</p>
              <p className="text-[#A6A6A6]">Lo solucionamos reordenando el flujo: mostramos primero una rutina preliminar, y luego pedimos los datos más sensibles para refinarla. También incorporamos tooltips visuales explicativos y una vista previa del beneficio concreto.</p>
              <p className="font-semibold text-[#F2F2F2]">¿Resultado? Un onboarding más completo, con mayor sensación de seguridad y control por parte del usuario.</p>
            </div>
          }
          right={
            <FullImage
              src="/images/gloryfitImages/CardsGloryfit.webp"
              alt="Pantallas de selección y detalles de rutina personalizada en GloryFit"
              width={1200}
              height={800}
              border={false}
              shadow
            />
          }
        />

        
        {/* Aprendizajes clave: grilla 2x2 de insights */}
        <GridTwoByTwo className="min-h-screen">
          <InsightCard title="El momento en que se pide un dato es tan importante como el dato mismo.">
            El ritmo del onboarding define la tasa de abandono. Pedir permiso sin mostrar valor es un callejón sin salida.
          </InsightCard>
          <InsightCard title="Transparencia supera a la automatización.">
            Los usuarios prefieren saber por qué se les recomienda algo, aunque no sea perfecto, antes que recibir una rutina &quot;mágica&quot; sin explicación.
          </InsightCard>
          <InsightCard title="El control genera confianza.">
            Dejar que el usuario ajuste su rutina, incluso si el sistema es inteligente, refuerza la percepción de seguridad.
          </InsightCard>
          <InsightCard title="Los usuarios mayores de 35 años valoran claridad, explicaciones y lenguaje visual sencillo.">
            Rechazan experiencias visualmente sobrecargadas o sin lógica aparente.
          </InsightCard>
        </GridTwoByTwo>

        {/* Validación y feedback: texto full width */}
        <SectionIntro
          title="Validación y feedback"
          description="Aunque el proyecto no llegó a producción ni contó con métricas duras, hicimos validación con usuarios afines al público objetivo: adultos entre 35 y 55 años que buscaban retomar hábitos de entrenamiento. Los testeos indicaron: alta aceptación del flujo progresivo, muy buena recepción del sistema de personalización visible, confianza reforzada cuando se permitía ajustar manualmente la rutina generada, y resistencia puntual a la conexión automática con el smartwatch si no se contextualizaba el beneficio. Insight central: Las personas están dispuestas a compartir datos biométricos si el valor es inmediato, tangible y personal. En otras palabras, si no ven para qué sirve un dato, no lo entregan."
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* Conclusión: bloque final, centrado, bordes redondeados */}
        <ConclusionBlock className="rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6 text-center">Conclusión</h2>
          <div className="space-y-4 text-[#A6A6A6] leading-relaxed max-w-2xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#F2F2F2]">GloryFit nos dejó un aprendizaje potente:</p>
            <p className="text-xl">La confianza no se gana con visuales planos, sino con interacciones que devuelven valor real, respetan el ritmo del usuario y explican lo que hacen.</p>
          </div>
        </ConclusionBlock>
      </main>
      <Footer />
      <ScrollToTop size={48} />
    </div>
  );
}
