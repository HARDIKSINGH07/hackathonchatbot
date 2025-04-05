
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Twitter, Instagram, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-dark to-lavender-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🤖</div>
              <div className="font-nunito font-bold text-xl">Bile Bot</div>
            </div>
            <p className="text-white/70 mb-4">
              Your AI mental health companion available 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <Github size={18} />
                <span className="sr-only">Github</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Features</a>
              </li>
              <li>
                <a href="#resources" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Resources</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">About</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Mental Health Articles</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Self-Care Techniques</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Crisis Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Find a Therapist</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for mental health tips and updates.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white/30 border-none"
              />
              <Button className="rounded-full bg-white text-cyan-dark hover:bg-white/90">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>&copy; 2025 Bile Bot. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
