import React from "react";
import Contact from "./Contact";
import Navbar from "@/components/1 Navbar/Navbar";

export const metadata = {
  title: "Contacto | Lautaro R. Temperini",
  description: "Ponte en contacto con Lautaro R. Temperini para proyectos de diseño multimedia, desarrollo web y experiencias digitales.",
  keywords: "contacto, Lautaro Temperini, diseño multimedia, desarrollo web, UX/UI, experiencias digitales",
  openGraph: {
    title: "Contacto | Lautaro R. Temperini",
    description: "Ponte en contacto con Lautaro R. Temperini para proyectos de diseño multimedia, desarrollo web y experiencias digitales.",
    url: "https://temperini.vercel.app/contact",
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
    title: "Contacto | Lautaro R. Temperini",
    description: "Ponte en contacto con Lautaro R. Temperini para proyectos de diseño multimedia, desarrollo web y experiencias digitales.",
    images: ["https://temperini.vercel.app/images/foto-lautaro.png"]
  }
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
};

export default ContactPage; 