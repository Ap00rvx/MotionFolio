import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Engineer Intern (Web)",
      company: "Your Sport Your World",
      location: "United Kingdom (Remote)",
      period: "Mar 2025 - Present",
      type: "Internship",
      description: "Contributing to the architecture and development of scalable web applications using modern JavaScript frameworks and cloud technologies.",
      achievements: [
        "Engineered core modules for a sports management platform, focusing on modularity and maintainability.",
        "Implemented responsive UI components with accessibility best practices, enhancing user engagement across devices.",
        "Collaborated in an Agile team to optimize application performance, reducing load times and improving reliability."
      ],
      current: true
    },
    {
      title: "Flutter Developer Intern",
      company: "Spiderweb",
      location: "Remote",
      period: "Nov 2024 - Mar 2025",
      type: "Internship",
      description: "Developed cross-platform mobile applications using Flutter, emphasizing code reusability, performance, and seamless user experience.",
      achievements: [
        "Built and maintained reusable widgets and custom animations to improve app interactivity.",
        "Integrated RESTful APIs and managed state using Bloc for scalable data handling.",
        "Conducted code reviews and contributed to CI/CD pipeline improvements."
      ]
    },
    
    {
      title: "Full Stack Flutter Developer",
      company: "Purewashr Solutions",
      location: "Ghaziabad",
      period: "Jul 2024 - Oct 2024",
      type: "Full-time",
      achievements: [
        "Led the development of a scalable mobile application with integrated admin panel and secure authentication.",
        "Optimized backend APIs and database schemas to support high concurrency and low latency.",
        "Drove a 25% increase in user efficiency by refining UI/UX and implementing best coding practices."
      ]
    },
    {
      title: "Flutter Intern",
      company: "Valenceware Services",
      location: "Remote",
      period: "Apr 2024 - Jun 2024",
      type: "Internship",
      achievements: [
        "Developed a cross-platform Flutter application for web and Android, focusing on modular architecture and maintainability.",
        "Utilized dependency injection, Bloc state management, and custom animations to enhance code quality and user experience.",
        "Increased app reach and retention by 50% through performance tuning and user-centric design."
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const card = e.currentTarget.querySelector('.experience-card') as HTMLElement;
              if (card) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseMove={handleCardMove}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-full bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full shadow-glow z-10" />
                
                <Card 
                  className="group experience-card ml-12 mb-8 p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 relative"
                  style={
                    {
                      "--mouse-x": "50%",
                      "--mouse-y": "50%",
                    } as React.CSSProperties
                  }
                >
                  {/* Spotlight effect */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)",
                    }}
                  />
                  
                  <div className="relative z-20">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={exp.current ? "default" : "secondary"}>
                          {exp.current ? "Current" : exp.type}
                        </Badge>
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                    )}
                    
                    {exp.achievements && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default ExperienceSection;