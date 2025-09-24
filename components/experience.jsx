import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Github, ExternalLink } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-lg text-muted-foreground">My academic journey</p>
        </div>

        <Card className="border border-border bg-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-foreground">Samsung Solve for Tomorrow 2025</CardTitle>
                <p className="text-lg text-muted-foreground font-medium">Semifinalist</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>May 2025 - July 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Kota Tangerang, Banten, Indonesia</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Collaboratively designed and ideated FitVerse, a gamified workout web app with wearable devices, made inclusive of people with disabilities and women. The app was aimed to enhance the workout experience of people with disabilities by providing accessibility features and personalized workout according to their needs.  
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Key Learnings:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Collaborated with a team of four (4) people to work on various tasks</li>
                <li>Gained experience in following through sets of events for a hackathon</li>
                <li>Learned the electrical components and sensors needed for the wearable device</li>
                <li>Learned simple circuit design and assembly for the wearable device</li>
                <li>Learned how to deploy a website for free using Vercel</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">Vercel</Badge>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <Button variant="outline" size="sm" asChild>
                <a href="https://docs.google.com/document/d/1KVektF_Uv54E6EE0t68q6gPlumVmbjnu/edit?usp=sharing&ouid=110260741687593648807&rtpof=true&sd=true">
                  <ExternalLink className="h-4 w-4 mr-2" /> 
                  Concept Paper
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="https://fitverse-sft.vercel.app">
                  <Github className="h-4 w-4 mr-2" />
                  Static Website
                </a>
              </Button>            
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
