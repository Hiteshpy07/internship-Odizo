import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message was received!`);
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-[#0a0a0a]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-mono text-[#00ff88] text-center mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#00ff88] mb-2 text-sm font-bold">Name</label>
            <input 
              type="text" required
              className="w-full bg-white/5 border border-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:border-[#00ff88]"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-[#00ff88] mb-2 text-sm font-bold">Email</label>
            <input 
              type="email" required
              className="w-full bg-white/5 border border-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:border-[#00ff88]"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-[#00ff88] mb-2 text-sm font-bold">Project Details</label>
            <textarea 
              rows="4" required
              className="w-full bg-white/5 border border-[#2a2a2a] rounded-lg p-3 focus:outline-none focus:border-[#00ff88]"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button className="w-full py-4 bg-[#00ff88] text-[#0d0d0d] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}