import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 blur-3xl opacity-50 bg-accent scale-110 -z-10" aria-hidden="true" />
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Yensel Leon
          </h1>
        </div>
        <p className="text-2xl sm:text-3xl text-accent font-medium mb-6">Desarrollador Full Stack / Cloud AWS Certified.</p>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Apasionado por la tecnologia y la innovacion, transformando ideas en soluciones digitales. Mi experiencia abarca desde la creación de interfaces de usuario, implementacion de logica backend, hasta el diseño de arquitecturas cloud seguras, escalables y de alto rendimiento.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/yensel-leon-solorzano-723ab5116/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/yenselleon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <Button size="lg" className="text-base">
          Descargar CV
        </Button>
      </div>
    </section>
  )
}
