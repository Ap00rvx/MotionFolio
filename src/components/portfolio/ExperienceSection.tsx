import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SDE Intern (Web)",
      company: "Your Sport Your World",
      location: "United Kingdom (Virtual)",
      period: "Mar 2025 - Jun 2025",
      type: "Internship",
      description: "Working on web development projects with modern technologies",
      current: true
    },
    {
      title: "Flutter Development",
      company: "Spiderweb",
      location: "Virtual",
      period: "Nov 2024 - Mar 2025",
      type: "Internship",
      description: "Specialized Flutter development with focus on mobile applications"
    },
    {
      title: "Full Stack Flutter Intern With Node.js",
      company: "Purewashr",
      location: "Virtual",
      period: "Aug 2024 - Nov 2024",
      type: "Internship",
      achievements: [
        "Developed a full-stack mobile application with database management system and integrated admin panel",
        "Implemented Bloc state management, animations, and dependency injection for optimization",
        "Achieved a 25% growth in performance and user efficiency through enhanced design and functionality"
      ]
    },
    {
      title: "Full Stack Flutter Developer",
      company: "Purewashr Solutions",
      location: "Ghaziabad",
      period: "Jul 2024 - Oct 2024",
      type: "Full-time",
      achievements: [
        "Developed a full-stack mobile application with database management system and integrated admin panel",
        "Implemented Bloc state management, animations, and dependency injection for optimization",
        "Achieved a 25% growth in performance and user efficiency through enhanced design and functionality"
      ]
    },
    {
      title: "Flutter Intern",
      company: "Valenceware Services",
      location: "Virtual",
      period: "Apr 2024 - Jun 2024",
      type: "Internship",
      achievements: [
        "Developed a cross-platform Flutter app for web and Android with intuitive UI",
        "Leveraged Flutter techniques like dependency injection, state management, and animations",
        "Boosted app reach and user satisfaction by 50%, with 30% increase in retention and 25% reduction in bounce rates"
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full shadow-glow" />
              
              <Card className="ml-12 mb-8 p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;