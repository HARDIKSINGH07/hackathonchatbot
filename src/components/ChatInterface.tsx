
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mic, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const sampleResponses = [
  "I understand that you're feeling stressed. Let's take a moment to breathe together. Would you like to try a quick breathing exercise?",
  "It sounds like you're going through a difficult time. Remember that you're not alone in this journey. What specifically has been troubling you today?",
  "I hear you. Anxiety can be overwhelming sometimes. Have you tried any relaxation techniques that have worked for you in the past?",
  "Thank you for sharing that with me. It takes courage to talk about these feelings. Would you like to explore some coping strategies together?"
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{text: string; sender: 'user' | 'bot'}[]>([
    {text: "Hello! I'm MindSaarthi, your AI mental health companion. How are you feeling today?", sender: 'bot'}
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {text: inputValue, sender: 'user'}]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      setMessages(prev => [...prev, {text: randomResponse, sender: 'bot'}]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    toast({
      title: "Voice Input",
      description: "Voice input feature is coming soon!",
    });
  };

  const handleTextToSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      toast({
        title: "Not Supported",
        description: "Text-to-speech is not supported in your browser",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto max-w-4xl h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-4 rounded-lg ${
                message.sender === 'user' 
                ? 'bg-gradient-to-r from-mindblue to-mindpink text-white' 
                : 'glass-morphism'
              }`}
            >
              <p>{message.text}</p>
              {message.sender === 'bot' && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 hover:bg-white/10"
                  onClick={() => handleTextToSpeech(message.text)}
                >
                  <Volume2 className="h-4 w-4" />
                  <span className="ml-1">Listen</span>
                </Button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleVoiceInput}
          >
            <Mic className="h-5 w-5 text-mindblue" />
          </Button>
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            size="icon" 
            className="bg-mindblue hover:bg-mindblue/90"
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
