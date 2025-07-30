import Navbar from "@/components/1 Navbar/Navbar"
import ScrollToTop from "@/components/fxscripts/scroll-to-top"
import Footer from "@/components/5 Footer/Footer"

export default function EnConstruccion() {
  return (
    <div className="page-transition">
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-2xl mx-auto px-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F2F2F2]">
              En Construcción
            </h1>
            <p className="text-xl text-[#A6A6A6] leading-relaxed">
              Estamos trabajando para mejorar esta sección. 
              <br />
              Volvé pronto.
            </p>
          </div>
          
          <div className="pt-8">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#F2F2F2] text-[#181818] font-semibold rounded-lg hover:bg-[#E0E0E0] transition-colors duration-200"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop size={48} />
    </div>
  )
} 