import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-gray-400 text-lg">Made with love by vikas</p>
        </div>
        
        <div className="text-right">
          <div className="flex space-x-4">
            <a href="https://github.com/viki-777" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <Github className="text-gray-400" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <Linkedin className="text-gray-400" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <Twitter className="text-gray-400" size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 mt-2">
        © {currentYear} All rights reserved.
      </div>
    </footer>
  );
}