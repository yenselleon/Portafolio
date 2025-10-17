"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "yensel41@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[portafolio-yense] Form submitted")
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">Contáctame</h2>
        <p className="text-center text-muted-foreground mb-12 text-pretty">
          ¡Hablemos! Siempre estoy abierto a discutir nuevos proyectos e ideas.
        </p>

        <Card className="p-6 sm:p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre
              </label>
              <Input id="name" type="text" placeholder="Tu nombre" required className="w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" required className="w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <Textarea id="message" placeholder="Tu mensaje..." required className="w-full min-h-32" />
            </div>

            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </Card>

        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">Email:</span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            {email}
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  )
}
