import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, MessageCircle, Code, Lightbulb, Clock } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: <Code className="w-5 h-5" />,
      question: "What technologies do you specialize in?",
      answer: "I specialize in full-stack development with Flutter, Node.js, React, TypeScript, MongoDB, Firebase, and modern web technologies. I focus on building scalable applications with clean architecture and seamless user experiences.",
      category: "Technical"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple mobile apps take 2-4 weeks, while complex full-stack applications can take 2-3 months. I provide detailed project breakdowns and milestone-based delivery to ensure transparency.",
      category: "Process"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      question: "How do you handle project communication?",
      answer: "I believe in transparent communication with regular updates via your preferred platform (Slack, Discord, Email). I provide weekly progress reports, demo sessions, and maintain detailed documentation throughout the project.",
      category: "Communication"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      question: "Do you provide post-launch support?",
      answer: "Yes! I offer comprehensive post-launch support including bug fixes, feature updates, performance optimization, and maintenance. I also provide documentation and training to help your team maintain the project.",
      category: "Support"
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "Can you work with existing codebases?",
      answer: "Absolutely! I have experience working with legacy code, refactoring applications, adding new features to existing projects, and modernizing tech stacks. I always start with a thorough code review and improvement plan.",
      category: "Technical"
    },
    {
      icon: <Code className="w-5 h-5" />,
      question: "What's your approach to testing and quality assurance?",
      answer: "I follow TDD principles with comprehensive unit testing, integration testing, and automated testing pipelines. Every project includes code reviews, performance testing, and security audits to ensure production-ready quality.",
      category: "Quality"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? Here are answers to the most common questions about my 
            development process, technologies, and working approach.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-4"
                onMouseMove={handleCardMove}
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as React.CSSProperties
                }
              >
                <Card className="group overflow-hidden bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 relative">
                  {/* Spotlight effect */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle 500px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 60%)",
                    }}
                  />
                  
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left relative z-5 focus:outline-none"
                    whileHover={{ scale: 1.002 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2">
                          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                            {faq.icon}
                          </div>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {faq.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                          {faq.question}
                        </h3>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-primary ml-4"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </motion.button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden relative z-5"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative gradient line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm here to help! Feel free to reach out and let's discuss your project in detail.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary text-black px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2 inline" />
                Get in Touch
              </button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
