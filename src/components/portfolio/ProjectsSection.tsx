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
      description: "E-commerce platform with advanced cart management and user authentication",
      technologies: ["Flutter", "Firebase", "Bloc", "REST API"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Library Management System",
      period: "Apr 2024 - May 2024",
      description: "Complete library management system with Node.js, Express and MongoDB backend",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST API"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Easy Lib",
      period: "Apr 2024",
      description: "A Library management system designed for colleges and students with intuitive interface",
      technologies: ["Flutter", "Node.js", "MongoDB", "Firebase"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Flash News",
      period: "May 2023 - Nov 2023",
      description: "Real-time news application with chat system powered by Firebase for instant communication",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "FCM"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="overflow-hidden bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 h-full">
                <div className="aspect-video bg-muted/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center">
                    <div className="text-6xl text-primary/20 font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
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
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;