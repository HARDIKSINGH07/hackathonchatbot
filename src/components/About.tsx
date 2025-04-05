
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-mint/10 text-mint font-medium text-sm">
            <span className="mr-2">ℹ️</span> About
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">About Bile Bot</h2>
        </div>
        
        <Card className="gen-z-card border-0 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <p className="mb-4 text-lg">
              Bile Bot is an AI-powered chatbot designed to provide support for mental health concerns including anxiety, stress, depression, and general wellbeing. While Bile Bot is not a replacement for professional mental health services, it offers a safe space to express your feelings, get coping strategies, and access resources.
            </p>
            <p className="text-lg">
              Our mission is to make mental health support accessible to everyone, 24/7, in a private and secure environment. We continuously improve our AI to provide more empathetic and helpful responses.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🤖</div>
                <div className="font-bold">AI-Powered</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🔒</div>
                <div className="font-bold">Private</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">🌈</div>
                <div className="font-bold">Inclusive</div>
              </div>
              <div className="bg-muted rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">💯</div>
                <div className="font-bold">Free</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
