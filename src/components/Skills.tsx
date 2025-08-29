import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Gamepad2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
      title: "Tools & Technologies", 
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git & GitHub", "Docker", "VS Code", "React", "Node.js", "Linux"]
    },
    {
      title: "Additional Skills",
      icon: <Gamepad2 className="w-6 h-6" />,
      skills: ["Game Mechanics Analysis", "Bug Detection", "System Debugging", "Problem Solving", "Reverse Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20 portfolio-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="portfolio-card portfolio-glow p-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-text">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-portfolio-bg-secondary text-portfolio-text border border-portfolio-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 portfolio-glow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Special highlight for gaming skills */}
          <Card className="portfolio-card portfolio-glow p-6 mt-8 border-accent/50">
            <div className="flex items-center mb-4">
              <Gamepad2 className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-portfolio-text">Gaming Expertise</h3>
            </div>
            <p className="text-portfolio-text-muted leading-relaxed">
              Passionate about understanding game mechanics at a deep level. I excel at finding and analyzing 
              "bugs" in games, which has sharpened my analytical thinking and debugging skills. This unique 
              perspective helps me approach software development with a hacker's mindset - always looking 
              for creative solutions and edge cases.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;