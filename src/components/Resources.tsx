
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    icon: "📝",
    title: "Anxiety Management Techniques",
    description: "Learn practical strategies to manage anxiety in daily life.",
    link: "#"
  },
  {
    icon: "🧠",
    title: "Understanding Depression",
    description: "Comprehensive guide to depression symptoms and coping methods.",
    link: "#"
  },
  {
    icon: "🧘",
    title: "Stress Relief Exercises",
    description: "Simple exercises to reduce stress and improve mental clarity.",
    link: "#"
  },
  {
    icon: "💤",
    title: "Better Sleep Habits",
    description: "Tips for improving sleep quality to enhance mental wellbeing.",
    link: "#"
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-b from-white to-cyan/5 relative overflow-hidden">
      <div className="spotlight"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-heading">
          <div className="section-badge bg-lavender/10 text-lavender">
            <span className="mr-2">📚</span> Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Mental Wellbeing Resources</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our collection of articles, guides, and tools to help you maintain and improve your mental health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="gen-z-card card-hover border-0 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4 emoji-icon">{resource.icon}</div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                <Button asChild variant="outline" className="w-full rounded-full border-2 mt-auto group">
                  <a href={resource.link} className="flex items-center justify-between">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="gen-z-button group">
            <a href="#" className="flex items-center">
              <span>View All Resources</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
