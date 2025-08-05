import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Users, Code, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Excellence",
      description: "Coordinator at Training & Placement cell of AKGEC",
      category: "Leadership"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Management",
      description: "Led a team of 11 members in college's IT department technical society",
      category: "Leadership"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Event Organization",
      description: "Organized 3+ Student Workshops",
      category: "Events"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competition Management",
      description: "Conducted 2+ Coding Competitions",
      category: "Events"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "CodeChef Achievement",
      description: "3 stars rating",
      category: "Competitive Programming"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Codeforces Achievement",
      description: "Pupil rating",
      category: "Competitive Programming"
    }
  ];

  const categories = {
    "Leadership": "🏆",
    "Events": "🎯",
    "Competitive Programming": "💻"
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
            Achievements & Activities
          </h2>
          <div className="h-1 w-16 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions, leadership roles, and competitive achievements that showcase 
            my dedication to excellence and continuous growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
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
                whileHover={{ y: -5 }}
                onMouseMove={handleCardMove}
                style={
                  {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                  } as React.CSSProperties
                }
              >
                <Card className="group h-full p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 relative overflow-hidden">
                  {/* Spotlight effect */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)",
                    }}
                  />
                  
                  <div className="relative z-5">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {categories[achievement.category as keyof typeof categories]} {achievement.category}
                      </span>
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-4 h-1 w-12 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Workshops Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Competitions Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">11</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3⭐</div>
              <div className="text-sm text-muted-foreground">CodeChef Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
