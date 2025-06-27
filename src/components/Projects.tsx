
import { ExternalLink, Github, Award, Cloud, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Finance Tracker",
      description: "Award-winning personal finance tracker with real-time budget insights and spending categorization. Built with MERN stack and TDD approach.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Jest"],
      features: ["Real-time budget insights", "Spending categorization", "20% faster report rendering", "Test-Driven Development"],
      award: "Best Project Award - VIT TechFest 2024 (Top 5/100+)",
      icon: Award,
      liveUrl: "https://github.com/NAIDU0019/FINANCE-TRACKER",
      githubUrl: "https://github.com/NAIDU0019/FINANCE-TRACKER"
    },{
  title: "Pickles & Homemade Foods E-Commerce",
  description: "SEO-optimized e-commerce site built with Next.js for selling pickles and traditional homemade food items. Includes dynamic admin panel, Razorpay payments, and full order lifecycle automation.",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop",
  technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Razorpay", "Node.js", "JWT", "SEO"],
  features: [
    "Dynamic product listing with CMS-based updates",
    "User authentication and secure checkout",
    "Razorpay payment gateway integration",
    "Admin panel for order & inventory management",
    "Automated order tracking and confirmation"
  ],
  icon: Cloud,
  liveUrl: "https://www.adhyaapickles.in/",
  githubUrl: "https://github.com/NAIDU0019/bck"
},{
      title: "AI-Powered Resume Platform",
      description: "Full-stack platform providing AI-based resume generation and personalized job recommendations with seamless cloud deployment.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Vercel"],
      features: ["AI resume generation", "Job recommendations", "CI/CD pipelines", "Scalable deployment"],
      icon: Zap,
      liveUrl: "https://elevate-ai-seven.vercel.app/",
      githubUrl: "https://github.com/NAIDU0019/AI-POWERED-RESUME-AND-JOB-SEARCH"
    },
    {
  title: "Food Delivery App",
  description: "A full-featured MERN stack food delivery application with real-time order placement, user authentication, cart management, and admin control panel.",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop",
  technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe", "Redux"],
  features: [
    "Browse and search food items",
    "Add to cart and place orders",
    "Order summary and status tracking",
    "Admin dashboard for menu/order management",
    "Modern UI with grid-based cards and clean navigation"
  ],
  icon: Zap,
  liveUrl: "https://github.com/NAIDU0019/FOOD-DELIVERY-APP",
  githubUrl: "https://github.com/NAIDU0019/FOOD-DELIVERY-APP"
},


    {
      title: "SmartCloud Storage Optimizer",
      description: "Azure cost-saving tool that analyzes and optimizes blob storage usage with intelligent tier migration and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      technologies: ["Azure Blob Storage", "Azure Functions", "FastAPI", "Python", "Cosmos DB"],
      features: ["35% cost reduction", "Dynamic tier migration", "Real-time monitoring", "Scalable architecture"],
      icon: Cloud,
      liveUrl: "#",
      githubUrl: "https://github.com/naidu0019"
    },
    
    {
      title: "Container Shipment Tracker",
      description: "Real-time container tracking system with responsive frontend, RESTful APIs, and role-based access controls for operational visibility.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      technologies: ["FastAPI", "React.js", "MongoDB", "Docker"],
      features: ["Real-time tracking", "Live map updates", "Role-based access", "Efficient data schemas"],
      icon: Database,
      liveUrl: "https://github.com/NAIDU0019/Container-Shipment-Tracking-System",
      githubUrl: "https://github.com/NAIDU0019/Container-Shipment-Tracking-System"
    }
  ];

   return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Showcasing award-winning projects and innovative solutions in backend development, 
            cloud optimization, and full-stack applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105 hover:bg-white/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  {project.award && <Award className="w-6 h-6 text-yellow-400" />}
                </div>

                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>

                {project.award && (
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 px-3 py-2 rounded-lg text-sm mb-4 border border-yellow-400/30">
                    🏆 {project.award}
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <a href="https://github.com/naidu0019" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};