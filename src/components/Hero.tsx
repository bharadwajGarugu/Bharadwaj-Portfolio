import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/Communication,Technology,Email,Vector illustration.svg" 
                alt="Bharadwaj Garugu" 
                className="w-32 h-32 rounded-full border-4 border-primary shadow-glow animate-float object-cover bg-white p-2"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Bharadwaj Garugu
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            AI Technology Enthusiast, Data Analyst, Web and Java Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Technical Professional with 2+ years of experience in supporting and enhancing complex systems, 
            optimizing reliability through deep debugging, incident analysis, and cross-functional collaboration. 
            Currently expanding skills in AWS, Python, LangChain, and mobile development with real-world AI projects.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                // Find the contact section by looking for the "Let's Work Together" heading
                const headings = document.querySelectorAll('h2');
                let contactSection = null;
                
                for (const heading of headings) {
                  if (heading.textContent?.includes("Let's Work Together")) {
                    contactSection = heading.closest('section');
                    break;
                  }
                }
                
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback: scroll to the last section
                  const sections = document.querySelectorAll('section');
                  if (sections.length > 0) {
                    sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              <Mail className="mr-2" />
              Hire Me
            </Button>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                // Find the projects section by looking for the "Featured Projects" heading
                const headings = document.querySelectorAll('h2');
                let projectsSection = null;
                
                for (const heading of headings) {
                  if (heading.textContent?.includes("Featured Projects")) {
                    projectsSection = heading.closest('section');
                    break;
                  }
                }
                
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                window.open("https://linkedin.com/in/garugubharadwaj", "_blank");
              }}
            >
              Request Referral
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/bharadwajGarugu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/garugubharadwaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.reddit.com/user/BharadwajG/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;