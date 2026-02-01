import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What services does ODIZO offer?", a: "We specialize in full-stack web development, UI/UX, and AI integration." },
    { q: "How long does a project take?", a: "Typically 4-8 weeks depending on the complexity." },
  ];

  return (
    <section id="faq" className="py-20 px-[5%]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-mono text-[#00ff88] text-center mb-12">FAQ</h2>
        {faqs.map((f, i) => (
          <div key={i} className="mb-4 border border-[#2a2a2a] rounded-lg overflow-hidden">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-5 flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-[#00ff88] font-bold">{f.q}</span>
              <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && <div className="p-5 text-gray-400 border-t border-[#2a2a2a]">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}