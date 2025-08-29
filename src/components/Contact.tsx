import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:hieuanhvt2005@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 portfolio-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-portfolio-text-muted mt-6 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and build something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="portfolio-card portfolio-glow p-8">
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer" onClick={handleEmailClick}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text-muted">Email</p>
                    <p className="text-portfolio-text font-medium group-hover:text-primary transition-colors">
                      hieuanhvt2005@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text-muted">Location</p>
                    <p className="text-portfolio-text font-medium">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-portfolio-border">
                <p className="text-portfolio-text-muted mb-4">Find me on</p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-portfolio-border hover:bg-primary hover:border-primary hover:text-primary-foreground portfolio-glow"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon" 
                    className="border-portfolio-border hover:bg-accent hover:border-accent hover:text-accent-foreground portfolio-glow"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Call to Action */}
            <Card className="portfolio-card portfolio-glow p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Send className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-portfolio-text mb-4">
                  Ready to Start a Project?
                </h3>
                
                <p className="text-portfolio-text-muted mb-8">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'm always excited to connect with fellow developers and innovators.
                </p>
                
                <Button 
                  onClick={handleEmailClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg portfolio-glow group w-full"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-portfolio-border">
            <p className="text-portfolio-text-muted">
              Made with ❤️ by Kyling • © 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;