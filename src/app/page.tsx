"use client";

import Navbar from "@/components/1 Navbar/Navbar";
import Hero from "../components/2 Hero/Hero";
import Projects from "../components/3 Projects/SeccionProjects";
import About from "../components/4 About/About";
import Footer from "../components/5 Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="page-transition">
        <main>
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
} 