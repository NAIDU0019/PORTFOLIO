import { Code, Palette, Zap, Award, Cloud, Database } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm an aspiring Software Engineer with a strong foundation in backend development, 
            cloud infrastructure, and performance optimization. Currently pursuing B.Tech in ECE 
            at Vishnu Institute of Technology, with hands-on experience in building scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Cloud,
              title: "Cloud Architecture",
              description: "Experienced with AWS and Azure services, building scalable cloud-native applications with Docker and CI/CD pipelines."
            },
            {
              icon: Database,
              title: "Backend Development",
              description: "Proficient in Python, FastAPI, Node.js with PostgreSQL and MongoDB. Focused on performance optimization and API design."
            },
            {
              icon: Award,
              title: "Award Winner",
              description: "Recognized for excellence with 'Best Project' award at VIT TechFest 2024 for Finance Tracker (Top 5/100+)."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-black/10 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-black/10 dark:hover:bg-white/10 group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-black dark:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">{item.title}</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100/40 to-pink-100/40 dark:from-purple-900/50 dark:to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-black/10 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6">My Journey</h3>
              <p className="text-black/80 dark:text-white/80 leading-relaxed mb-4">
                Started my journey in software development with a focus on backend systems and cloud technologies. 
                Through internships and personal projects, I've gained hands-on experience in building scalable, 
                secure applications that solve real-world problems.
              </p>
              <p className="text-black/80 dark:text-white/80 leading-relaxed mb-4">
                Currently in my final year of B.Tech in Electronics and Communication Engineering, 
                I've specialized in full-stack development with expertise in Python, FastAPI, React, and cloud platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                  AWS Certified
                </span>
                <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                  Databricks Certified
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
