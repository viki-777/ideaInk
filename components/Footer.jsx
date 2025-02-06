import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="text-black py-4 bg-slate-400 p-6">
//       <div className="container mx-auto flex  items-center">
//         <div className="">
//           <p className="text-gray-400 text-lg">© {currentYear} All rights reserved.</p>
//         </div>
        
//         <div className="">
//           <div className="flex space-x-4">
//             <a href="https://github.com/viki-777" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
//               <Github className="text-gray-400" size={24} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
//               <Linkedin className="text-gray-400" size={24} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
//               <Twitter className="text-gray-400" size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
      
  
//     </footer>
//   );
// }



const Footer = () => {
  return (
    <footer className="text-gray-500 py-4 mt-5">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-4">
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
