import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Database, Smartphone, Globe } from "lucide-react";


const AboutSection = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Expert in Flutter with cross-platform development experience"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Systems",
      description: "Node.js, Express.js, MongoDB for scalable server solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Modern web development with React and responsive design"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Focus on maintainable, scalable, and efficient code practices"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I bring a strong blend of full-stack development skills, with hands-on experience in Flutter, 
            backend technologies, and web development. My focus on clean, scalable code and seamless user 
            experiences ensures impactful product delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;