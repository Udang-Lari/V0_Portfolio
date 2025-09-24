import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Briefcase } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Computer Science Skills",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "C",
        "C++",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "Java",
        "JavaScript",
        "React",
        "Tailwind",
        "Git"
      ],
    },
    {
      title: "Non-Programming Skills",
      icon: <Briefcase className="h-5 w-5" />,
      skills: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Forms",
        "Google Docs",
        "Google Sheets",
        "Google Slides",
        "Google Form",
        "Notion",
        "Canva",
        "Figma"
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Skills</h2>
          <p className="text-lg text-muted-foreground">My technical and professional capabilities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="p-3 rounded-lg bg-muted/50 border border-border text-center">
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
