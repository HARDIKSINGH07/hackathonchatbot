
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-morphism bg-white/70">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/05eee2f0-67b3-48f5-b944-fb540d697518.png" 
            alt="MindSaarthi Logo" 
            className="h-16 md:h-20" 
          />
          <img 
            src="/lovable-uploads/94bbd34e-8cd5-4d14-8495-401ab47a243b.png" 
            alt="MindSaarthi Text" 
            className="h-10 md:h-14" 
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-mindblue transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-mindblue transition-colors">About</Link>
          <Link to="/resources" className="text-gray-700 hover:text-mindblue transition-colors">Resources</Link>
          <Link to="/find-therapist" className="text-gray-700 hover:text-mindblue transition-colors">Find a Therapist</Link>
        </div>
        
        <Button 
          className="bg-gradient-to-r from-mindblue to-mindpink text-white hover:shadow-lg transition-all"
          asChild
        >
          <Link to="/chat">Start Talking</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
