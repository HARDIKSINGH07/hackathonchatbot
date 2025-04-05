
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🕒",
    title: "24/7 Support",
    description: "Available whenever you need someone to talk to, day or night."
  },
  {
    icon: "🔒",
    title: "Privacy Focused",
    description: "Your conversations are anonymous and your data is protected."
  },
  {
    icon: "💭",
    title: "Understanding & Empathy",
    description: "Bile Bot responds with empathy and understanding to your unique situation."
  },
  {
    icon: "📊",
    title: "Self-Assessment Tools",
    description: "Track your emotional wellbeing and monitor your progress over time."
  },
  {
    icon: "📚",
    title: "Resource Library",
    description: "Access helpful articles and techniques for managing mental health."
  },
  {
    icon: "🚨",
    title: "Crisis Support",
    description: "Get immediate resources when you need them most."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-lavender/5">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <div className="section-badge bg-cyan/10 text-cyan">
            <span className="mr-2">🌟</span> Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">How Bile Bot Helps You</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="gen-z-card card-hover border-0 overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-4xl mb-4 emoji-icon">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
