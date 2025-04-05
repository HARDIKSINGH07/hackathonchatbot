
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-lavender/10 text-lavender font-medium text-sm">
            <span className="mr-2">✨</span> Your mental health buddy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Feeling off? Chat with{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-lavender">
                Bile Bot
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-cyan-light" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Your AI companion for mental wellbeing. Talk about anxiety, stress, 
            depression, or anything affecting your mental health in a safe, 
            anonymous environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gen-z-button text-lg px-8 py-6">
              <a href="#chat">Start Chatting</a>
            </Button>
            <Button asChild variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-muted/50">
              <a href="#resources">Explore Resources</a>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <div className="flex items-center text-muted-foreground">
              <div className="text-2xl mr-2">🔒</div>
              <span>Anonymous</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="text-2xl mr-2">🤖</div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="text-2xl mr-2">💯</div>
              <span>Free to Use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
