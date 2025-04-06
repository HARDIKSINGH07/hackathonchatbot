
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

interface AnimatedBotProps {
  size?: number;
  className?: string;
}

const AnimatedBot: React.FC<AnimatedBotProps> = ({ size = 100, className = '' }) => {
  const [isWinking, setIsWinking] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsWinking(true);
    setTimeout(() => {
      navigate('/chat');
    }, 500);
  };

  return (
    <div 
      className={`relative cursor-pointer animate-float flex items-center justify-center ${className}`}
      onClick={handleClick}
      style={{ width: size, height: size }}
    >
      <div className="rounded-full bg-gradient-to-br from-mindpink to-mindblue p-4 shadow-lg">
        <div className={`${isWinking ? 'animate-wink' : ''}`}>
          <Brain size={size * 0.7} className="text-white" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-20 animate-pulse"></div>
    </div>
  );
};

export default AnimatedBot;
