import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Users, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to full-time opportunities, freelance projects, and job referrals. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Hire Me Card */}
          <Card className="bg-gradient-primary border-0 text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4" />
              <CardTitle className="text-2xl">Full-Time Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 opacity-90">
                Looking for exciting full-time roles in Java development, data analysis, or AI/ML engineering.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => {
                  const choice = window.confirm(
                    "Choose how to send your job offer:\n\nOK - Send Email\nCancel - View Profiles (GitHub/LinkedIn)"
                  );
                  if (choice) {
                    window.location.href = "mailto:garugubharadwaj142@gmail.com,supermariokid1357@gmail.com?subject=Job Offer Opportunity&body=Hi Bharadwaj,%0D%0A%0D%0AI have a job opportunity that might interest you.%0D%0A%0D%0ABest regards";
                  } else {
                    const profileChoice = window.confirm(
                      "Choose profile to view:\n\nOK - GitHub\nCancel - LinkedIn"
                    );
                    if (profileChoice) {
                      window.open("https://github.com/bharadwajGarugu", "_blank");
                    } else {
                      window.open("https://linkedin.com/in/garugubharadwaj", "_blank");
                    }
                  }
                }}
              >
                <Mail className="mr-2" />
                Send Job Offer
              </Button>
            </CardContent>
          </Card>

          {/* Freelance Card */}
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">Freelance Projects</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-muted-foreground">
                Available for freelance projects in web development, data analysis, and AI solution implementation.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  const choice = window.confirm(
                    "Choose how to connect:\n\nOK - GitHub\nCancel - LinkedIn"
                  );
                  if (choice) {
                    window.open("https://github.com/bharadwajGarugu", "_blank");
                  } else {
                    window.open("https://linkedin.com/in/garugubharadwaj", "_blank");
                  }
                }}
              >
                <MessageSquare className="mr-2" />
                Discuss Project
              </Button>
            </CardContent>
          </Card>

          {/* Referrals Card */}
          <Card className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">Job Referrals</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-muted-foreground">
                Know of any opportunities that match my skills? I'd appreciate your referral and connection.
              </p>
              <Button 
                variant="premium" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  const choice = window.confirm(
                    "Choose how to connect:\n\nOK - GitHub\nCancel - LinkedIn"
                  );
                  if (choice) {
                    window.open("https://github.com/bharadwajGarugu", "_blank");
                  } else {
                    window.open("https://linkedin.com/in/garugubharadwaj", "_blank");
                  }
                }}
              >
                <Users className="mr-2" />
                Refer Me
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <Card className="bg-card/50 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Mail className="mr-3 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>garugubharadwaj142@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+91 8186038199</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>India</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Profiles */}
          <Card className="bg-card/50 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a 
                href="https://github.com/bharadwajGarugu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:border-primary/40 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">@bharadwajGarugu</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/garugubharadwaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:border-primary/40 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">garugubharadwaj</p>
                </div>
              </a>
              
              <a 
                href="https://www.reddit.com/user/BharadwajG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-secondary/20 border border-primary/20 hover:bg-secondary/30 hover:border-primary/40 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
                <div>
                  <p className="font-semibold">Reddit</p>
                  <p className="text-sm text-muted-foreground">@BharadwajG</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Individual Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Clients Onboarded</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;