import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A2540] text-white overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 text-sm bg-white/10 rounded-full border border-white/20">
          🚀 AI Powered Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Smarter with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            AI-Driven Solutions
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Project M1 helps you design, build, and scale intelligent applications 
          using cutting-edge AI technology — faster than ever.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-white text-[#0A2540] px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Get Started <FaArrowRight />
          </button>

          <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
            View Demo
          </button>
        </div>
      </div>

      {/* Optional Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </section>
  );
};

export default HeroSection;