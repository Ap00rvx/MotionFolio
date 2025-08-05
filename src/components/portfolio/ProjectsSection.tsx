import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CartStore",
      period: "Feb 2025 - Mar 2025",
      description: "A robust quick commerce mobile app enabling users to browse, order, and track groceries and essentials in real-time. Features seamless authentication, intuitive product discovery, secure payments, and instant order notifications, all powered by a scalable Flutter and Firebase architecture.",
      technologies: ["Flutter", "Firebase", "Bloc", "REST API","Node.js", "Express", "MongoDB" ,"Redis", "TypeScript", "Razorpay"],
      image: "/cart.png",
      liveUrl: "https://drive.google.com/file/d/11feoA-_b9LendEYZRbsS9PkbGGFzIbfF/view?usp=sharing",
      githubUrl: "https://github.com/Ap00rvx/CartVeg.git",
      featured: true
    },
    {
      title: "GEM",
      period: "2025",
      description: "A productivity Chrome extension offering AI-powered chat, instant page summarization, code analysis, LeetCode assistance, and multi-language translation. Activate features with keyboard shortcuts: Ctrl+Shift+Q (Quick query), Ctrl+Shift+S (Summarize page), Ctrl+Shift+L (LeetCode helper), Ctrl+Shift+C (Code analysis), Ctrl+Shift+H (Show help).",
      technologies: [
        "TypeScript",
        "Chrome Extension APIs",
        "Google GEMINI API",
        "CSS"
      ],
      image: "/gem.png",
      liveUrl: "https://github.com/Ap00rvx/Gem?tab=readme-ov-file#gem-chrome-extension---installation-guide",
      githubUrl: "https://github.com/Ap00rvx/Gem?tab=readme-ov-file#gem-chrome-extension---installation-guide",
      featured: false
    },
    {
      title: "Coke Forces",
      period: "June 2025",
      description: `A comprehensive student Codeforces analytics and management platform for colleges. 
- Student Table: List, add, edit, delete students with Name, Email, Phone, Handle, Ratings, and CSV export. View last update and detailed progress.
- Student Profile: Contest history (filter by 30/90/365 days), interactive rating graph, contest list, problem-solving stats (filter by 7/30/90 days), hardest problem, bar chart by rating, submission heatmap.
- Codeforces Data Sync: Daily cron job fetches and stores updated data; real-time sync on handle update; all data cached for fast access.
- Inactivity Detection: Detects inactive students (no submissions in 7 days), sends reminder emails, tracks reminders, and allows disabling emails per student.
`,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MUI X Charts",
        "Chart.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Axios",
        "CSV Export",
        "Codeforces API"
      ],
      image: "/cokde.png",
      liveUrl: "https://coke.apurvabraj.space/",
      githubUrl: "https://github.com/Ap00rvx/coke-forces.git"
    },
    {
      title: "Flash News",
      period: "May 2023 - Nov 2023",
      description: "Real-time news application with chat system powered by Firebase for instant communication",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "FCM"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/Ap00rvx/Flash-news.git"
    },
    {
      title: "Skill Connect - Job Portal",
      period: "Feb 2025 - March 2025",
      description: ` Skill Connect is a collaborative platform designed to connect individuals based on their skills, enabling knowledge sharing, mentorship, and networking. Users can create profiles, list their skills, seek help, and collaborate on projects with like-minded professionals.`,
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "FCM"],
      image: "/logo.png",
      liveUrl: "https://github.com/Ap00rvx/skill-connect-app.git",
      githubUrl: "https://github.com/Ap00rvx/skill-connect-app.git"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            mobile applications, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: 0 }}
                className={project.featured ? "lg:col-span-2" : ""}
                onMouseMove={handleCardMove}
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as React.CSSProperties
                }
              >
                <Card className="group overflow-hidden bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 h-full relative">
                  {/* Spotlight effect */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)",
                    }}
                  />
                  
                  <div className="aspect-video bg-muted/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt="" 
                        className="relative z-5 bg-gray-600 w-full transition-all duration-500 filter grayscale group-hover:grayscale-0" 
                      />
                    </div>
                    {/* Image spotlight effect */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2), transparent 60%)",
                      }}
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-primary z-10">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6 relative z-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      
                      size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                       onClick={() => window.open(project.githubUrl, "_blank")}
                      variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;