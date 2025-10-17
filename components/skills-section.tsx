import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Lenguajes",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks y Librerías",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Redux"],
  },
  {
    category: "Bases de Datos",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Figma"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Mis Habilidades Técnicas</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
