
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-8 pb-4 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-3">
              <img 
                src="/lovable-uploads/5cfa53ee-6a71-479d-bb9c-acfc2e2b1d81.png" 
                alt="MindSaarthi Logo" 
                className="h-16 mr-3" 
              />
              <img 
                src="/lovable-uploads/e387d0c2-5cd5-4694-83ea-46a76bfc8e2d.png" 
                alt="MindSaarthi Text" 
                className="h-12" 
              />
            </div>
            <p className="text-gray-600 text-sm">
              Your AI companion for mental wellbeing.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-md mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-mindblue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-mindblue transition-colors">About</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-mindblue transition-colors">Resources</Link></li>
              <li><Link to="/chat" className="text-gray-600 hover:text-mindblue transition-colors">Start Chatting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-md mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/resources" className="text-gray-600 hover:text-mindblue transition-colors">Mental Health Articles</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-mindblue transition-colors">Meditation Guides</Link></li>
              <li><Link to="/find-therapist" className="text-gray-600 hover:text-mindblue transition-colors">Find a Therapist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-md mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-600">Email: info@mindsaarthi.com</li>
              <li className="text-gray-600">Support: help@mindsaarthi.com</li>
              <li className="text-gray-600">Indore, Madhya Pradesh, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-600 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} MindSaarthi. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-600 hover:text-mindblue transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-mindblue transition-colors">Terms</Link>
            <Link to="/accessibility" className="text-gray-600 hover:text-mindblue transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
