import { useState, useEffect } from 'react';

export default function Navbar() {
  const [text, setText] = useState('');
  const fullText = "ODIZO";
  

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
       
        setTimeout(() => { index = 0; setText(''); }, 3000); 
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a] z-50 py-4 px-[5%] flex justify-between items-center">
  
      <div className="text-2xl font-bold font-mono text-[#00ff88] tracking-widest flex items-center">
        <span className="inline-block min-w-[120px]">
          {text}
          <span className="animate-pulse ml-1 border-r-2 border-[#00ff88] h-6 inline-block align-middle"></span>
        </span>
      </div>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-sm hover:text-[#00ff88] transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}