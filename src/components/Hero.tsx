
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedBot from './AnimatedBot';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-mindblue/10 to-mindpink/5 -z-10"></div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Your Mind Deserves <span className="text-gradient">a Friend</span> Too
      </h1>
      
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        MindSaarthi is your AI companion for mental wellbeing, offering personalized support 
        whenever you need someone to talk to about stress, anxiety, or your emotions.
      </p>
      
      <AnimatedBot size={120} className="my-8" />
      
      <p className="text-sm text-gray-500 mb-6">Click on the bot to start a conversation</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          className="bg-gradient-to-r from-mindblue to-mindpink text-white hover:shadow-lg transition-all px-8 py-6 text-lg"
          asChild
        >
          <Link to="/chat">Begin Your Journey</Link>
        </Button>
        
        <Button 
          variant="outline"
          className="border-mindblue text-mindblue hover:bg-mindblue/10 px-8 py-6 text-lg"
          asChild
        >
          <Link to="/find-therapist">Find a Therapist</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
