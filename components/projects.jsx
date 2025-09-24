import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Clock, CheckCircle, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      category: "Past Project",
      icon: <CheckCircle className="h-5 w-5" />,
      title: "V Kellogg's Website",
      description:
        'A front-end focused project made to showcase the importance of proper UI/UX implementation using basic HTML, CSS, and JavaScript. Although it was not deployed due to final project instructions, the site emphasizes scalability, responsiveness, speed, and user-friendliness by applying a simple design with minimal gimmicks that works well across multiple screen sizes. Through this project, I learned the importance of delivering a user-centric product, the true meaning of “less is more” in web design, and how to create reusable components and screen scaling techniques for better adaptability.',
      image: "/modern-ecommerce-interface.png",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      github: "https://github.com/Udang-Lari/Semester-2---HCI-AoL",
      demo: "https://udang-lari.github.io/Semester-2---HCI-AoL/",
      status: "Completed",
    },
    {
      category: "Ongoing Project",
      icon: <Clock className="h-5 w-5" />,
      title: "Arduino Drone Prototype for Boids Algorithm-Based Swarm",
      description:
        "A collaborative drone project that uses C++ as the main language to program the flight controller. The main electronic components used in this project are Arduino Nano for the flight controller, NRF24L01 module for the wireless communication, Cyclone 35A BLHeli_S ESCs for the BLDC motor speed controller, MPU-6050 for the gyroscope and accelerometer, GY-BMP280 for the barometer, and Matek PDB for the power distribution board to each speed controllers.",
      image: "/task-management-dashboard.png",
      technologies: ["C++", "Python", "Arduino", "AI", "IoT", "Hardware"],
      github: "https://github.com/yourusername/task-manager",
      status: "In Progress",
    },
    {
      category: "Upcoming Project",
      icon: <Calendar className="h-5 w-5" />,
      title: "PlanetoDo",
      description:
        "As the name suggests, PlanetoDo (from Planet and Plan to Do) is a gamified to-do list app with interface similar to a planetary system. The main gimmick of the app is to have your tasks as meteors coming towards your planet and the time to impact is according to the due date. This app is designed to give users dopamine and a sense of urgency instead of just looking at a list of items.",
      image: "/ai-study-assistant-interface.jpg",
      technologies: ["Python", "React", "Tailwind", "SQL", "TBA"],
      github: "https://github.com/yourusername/ai-study-assistant",
      demo: "#",
      status: "Planned",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground">A showcase of my work across different stages</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                {project.icon}
                <h3 className="text-xl font-semibold text-foreground">{project.category}</h3>
                <Badge
                  variant={
                    project.status === "Completed"
                      ? "default"
                      : project.status === "In Progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {project.status}
                </Badge>
              </div>

              <Card className="border border-border bg-card overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo !== "#" && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
