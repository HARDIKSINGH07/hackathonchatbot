
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="text-3xl">🤖</div>
            <div className="font-nunito font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan to-lavender">
              Bile Bot
            </div>
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#features" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#chat" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
                Chat
              </a>
              <a href="#resources" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#about" className="font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
            <Button className="gen-z-button">
              Start Chat Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-accordion-down">
            <a 
              href="#features" 
              className="block py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#chat" 
              className="block py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </a>
            <a 
              href="#resources" 
              className="block py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#about" 
              className="block py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button className="w-full gen-z-button" onClick={() => setIsMenuOpen(false)}>
              Start Chat Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
