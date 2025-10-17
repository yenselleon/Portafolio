"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/modern-ecommerce-interface.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/task-management-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas.",
    technologies: ["React", "API REST", "Chart.js", "CSS Modules"],
    image: "/weather-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description: "Red social con sistema de posts, comentarios, likes y mensajería en tiempo real.",
    technologies: ["MERN Stack", "Socket.io", "JWT", "Cloudinary"],
    image: "/social-media-feed-interface.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos personales y profesionales que demuestran mis habilidades en desarrollo web full
            stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="default" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
