import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center portfolio-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Terminal className="w-20 h-20 text-primary animate-pulse-glow" />
            <Code className="w-12 h-12 text-accent absolute -bottom-2 -right-2" />
          </div>
        </div>
        
        
        
        
        
        <div className="text-xl text-portfolio-text mb-8 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <p className="text-2xl font-medium">Hello, I'm Kyling</p>
          <p className="gradient-text font-semibold text-3xl">Future Web/App Developer | Full-stack</p>
        </div>
        
        <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg portfolio-glow group">
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;