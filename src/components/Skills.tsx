
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90, color: "from-green-400 to-blue-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-indigo-600" },
        { name: "Java", level: 75, color: "from-red-400 to-red-600" },
      ]
    },
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "FastAPI", level: 90, color: "from-green-400 to-teal-500" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Django", level: 80, color: "from-green-600 to-green-800" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Azure", level: 70, color: "from-blue-400 to-cyan-500" },
      ]
    },
    {
      category: "Tools & Testing",
      skills: [
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Jest", level: 85, color: "from-red-400 to-pink-500" },
        { name: "Postman", level: 90, color: "from-orange-400 to-red-500" },
        { name: "Git", level: 85, color: "from-red-400 to-pink-500" },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black text-white transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack, from backend systems to cloud infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-fade-in-up bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                      <span className="text-white/70 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + index) * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <span className="text-white/80">Specializations:</span>
            <div className="flex flex-wrap gap-3">
              {["Microservices", "CI/CD Pipelines", "System Design", "Performance Optimization"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};