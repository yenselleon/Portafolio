export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <img
                src="/professional-developer-portrait.png"
                alt="Yensel-leon"
                className="rounded-2xl object-cover w-full h-full border-2 border-accent/20"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Sobre mí</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un Desarrollador Full Stack con 5 años de experiencia, enfocado en construir soluciones escalables y de alto rendimiento,
                llevando ideas complejas a la realidad, mi especialidad es la implementación de aplicaciones web modernas, desde la 
                interfaz de usuario, lógica de backend y la infraestructura subyacente en la nube.
              </p>
              <p>
                A lo largo de mi trayectoria, he tenido la oportunidad de trabajar en proyectos para pequeñas startups hasta grandes corporaciones, 
                lo que me ha dado una visión versátil del ciclo de vida del software. Mi curiosidad me ha llevado a obtener tres certificaciones de AWS, 
                validando mi conocimiento para crear sistemas seguros y eficientes.
              </p>
              <p>
                Cuando no estoy programando, disfruto de viajar y de actividades al aire libre como ir a la montaña, la pesca y la fotografía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
