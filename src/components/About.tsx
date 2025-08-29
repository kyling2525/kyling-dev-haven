import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, GraduationCap, Gamepad2, Bug } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 portfolio-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="portfolio-card portfolio-glow p-8 mb-8">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-portfolio-text">Who I Am</h3>
            </div>
            
            <div className="text-portfolio-text-muted text-lg leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-primary font-semibold">Computer Science student at HCMUT</span>, 
                passionate about creating innovative solutions through code. My journey in tech is driven by 
                curiosity and a deep interest in Software Engineering and Game Development.
              </p>
              
              <p>
                As a dedicated learner, I constantly push myself to master new technologies and frameworks. 
                I believe in writing clean, efficient code and creating user-centric applications that make 
                a real impact.
              </p>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="portfolio-card portfolio-glow p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-portfolio-text">Education</h4>
              </div>
              <p className="text-portfolio-text-muted">
                Computer Science at Ho Chi Minh City University of Technology (HCMUT)
              </p>
            </Card>
            
            <Card className="portfolio-card portfolio-glow p-6">
              <div className="flex items-center mb-4">
                <Gamepad2 className="w-6 h-6 text-accent mr-3" />
                <h4 className="text-xl font-semibold text-portfolio-text">Gaming Expertise</h4>
              </div>
              <p className="text-portfolio-text-muted">
                Passionate about game development and mechanics analysis
              </p>
            </Card>
          </div>
          
          <Card className="portfolio-card portfolio-glow p-6 mb-8">
            <div className="flex items-center mb-4">
              <Bug className="w-6 h-6 text-accent mr-3" />
              <h4 className="text-xl font-semibold text-portfolio-text">Unique Skill</h4>
            </div>
            <p className="text-portfolio-text-muted">
              I have a keen eye for finding "bugs" in games and understanding game mechanics 
              so deeply that I can leverage these insights as analytical tools. This skill 
              translates well into software debugging and system analysis.
            </p>
          </Card>
          
          <div className="text-center">
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg portfolio-glow"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;