import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "Desarrollador Web – Semi Senior",
    company: "Smarter Solutions, C.A",
    period: "Abril 2022 - Presente",
    location: "Estado Miranda, Venezuela",
    achievements: [
      "Diseñé y desplegué una arquitectura serverless a gran escala en AWS para un sistema distribuido de Banesco Seguros, utilizando microservicios con NestJS y componentes como API Gateway, Lambda y Cognito de AWS.",
      `Implementé la solución full-stack (React, NestJS) para un proyecto de análisis de imágenes con Amazon Rekognition para la extracción y recolección de datos, el cual fue presentado por la empresa en el evento "Digital Enterprise Show" 2023 en Málaga, España.`,
      "Automaticé la creación de infraestructura (IaC) y los despliegues de contenedores Docker desde ECR hacia un clúster de ECS, mejorando la eficiencia y reduciendo los tiempos de despliegue.",
      "Mejoré funcionalidades para Triskell una aplicación de gestión de proyectos, abarcando desde la base de datos hasta la interfaz de usuario.",
    ],
  },
  {
    role: "Desarrollador Web Autónomo",
    company: "Proyectos Personales",
    period: "Noviembre 2020 - Abril 2023",
    location: "Remoto",
    achievements: [
      "Implementación de funcionalidades en aplicaciones Web con JavaScript, React, Node.js, MongoDB, Express y Mongoose",
      `Trabajos integrales como la implementación de microservicios, maquetación 
        web, transformando diseños gráficos en código HTML y CSS responsivo bajo el 
        stack MERN y la mejora de funcionalidades`,
      `Participación en eventos de programación (COMFECO), desarrollando en equipo 
        una aplicación completa bajo el stack MERN`,
      "Desarrollo de habilidades de manera autodidacta mediante la práctica constante y aprendizaje continuo, tanto para el area frontend como backend",
    ],
  }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Experiencia Profesional</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:border-accent/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>{exp.company}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
