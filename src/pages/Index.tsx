
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ChatBot from '@/components/ChatBot';
import Resources from '@/components/Resources';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
