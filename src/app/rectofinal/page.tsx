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
  title: "Recto Final | Videojuego físico-digital | Lautaro R. Temperini",
  description:
    "Recto Final es un videojuego físico-digital donde la única salida es por el final. Proyecto académico que combina Unity 2D con hardware modificado para crear una experiencia inmersiva.",
  keywords:
    "Recto Final, videojuego físico-digital, Unity 2D, instalación interactiva, UNLP, Lautaro Temperini, hardware modificado, experiencia inmersiva",
  openGraph: {
    title: "Recto Final | Videojuego físico-digital | Lautaro R. Temperini",
    description:
      "Videojuego físico-digital donde la única salida es por el final. Instalación interactiva con Unity 2D y hardware modificado.",
    url: "https://temperini.vercel.app/rectofinal",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/rectofinal-logo.png",
        width: 800,
        height: 600,
        alt: "Logo de Recto Final",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recto Final | Videojuego físico-digital | Lautaro R. Temperini",
    description:
      "Videojuego físico-digital donde la única salida es por el final. Instalación interactiva con Unity 2D y hardware modificado.",
    images: ["https://temperini.vercel.app/images/rectofinal-logo.png"],
  },
};

export default function RectoFinalPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main>
        {/* Hero Section */}
        <SectionIntro
          title="RECTO FINAL"
          subtitle="Videojuego físico-digital donde la única salida… es por el final"
          description={
            <>
              Proyecto académico UNLP que combina Unity 2D con hardware modificado para crear una experiencia inmersiva.
              <br />
              El objetivo fue claro: desarrollar una instalación que sobreviviera 3+ horas de público general sin colapsar.
            </>
          }
          align="left"
          className="min-h-screen py-24 md:py-32"
          titleClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] 2xl:text-[200px] font-semibold leading-tight"
          isMainTitle
        />

        {/* Mi rol */}
        <SectionIntro
          title="Mi aporte específico en el proyecto: "
          description="• Programador principal en Unity 2D con C#. • Integrador técnico de hardware modificado (volante PC + teclado hackeado). • Co-director creativo y desarrollador de narrativa."
          className="bg-[#1A1A1A]/20 border border-purple-400/25 rounded-2xl px-8 py-8"
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* Contexto + Especificaciones */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Contexto del Proyecto</h2>
              <p className="text-[#A6A6A6]">Proyecto académico UNLP - Taller de Experiencias Interactivas</p>
              <ul className="text-[#A6A6A6] space-y-2">
                <li>• Duración: 1 cuatrimestre</li>
                <li>• Equipo: 10 personas multidisciplinarias</li>
                <li>• Año: 2024</li>
                <li>• Contexto: Feria estudiantil con público general</li>
              </ul>
              <p className="text-[#A6A6A6]">El brief académico era brutal: desarrollar un videojuego físico-digital para feria estudiantil que operara sin técnicos constantemente reiniciando el sistema.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Especificaciones Técnicas</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Motor y Lenguaje:</h4>
                  <p className="text-[#A6A6A6]">Unity 2D con input personalizado • C#</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Hardware:</h4>
                  <p className="text-[#A6A6A6]">Volante PC modificado + teclado hackeado + botones pulsadores</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Software:</h4>
                  <p className="text-[#A6A6A6]">Visual Studio Code, Photoshop</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-2">Operación:</h4>
                  <p className="text-[#A6A6A6]">3 minutos por partida • Adaptabilidad en tiempo real durante 3+ horas</p>
                </div>
              </div>
            </div>
          }
          className="min-h-screen"
        />

        {/* El Desafío Real + Transformar el Absurdo */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El Desafío Real</h2>
              <h3 className="text-2xl font-semibold text-[#F2F2F2] mb-4">
                Crear una instalación que sobreviva 3+ horas de público general sin colapsar
              </h3>
              <p className="text-[#A6A6A6]">El brief académico era brutal: desarrollar un videojuego físico-digital para feria estudiantil que operara sin técnicos constantemente reiniciando el sistema. Además, los elementos narrativos llegaron por sorteo obligatorio: un pirata, un dimetrodón, un martillo oxidado y ecofuturismo.</p>
              <p className="text-[#A6A6A6]">La decisión clave: No resistir el absurdo, sino transformarlo en un mundo visceralmente coherente.</p>
              <p className="text-[#F2F2F2] font-semibold">Mi propuesta narrativa fue seleccionada entre más de 20 ideas, pero no por su creatividad libre, sino por su viabilidad técnica bajo restricciones absurdas.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Transformar el Absurdo en Coherencia</h2>
              <p className="text-[#A6A6A6]">Los elementos impuestos: Pirata + dimetrodón + martillo oxidado + ecofuturismo.</p>
              <p className="text-[#A6A6A6]">Mi solución narrativa: El Pelusa, un pirata, es tragado por un dimetrodón. Desde el estómago ácido del dinosaurio, defiende su barco golpeando esqueletos piratas con su martillo mientras el entorno se vuelve progresivamente más visceral y repugnante.</p>
              <p className="text-[#F2F2F2] font-semibold">El twist que lo cierra: La "luz al final del túnel" de escape es, literalmente, la salida del tracto digestivo. De ahí Recto Final: chiste, metáfora y cierre narrativo en una sola frase.</p>
              <p className="text-[#A6A6A6]">La solución visual del ecofuturismo: El equipo de arte resolvió brillantemente la contradicción con un barco con forma de tiburón, vegetación real integrada a la instalación y un pirata ciborg. La UI navegaba entre steampunk y dieselpunk, logrando coherencia estética donde el concepto inicial parecía imposible.</p>
              <p className="text-[#A6A6A6]">Mi rol: Desarrollé la lógica narrativa que hiciera funcionar elementos inconexos como un universo jugable coherente. El humor absurdo no fue una elección creativa libre, fue ingeniería narrativa bajo restricciones.</p>
            </div>
          }
        />

        {/* Placeholder para imagen de instalación */}
        <FullImage
          src="/images/placeholder-instalacion.jpg"
          alt="Instalación completa con público"
          className="max-w-[60vw] w-full h-auto mx-auto"
          shadow
        />

        {/* Placeholder para moodboard */}
        <FullImage
          src="/images/placeholder-moodboard.jpg"
          alt="Moodboard visual — paleta ácida, texturas orgánicas, tipografía retro-pirata"
          className="max-w-[60vw] w-full h-auto mx-auto"
          shadow
        />

        {/* Del Cuerpo al Código + Decisiones Técnicas */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Del Cuerpo al Código: Mecánicas Físicas</h2>
              <p className="text-[#A6A6A6]">Combiné Whac-A-Mole (golpear puntos fijos) + Subway Surfers (cambiar carriles) pero con interfaces físicas reales:</p>
              <ul className="text-[#A6A6A6] space-y-2">
                <li>• Calaveras golpeables: Teclado hackeado con botones embebidos en estructuras 3D</li>
                <li>• Timón de navegación: Volante de PC modificado usando su giroscopio interno</li>
                <li>• Flujo autónomo: Pantalla de Inicio → Intro → Tutorial → Juego → Game Over → Reinicio automático</li>
              </ul>
              <p className="text-[#A6A6A6]">Decisión técnica estratégica: Probamos TouchOSC y Arduino: ambos descartados por latencia o complejidad. Elegí el volante como solución robusta y plug & play. El volante, aunque medio roto, tenía algo que ninguno de los otros sistemas ofrecía: estabilidad sin necesidad de conexión inalámbrica ni drivers adicionales.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Decisiones Técnicas Críticas</h2>
              <p className="text-[#A6A6A6]">Responsabilidad directa: Programación completa del sistema de juego en Unity</p>
              <ul className="text-[#A6A6A6] space-y-2">
                <li>• Sistema de vidas y oleadas crecientes con HUD responsivo a cada golpe físico</li>
                <li>• Flujo de interacción sin botones ni espera: golpe para iniciar, tutorial automático, reinicio desde win/lose</li>
                <li>• Duración fija de 3 minutos: Calculada para mantener engagement sin fatiga y permitir flujo constante de jugadores</li>
                <li>• Calibración de dificultad: Ajustada para que el 80% de jugadores ganara, maximizando satisfacción emocional</li>
              </ul>
              <p className="text-[#F2F2F2] font-semibold">Todo estaba orientado a una sola meta: que el sistema no requiriera explicación, ni asistencia humana, ni reinicios manuales.</p>
            </div>
          }
          reverse
        />

        {/* Placeholder para proceso técnico */}
        <FullImage
          src="/images/placeholder-proceso-tecnico.jpg"
          alt="Proceso técnico — soldadura, volante, sensores"
          className="max-w-[60vw] w-full h-auto mx-auto"
          shadow
        />

        {/* Momentos de Tensión Real + Resistencia del Sistema */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Momentos de Tensión Real</h2>
              <p className="text-[#A6A6A6]">El día previo a la muestra, el volante comenzó a generar input involuntario hacia la derecha. Lo recalibré desde código, ajustando los umbrales de detección. Además, tuvimos que salir casi de urgencia a comprar un extensor USB porque el cable original no alcanzaba la nueva configuración del stand.</p>
              <p className="text-[#A6A6A6]">Durante la feria, una nena de 7 años le dio tan fuerte al martillo que lo desarmó en dos. Tomé la decisión en caliente: reprogramé el input para permitir golpes directos con la mano. Mientras tanto, organizamos la soldadura del cable roto y restituí la jugabilidad completa sin detener la partida. Los jugadores no notaron la transición.</p>
              <p className="text-[#F2F2F2] font-semibold">Ese momento me confirmó que no se trataba solo de saber programar. Se trataba de pensar en tiempo real, liderar bajo presión y mantener la jugabilidad viva sin importar lo que fallara.</p>
              <p className="text-[#A6A6A6]">Crisis de equipo a mitad del proyecto: Cuando una integrante clave se desinteresó y hubo conflictos internos, asumí coordinar la redistribución de tareas según habilidades reales: quién soldaba mejor, quién ejecutaba diseño, quién podía programar bajo presión.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Resistencia del Sistema en Condiciones Reales</h2>
              <p className="text-[#A6A6A6]">Métricas de Éxito Internas:</p>
              <ul className="text-[#A6A6A6] space-y-2">
                <li>• Flujo constante de jugadores durante más de 3 horas consecutivas</li>
                <li>• Alto reconocimiento visual que generaba colas espontáneas</li>
                <li>• Adaptabilidad en tiempo real ante imprevistos técnicos menores</li>
              </ul>
              <p className="text-[#F2F2F2] font-semibold">No fue la más tecnológica, fue la más resistente. Y eso, en un entorno real, vale más que cualquier shader.</p>
              <p className="text-[#A6A6A6]">Mi Aporte Visual-Técnico: Implementé efectos que emulaban texturas de carne y ácido, colaborando con ilustradores para lograr un resultado visceral convincente. No era solo código: era programación con criterio estético para reforzar la inmersión.</p>
              <p className="text-[#A6A6A6]">El Momento Emocional: El Outro Sorprendente: La mayoría de jugadores no esperaba el remate narrativo. Ver sus caras cuando El Pelusa finalmente "salía" del dinosaurio era genuinamente satisfactorio. Ahí entendían el chiste del título. "¿¡Salió de ahí!?", decían. No tenías que explicarlo. Se entendía en silencio.</p>
              <p className="text-[#A6A6A6]">Era el tipo de final que no necesitaba explicación, solo una sonrisa incómoda. Eso es diseño emocional.</p>
              <p className="text-[#F2F2F2] font-semibold">El aprendizaje: Los mejores sistemas no son los más complejos, sino los que sobreviven a golpes, cables sueltos… y niños entusiasmados.</p>
            </div>
          }
        />

        {/* Placeholders para capturas y fotos */}
        <TwoColumn
          left={
            <FullImage
              src="/images/placeholder-hud-outro.jpg"
              alt="Captura de HUD, outro, golpe físico"
              className="w-full h-auto"
              border={false}
              width={600}
              height={400}
            />
          }
          right={
            <FullImage
              src="/images/placeholder-volante-recalibrado.jpg"
              alt="Foto del volante siendo recalibrado"
              className="w-full h-auto"
              border={false}
              width={600}
              height={400}
            />
          }
        />

        {/* Placeholders para instalación y reparación */}
        <TwoColumn
          left={
            <FullImage
              src="/images/placeholder-instalacion-publico.jpg"
              alt="Instalación funcionando con público diverso"
              className="w-full h-auto"
              border={false}
              width={600}
              height={400}
            />
          }
          right={
            <FullImage
              src="/images/placeholder-reparacion-vivo.jpg"
              alt="Momento de reparación en vivo"
              className="w-full h-auto"
              border={false}
              width={600}
              height={400}
            />
          }
        />

        {/* El Casi-Colapso Final + Visión Personal */}
        <TwoColumn
          left={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">El Casi-Colapso Final</h2>
              <p className="text-[#A6A6A6]">El drama real: Casi no llegamos. El equipo de ilustración estaba muy atrasado a 48 horas de la muestra. Todos intervinimos para salvar el proyecto: yo parcheando assets provisorios, el equipo de escenografía construyendo el barco en menos de una semana tras devoluciones duras, programadores ajustando efectos visuales en tiempo real.</p>
              <p className="text-[#A6A6A6]">Las calaveras golpeables: Terminaron siendo pelotas de papel y cinta, soldadas con cables de teclado. Funcional, resistente y completamente artesanal.</p>
              <p className="text-[#A6A6A6]">La tensión: No era solo un proyecto académico. Era la diferencia entre mostrar algo funcional o presentarse con pantallas en blanco.</p>
              <p className="text-[#F2F2F2] font-semibold">El resultado: Teníamos calaveras de papel, cartapesta, código, voluntad... y un poco de delirio técnico. No fue magia: fue resiliencia organizada.</p>
            </div>
          }
          right={
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#F2F2F2]">Visión Personal: Más Allá del Proyecto</h2>
              <p className="text-[#A6A6A6]">Este proyecto me marcó porque me enseñó que lo importante no es el realismo técnico, sino la conexión visceral con el jugador. Y que los mejores sistemas no son los más complejos, sino los que sobreviven al mundo real.</p>
              <p className="text-[#A6A6A6]">Hoy sigo diseñando experiencias físico-digitales, pero Recto Final sigue siendo mi referencia: cómo transformar limitaciones absurdas en coherencia jugable, cómo programar sistemas que se adapten cuando todo falla, y cómo liderar decisiones técnicas críticas bajo presión extrema.</p>
              <p className="text-[#F2F2F2] font-semibold">La lección más valiosa: La mejor tecnología es la que se hace invisible cuando el usuario está completamente inmerso en golpear calaveras dentro del estómago de un dinosaurio.</p>
            </div>
          }
        />

        {/* Placeholder para PDF técnico */}
        <SectionIntro
          title="Documentación Técnica"
          description="Link a PDF técnico o GDD (si corresponde)"
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />

        {/* Aprendizajes en Grid */}
        <GridTwoByTwo className="min-h-screen">
          <InsightCard title="Los mejores sistemas no son los más complejos, sino los que sobreviven al mundo real.">
            La tecnología más elegante es inútil si no puede manejar niños entusiasmados, cables sueltos y hardware roto.
          </InsightCard>
          <InsightCard title="Transformar limitaciones absurdas en coherencia jugable requiere ingeniería narrativa.">
            El humor absurdo no fue una elección creativa libre, fue ingeniería narrativa bajo restricciones impuestas.
          </InsightCard>
          <InsightCard title="Liderar bajo presión significa mantener la jugabilidad viva sin importar lo que falle.">
            La capacidad de adaptar el sistema en tiempo real es más valiosa que cualquier shader o efecto visual.
          </InsightCard>
          <InsightCard title="La mejor tecnología se hace invisible cuando el usuario está completamente inmerso.">
            El éxito se mide por la conexión visceral con el jugador, no por la complejidad técnica del código.
          </InsightCard>
        </GridTwoByTwo>

        {/* Conclusión */}
        <ConclusionBlock className="rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-[#F2F2F2] mb-6 text-center">Conclusión</h2>
          <div className="space-y-4 text-[#A6A6A6] leading-relaxed max-w-2xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#F2F2F2]">Recto Final demostró que la ingeniería creativa puede transformar el caos en coherencia:</p>
            <p className="text-xl">La combinación de programación robusta, hardware modificado y narrativa absurda puede crear experiencias que no solo funcionan, sino que sobreviven y emocionan en condiciones reales.</p>
          </div>
        </ConclusionBlock>

        {/* Placeholder para botón jugar - AL FINAL */}
        <SectionIntro
          title="Demo del Juego"
          description="Botón Jugar o video de demo en caso de versión digital"
          align="left"
          titleClassName="text-3xl font-bold text-[#F2F2F2]"
        />
      </main>
      <Footer />
      <ScrollToTop size={48} />
    </div>
  );
} 