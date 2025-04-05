
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ChatBot from '@/components/ChatBot';
import Resources from '@/components/Resources';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
          
          // Update URL without reloading the page
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatBot />
        <Resources />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
