import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LinkedInCarousel() {
 
  const posts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7419059523409338368", // Milestone post
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7422303196745900032", // Business growth post
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7422965163865100288"  // Startup journey post
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 px-[5%] bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono text-[#00ff88]">Journey Updates</h2>
          <p className="text-gray-500 mt-2">Latest insights and milestones from Odizo</p>
        </div>

        <div className="relative h-[350px] flex items-center justify-center">
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-20 p-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0d0d0d] transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-20 p-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-[#00ff88] hover:bg-[#00ff88] hover:text-[#0d0d0d] transition-all"
          >
            <ChevronRight size={24} />
          </button>

      
          <div className="w-full max-w-[500px] h-full relative overflow-hidden rounded-2xl border border-[#2a2a2a] shadow-[0_0_50px_rgba(0,255,136,0.1)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <iframe
                  src={posts[currentIndex]}
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title={`LinkedIn Post ${currentIndex}`}
                ></iframe>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

       
        <div className="flex justify-center gap-2 mt-8">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-300 rounded-full ${
                currentIndex === i ? "w-8 bg-[#00ff88]" : "w-2 bg-[#2a2a2a]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}