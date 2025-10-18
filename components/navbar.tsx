"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
            YL<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button size="sm" className="hidden md:inline-flex">
            Descargar CV
          </Button>

          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleMobileLinkClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" className="w-full mt-2">
              Descargar CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
