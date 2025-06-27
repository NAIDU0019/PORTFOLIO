import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden px-6 sm:px-12 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[length:24px_24px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-4xl relative z-10 text-left animate-fade-in">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          Hi, I'm RAJAPPA ADABALA
        </h1>
        <p className="text-xl sm:text-2xl text-purple-300 mb-4 animate-slide-in-left">
          Aspiring Software Engineer
        </p>
        <p className="text-lg text-white/70 mb-8 max-w-3xl animate-slide-in-left delay-300">
          I build scalable, high-performance systems with a strong focus on backend development, cloud infrastructure, and full-stack solutions. Passionate about solving real-world problems through clean and efficient code.
        </p>

        {/* Buttons and Socials */}
        <div className="flex flex-wrap gap-4 items-center mb-12 animate-fade-in-up delay-500">
          <Button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            View My Work
          </Button>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1dyeaqOydMt9T2WWwBowz8vIMQ_B8hgY8/view?usp=sharing"
            target="_blank"
            download
            className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4" aria-label="Social links">
            <a
              href="https://github.com/naidu0019"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-white group-hover:text-purple-300" />
            </a>
            <a
              href="https://linkedin.com/in/rajappa-adabala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-purple-300" />
            </a>
            <a
              href="mailto:rajuadabala1199@gmail.com"
              aria-label="Email"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-purple-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-12 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-6 h-6 text-white/70" />
      </button>
    </section>
  );
};