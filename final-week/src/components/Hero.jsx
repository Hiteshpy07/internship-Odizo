export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-20 px-[5%] flex flex-col items-center text-center overflow-hidden min-h-[90vh]">
      
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#ff006e]/10 rounded-full blur-[100px] animate-float animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-[#00ff88] leading-tight mb-6">
          Transform Your Vision Into Digital Reality
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Cutting-edge web solutions that elevate your brand and drive growth.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-3 bg-[#00ff88] text-[#0d0d0d] font-bold rounded-full hover:scale-105 transition-transform">
            Start a Project
          </a>
          <a href="#portfolio" className="px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] font-bold rounded-full hover:bg-[#00ff88] hover:text-[#0d0d0d] transition-all">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}