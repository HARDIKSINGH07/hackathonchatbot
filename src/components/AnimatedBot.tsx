
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AnimatedBotProps {
  size?: number;
  className?: string;
}

const AnimatedBot: React.FC<AnimatedBotProps> = ({ size = 100, className = "" }) => {
  const [isWinking, setIsWinking] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsWinking(true);
    
    // Navigate to chat page after wink animation
    setTimeout(() => {
      navigate('/chat');
    }, 500);
  };

  return (
    <div 
      className={`cursor-pointer animate-float ${className}`}
      onClick={handleClick}
      style={{ width: size, height: size }}
    >
      <div className="relative bg-gradient-to-br from-mindblue to-mindpink rounded-full flex items-center justify-center h-full w-full shadow-lg">
        <div className="absolute top-[30%] left-[25%] w-[15%] h-[15%] bg-white rounded-full">
          {/* Left eye */}
          <div className={`absolute inset-0 bg-mindblue rounded-full ${isWinking ? 'animate-wink' : ''}`}></div>
        </div>
        <div className="absolute top-[30%] right-[25%] w-[15%] h-[15%] bg-white rounded-full">
          {/* Right eye */}
          <div className="absolute inset-0 bg-mindblue rounded-full"></div>
        </div>
        <div className="absolute bottom-[30%] w-[40%] h-[10%] bg-white rounded-full">
          {/* Mouth */}
          <div className="absolute inset-0 rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-mindblue to-mindpink rounded-t-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBot;
