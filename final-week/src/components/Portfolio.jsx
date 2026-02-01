import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { 
      title: "Shradha Padhi Portfolio", 
      desc: "A professional personal portfolio website featuring smooth animations and a clean UI.", 
      icon: "",
      link: "https://shradhapadhi.in/"
    },
    { 
      title: "TechStart Platform", 
      desc: "SaaS platform with real-time analytics and high-performance backend.", 
      icon: "",
      link: "#" 
    },
    { 
      title: "E-Commerce Store", 
      desc: "Full-stack payment integration with a seamless checkout experience.", 
      icon: "",
      link: "#" 
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-[5%]">
      <h2 className="text-3xl font-mono text-[#00ff88] text-center mb-12 after:content-[''] after:block after:w-20 after:h-1 after:bg-[#ff006e] after:mx-auto after:mt-4">
        Previous Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <a 
            key={i} 
            href={p.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:-translate-y-2 hover:border-[#00ff88] transition-all flex flex-col"
          >
           
            <div className="h-40 bg-gradient-to-br from-[#00ff88] to-[#ff006e] flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500">
              {p.icon}
            </div>

           
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#00ff88] font-bold text-lg">{p.title}</h3>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-[#00ff88] transition-colors" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.desc}
              </p>
              
              <div className="mt-auto pt-4 text-[#00ff88] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW PROJECT _
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}