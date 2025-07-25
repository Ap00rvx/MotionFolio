import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Android", "Cross-platform Development"],
      icon: "📱"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
      icon: "⚙️"
    },
    {
      title: "Frontend & Web",
      skills: ["HTML", "CSS", "React", "Responsive Design"],
      icon: "🌐"
    },
    {
      title: "Cloud & Tools",
      skills: ["Firebase", "Cloud Firestore", "Firebase Cloud Messaging", "Git"],
      icon: "☁️"
    },
    {
      title: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "CodeChef (3 stars)", "Codeforces (Pupil)"],
      icon: "🧠"
    }
  ];

  const certifications = [
    {
      title: "Flutter Development",
      issuer: "Udemy",
      period: "Nov 2023 - Dec 2023",
      description: "Basic Flutter and Dart programming with Provider state Management"
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
            Skills & Expertise
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Certifications & Training
          </h3>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground mb-2">{cert.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.period}</span>
                    </div>
                  </div>
                  <Badge className="bg-gradient-primary self-start md:self-center">
                    Certified
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Education</h3>
          <div className="grid gap-6">
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                B.Tech, Information Technology
              </h4>
              <p className="text-primary font-medium mb-2">
                Ajay Kumar Garg Engineering College Ghaziabad
              </p>
              <p className="text-muted-foreground">2022 - 2026</p>
            </Card>
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Senior Secondary (XII), CISCE
              </h4>
              <p className="text-primary font-medium mb-2">
                BISHOP JOHNSON SCHOOL & COLLEGE
              </p>
              <p className="text-muted-foreground">2022</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;