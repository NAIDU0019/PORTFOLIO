import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mldnagdo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm actively seeking opportunities in software engineering and backend development. 
            Let's discuss how I can contribute to your team with my skills and passion for building scalable systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {[{ icon: Mail, label: "Email", value: "rajuadabala1199@gmail.com", href: "mailto:rajuadabala1199@gmail.com" }, { icon: Phone, label: "Phone", value: "+91 6301721127", href: "tel:+916301721127" }, { icon: MapPin, label: "Location", value: "Vijayawada, Andhra Pradesh", href: "#" }].map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Profiles</h3>
              <div className="space-y-4">
                {[{ icon: Github, href: "https://github.com/naidu0019", label: "GitHub", description: "View my code repositories" }, { icon: Linkedin, href: "https://linkedin.com/in/rajappa-adabala", label: "LinkedIn", description: "Professional network" }, { icon: Code, href: "https://leetcode.com/u/rajuadabala1199/", label: "LeetCode", description: "Coding practice & challenges" }].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{social.label}</p>
                      <p className="text-white/60 text-sm">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">Education & Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-white font-semibold">B.Tech in Electronics and Communication Engineering</h4>
                  <p className="text-white/70 text-sm">Vishnu Institute of Technology, Bhimavaram (2021–2025)</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-400/30">AWS Cloud Fundamentals</span>
                  <span className="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-400/30">Databricks Lakehouse Fundamentals</span>
                  <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-400/30">AWS AI/ML Track – Future AWS AI Engineer (Ongoing)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
                <input type="email" name="email" placeholder="you@example.com" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
              <textarea name="message" rows={5} placeholder="Your message..." required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"></textarea>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg">Send Message</Button>
            </form>
            {status === "success" && <p className="mt-4 text-green-400 font-medium">✅ Message sent successfully!</p>}
            {status === "error" && <p className="mt-4 text-red-400 font-medium">❌ Failed to send message. Please try again.</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center animate-fade-in-up">
          <p className="text-white/60">© 2025 Rajappa Adabala. Built with React, TypeScript & Tailwind CSS</p>
          <p className="text-white/40 text-sm mt-2">Open to full-time opportunities in Software Engineering & Backend Development</p>
        </div>
      </div>
    </section>
  );
};
