import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground">Get to know me better</p>
        </div>

        <Card className="border border-border bg-card">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                My name is Louis Ruisani, and I'm currently in my fifth semester pursuing a Bachelor's degree in Computer Science at BINUS University. Since last semester, I've been taking a free elective program where I learned more about <span className="font-bold">business development</span>, <span className="font-bold">strategic management</span>, and now <span className="font-bold">international finance</span>, as well as <span className="font-bold">digital corporate communication</span>. Quite the contrast with my current major, isn't it? But I think having a wider persepctive and knowledge base will help me excel in my career, as I can connect technical skills with real-world, day-to-day applications better. 
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                While my current track does not fully align with the field of computer science, I still maintain a high interest in Artificial Intelligence—particularly in how it can be implemented in practical, everyday contexts. Recently, I've also been looking more into <span className="font-bold text-[#41915B]">green/renewable energy</span>, considering the enormous potential of our renewable resources, like solar and geothermal energy. I find it interesting that this field is still quite niche despite the potential it has in our country, but that's also what intrigued me into learning more about it. 
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a person of many likings. When I'm not working, you'll probably find me playing music, drawing and designing just everything I find interesting (or displeasing to me, that's why I redesigned them), doing sports, or experimenting with small DIY projects. I also enjoy building plastic model kits, espeicially Gunpla (I will have another portfolio website for that), which for me is way to show your creativity and attention to detail through modifications, poses, and diorama. Sometimes I even spend a lot of time for the small details people don't really see, but those are the little things that elevated my works to the next level.   
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                On a more casual side, I really value hanging out with my close friends and family. Whether it's a quick coffee run, late-night talks, or just wasting time together, those simple moments matter a lot to me. I guess you could say I like keeping a balance between pushing myself forward academically and just enjoying life as it is.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
