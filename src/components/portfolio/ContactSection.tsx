import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "apurvabraj@gmail.com",
      link: "mailto:apurvabraj@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 6306880941",
      link: "tel:+916306880941"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ghaziabad, India",
      link: "#"
    }
  ];

  const achievements = [
    "Coordinator at Training & Placement cell of AKGEC",
    "Led a team of 11 members in college's IT department technical society",
    "Organized 3+ Student Workshops",
    "Conducted 2+ Coding Competitions",
    "CodeChef - 3 stars rating",
    "Codeforces - Pupil rating"
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
            Let's Connect
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{method.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <Button 
                onClick={
                  () => window.open("https://github.com/Ap00rvx", "_blank")
                }
                variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                onClick={
                  () => window.open("https://www.linkedin.com/in/apurva-b-raj/", "_blank")
                }
                variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Achievements & Activities
            </h3>
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1aNfp1_cFKqbJUPo3EYejm7ZLL848SXB_/view?usp=drive_link", "_blank")}
              size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;