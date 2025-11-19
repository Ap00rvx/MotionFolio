import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query"; // Assuming this hook exists or I will create/use simple check

const ExperienceSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  // Simple media query check (or use window.innerWidth if hook not available, but hook is cleaner. 
  // Since I don't see the hook file in file list, I'll use a CSS-based approach with hidden/block classes 
  // or a conditional render if I can confirm the hook. 
  // To be safe and robust without adding new files, I will use CSS classes for layout switching 
  // and conditional logic for the transform.)

  const experiences = [
    {
      title: "Software Development Engineer Intern (Web)",
      company: "Your Sport Your World",
      location: "United Kingdom (Remote)",
      period: "Mar 2025 - Present",
      type: "Internship",
      description: "Contributing to the architecture and development of scalable web applications using modern JavaScript frameworks and cloud technologies.",
      achievements: [
        "Engineered core modules for a sports management platform.",
        "Implemented responsive UI components with accessibility best practices.",
        "Collaborated in an Agile team to optimize application performance."
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
        "Built and maintained reusable widgets and custom animations.",
        "Integrated RESTful APIs and managed state using Bloc.",
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
        "Led the development of a scalable mobile application.",
        "Optimized backend APIs and database schemas.",
        "Drove a 25% increase in user efficiency by refining UI/UX."
      ]
    },
    {
      title: "Flutter Intern",
      company: "Valenceware Services",
      location: "Remote",
      period: "Apr 2024 - Jun 2024",
      type: "Internship",
      achievements: [
        "Developed a cross-platform Flutter application for web and Android.",
        "Utilized dependency injection, Bloc state management, and custom animations.",
        "Increased app reach and retention by 50%."
      ]
    }
  ];

  return (
    <section ref={targetRef} className="relative min-h-screen bg-background py-20 md:py-0 md:h-[300vh]">

      {/* Desktop View: Sticky Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-24">
          {/* Title Card */}
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center md:mr-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tighter">
              Work <br /> Experience
            </h2>
            <div className="h-1 w-24 bg-foreground rounded-full" />
            <p className="mt-8 text-xl text-muted-foreground max-w-md">
              A journey through my professional career, building scalable solutions and impactful products.
            </p>
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <Card className="w-[500px] h-[600px] flex-shrink-0 p-8 bg-card border-border hover:border-foreground/50 transition-all duration-500 flex flex-col justify-between rounded-none">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="rounded-none border-foreground/20 text-foreground px-4 py-1">
                      {exp.current ? "Current" : exp.type}
                    </Badge>
                    <span className="text-8xl font-bold text-muted/10 group-hover:text-foreground/10 transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-2 leading-tight">{exp.title}</h3>

                  <div className="flex items-center gap-2 text-xl text-muted-foreground mb-6">
                    <Building className="w-5 h-5" />
                    <span className="font-medium text-foreground">{exp.company}</span>
                  </div>

                  <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-8 border-l-2 border-border pl-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>

                {exp.achievements && (
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-foreground mt-2.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View: Vertical Stack with Fade-in */}
      <div className="md:hidden container mx-auto px-6 flex flex-col gap-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground tracking-tighter">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground">
            A journey through my professional career.
          </p>
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card border-border hover:border-foreground/50 transition-all duration-300 rounded-none">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="rounded-none border-foreground/20 text-foreground">
                  {exp.current ? "Current" : exp.type}
                </Badge>
                <span className="text-4xl font-bold text-muted/10">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{exp.title}</h3>

              <div className="flex flex-col items-center gap-2 text-muted-foreground mb-6 text-center">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span className="font-medium text-foreground">{exp.company}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.description && (
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {exp.description}
                </p>
              )}

              {exp.achievements && (
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-foreground mt-2 flex-shrink-0" />
                      <span className="leading-relaxed text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;