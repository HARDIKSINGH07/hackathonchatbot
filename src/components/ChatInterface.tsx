
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm MindSaarthi, your mental wellness companion. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined bot responses for demo purposes
  const botResponses = [
    "I understand how challenging that can be. Would you like to try a quick breathing exercise to help you feel more centered?",
    "It sounds like you're going through a lot right now. Remember that your feelings are valid, and it's okay to take things one step at a time.",
    "Thank you for sharing that with me. Would it help to talk more about what's specifically causing these feelings?",
    "I'm here to listen whenever you need someone to talk to. Have you tried any relaxation techniques before?",
    "That's completely understandable. Sometimes our minds can feel overwhelmed. Would you like me to suggest some calming music to listen to?"
  ];

  // Simulate bot thinking and responding
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setTimeout(() => {
      // Select random response for demo
      const botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      
      // Speak the response if speaking is enabled
      if (isSpeaking) {
        speakText(botResponse);
      }
    }, 1000);
  };

  // Handle keyboard Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simulate voice recognition
  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate voice recognition after 3 seconds
      setTimeout(() => {
        setInputValue("I've been feeling anxious lately and it's affecting my sleep.");
        setIsListening(false);
      }, 3000);
    }
  };

  // Simulate text-to-speech
  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  // Simulate speaking text
  const speakText = (text: string) => {
    // In a real app, you would use the Web Speech API here
    console.log("Speaking:", text);
  };

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] max-w-4xl mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-4 ${
                message.sender === 'user' 
                  ? 'bg-mindblue text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p>{message.text}</p>
              <div className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4 bg-white">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleListening}
            className={isListening ? 'bg-red-100 text-red-500' : ''}
          >
            {isListening ? <MicOff /> : <Mic />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleSpeaking}
            className={isSpeaking ? 'bg-green-100 text-green-500' : ''}
          >
            {isSpeaking ? <Volume2 /> : <VolumeX />}
          </Button>
          
          <Textarea
            placeholder="Type your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 resize-none"
            rows={1}
          />
          
          <Button onClick={handleSendMessage} disabled={inputValue.trim() === ''}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
        
        <div className="mt-2 text-xs text-gray-500">
          Press Enter to send, Shift+Enter for a new line
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
