
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

type Message = {
  text: string;
  isUser: boolean;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm Bile Bot, your mental health companion. I'm here to chat about anxiety, stress, depression, or any other concerns you might have. How are you feeling today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Auto scroll to bottom on new messages
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Predefined responses for common mental health topics
  const responses = {
    anxiety: [
      "It sounds like you're experiencing anxiety. Many people feel this way, and it's completely valid. What specific situations trigger your anxiety?",
      "Anxiety can be challenging to deal with. Have you tried any breathing exercises when feeling anxious? Deep breathing for just 2 minutes can help reduce the immediate feelings of anxiety.",
      "I understand anxiety can be overwhelming. Would you like to learn about some grounding techniques that might help?"
    ],
    stress: [
      "Dealing with stress can be difficult. Could you tell me more about what's causing your stress?",
      "Stress affects us all differently. What strategies have you tried so far to manage it?",
      "Taking small breaks throughout the day can help manage stress levels. Have you been able to incorporate any self-care into your routine?"
    ],
    depression: [
      "I'm sorry to hear you're feeling down. Depression can make everything feel more difficult. Have you noticed any patterns in when you feel this way?",
      "It takes courage to talk about depression. How long have you been feeling this way?",
      "Depression can make it hard to see the positive aspects of life. Would it help to discuss some small steps that might make day-to-day life a bit easier?"
    ],
    default: [
      "I'm here to listen. Could you tell me more about what you're experiencing?",
      "Thank you for sharing that with me. How have these feelings been affecting your daily life?",
      "I appreciate you opening up. What would be most helpful for you right now - just someone to listen, or would you like some suggestions?"
    ],
    crisis: [
      "I'm concerned about what you're sharing. If you're in immediate danger, please call emergency services or a crisis helpline right away. Would you like me to provide some crisis resource numbers?"
    ]
  };
  
  // Check message for crisis keywords
  function checkForCrisis(message: string) {
    const crisisKeywords = ['suicide', 'kill myself', 'end my life', 'want to die', 'harm myself'];
    return crisisKeywords.some(keyword => message.toLowerCase().includes(keyword));
  }
  
  // Get appropriate response category
  function getResponseCategory(message: string) {
    const lowerMessage = message.toLowerCase();
    if (checkForCrisis(lowerMessage)) return 'crisis';
    if (lowerMessage.includes('anxi') || lowerMessage.includes('worry') || lowerMessage.includes('panic')) return 'anxiety';
    if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelm') || lowerMessage.includes('pressure')) return 'stress';
    if (lowerMessage.includes('depress') || lowerMessage.includes('sad') || lowerMessage.includes('hopeless') || lowerMessage.includes('down')) return 'depression';
    return 'default';
  }
  
  // Get random response from appropriate category
  function getBotResponse(message: string) {
    const category = getResponseCategory(message);
    const categoryResponses = responses[category as keyof typeof responses];
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  }
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <section id="chat" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-mint/10 text-mint font-medium text-sm">
            <span className="mr-2">💬</span> Chat
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Talk to Bile Bot</h2>
        </div>
        
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-white">
          <div className="bg-gradient-to-r from-cyan to-lavender p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl mr-2">🤖</div>
              <h3 className="font-bold text-white">Bile Bot</h3>
            </div>
            <div className="bg-white/20 text-white text-sm px-2 py-1 rounded-full">Online</div>
          </div>
          
          <div 
            ref={chatBodyRef}
            className="h-[400px] p-4 overflow-y-auto flex flex-col gap-4 bg-gradient-to-b from-white to-lavender/5"
          >
            {messages.map((message, index) => (
              <div key={index} className={message.isUser ? "user-bubble" : "bot-bubble"}>
                {message.text}
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-white border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="rounded-full focus-ring"
            />
            <Button 
              onClick={handleSendMessage} 
              className="rounded-full bg-gradient-to-r from-cyan to-lavender hover:from-cyan-dark hover:to-lavender-dark"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
