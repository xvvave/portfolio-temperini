import Navbar from "@/components/1 Navbar/Navbar";
import Footer from "../../components/5 Footer/Footer";
import PlaygroundGrid from "./Playground";

export const metadata = {
  title: "Playground | Lautaro R. Temperini",
  description: "Explora el playground interactivo de Lautaro R. Temperini: experimentos, microproyectos y prototipos de diseño y desarrollo web.",
  keywords: "playground, experimentos, prototipos, microproyectos, Lautaro Temperini, diseño, desarrollo web",
  openGraph: {
    title: "Playground | Lautaro R. Temperini",
    description: "Explora el playground interactivo de Lautaro R. Temperini: experimentos, microproyectos y prototipos de diseño y desarrollo web.",
    url: "https://temperini.vercel.app/playground",
    siteName: "Temperini Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://temperini.vercel.app/images/foto-lautaro.png",
        width: 800,
        height: 600,
        alt: "Foto de Lautaro Temperini"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground | Lautaro R. Temperini",
    description: "Explora el playground interactivo de Lautaro R. Temperini: experimentos, microproyectos y prototipos de diseño y desarrollo web.",
    images: ["https://temperini.vercel.app/images/foto-lautaro.png"]
  }
};

export default function PlaygroundPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24 px-4 md:px-6 lg:px-10 w-full">
        <PlaygroundGrid />
      </main>
    </div>
  );
} 