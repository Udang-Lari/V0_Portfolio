"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-balance text-foreground">Louis Ruisani</h1>
            <p className="text-xl text-muted-foreground">Third Year Computer Science Student</p>
            <p className="text-base text-muted-foreground italic">Business • Renewable Energy • AI • IoT</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently making my own portfolio website... This is just temporary
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View my work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact me
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/Udang-Lari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/louis-r-901146367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:louis.ruisani@binus.ac.id"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-border">
            // <div className="text-6xl">👨‍💻</div>
            <img
              src="/Pasfoto_Louis.jpg",
              alt="Profile Picture",
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
