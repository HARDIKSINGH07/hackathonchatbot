
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-3xl group-hover:rotate-12 transition-transform">🤖</div>
            <div className="font-nunito font-bold text-xl text-gradient from-cyan to-lavender">
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
            <Button asChild className="gen-z-button">
              <a href="#chat">Start Chat Now</a>
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
            <Button asChild className="w-full gen-z-button" onClick={() => setIsMenuOpen(false)}>
              <a href="#chat">Start Chat Now</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
