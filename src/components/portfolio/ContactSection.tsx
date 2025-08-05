import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send Me a Message</h3>
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
            <div className="space-y-6 mb-8">
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

            <div className="mb-8">
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

            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1O6xCQWcB6L-c9ocQ62J-sYDby_IXYDV2/view?usp=sharing", "_blank")}
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;