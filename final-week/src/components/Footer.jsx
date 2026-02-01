import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      href: 'https://instagram.com/your-handle',
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/company/odizo',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com/your-handle',
      color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]' 
    },
  ];

  return (
    <footer className="py-12 border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        
        
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`
                p-3 rounded-full border border-[#2a2a2a] text-gray-400 
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]
                ${social.color}
              `}
            >
              {social.icon}
            </a>
          ))}
        </div>

     
        <div className="text-center space-y-2">
          <div className="text-xl font-mono font-bold text-[#00ff88] tracking-widest">
            ODIZO
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ODIZO. Crafted with passion & precision.
          </p>
        </div>
        
      </div>
    </footer>
  );
}