import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Professional Restaurant Landing Page",
      description: "Super responsive professional restaurant landing page with modern design, showcasing menu items, location, and online ordering capabilities.",
      technologies: ["React", "CSS3", "JavaScript", "Firebase", "Responsive Design"],
      category: "Frontend Development",
      featured: true,
      liveUrl: "https://pizza-restaurent-c64f2.web.app/",
      githubUrl: "#",
      demoLabel: "Demo"
    },
    {
      title: "AskMyFile - AI Document Analysis",
      description: "Intelligent document analysis tool that allows you to ask questions about your documents and get AI-powered responses using advanced NLP techniques.",
      technologies: ["Python", "LangChain", "Streamlit", "Sentence Transformers", "FAISS", "Ollama"],
      category: "AI/ML",
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/bharadwajGarugu/AskMyFile"
    },
    {
      title: "Anti-G - Gambling Addiction Recovery App",
      description: "Mobile app to help individuals break free from gambling addiction with daily check-ins, urge surfing, community support, and progress tracking.",
      technologies: ["React Native", "Expo", "JavaScript", "Firebase", "Mobile Development"],
      category: "Mobile Development",
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/bharadwajGarugu/Anti-Gambling"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions combining Java development, data analysis, and AI technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    {project.githubUrl !== "#" && (
                      <Button variant="ghost" size="sm" className="p-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl !== "#" && (
                      <Button variant="ghost" size="sm" className="p-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {project.demoLabel && <span className="ml-1 text-xs">{project.demoLabel}</span>}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/30 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mb-2 bg-secondary/30">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-primary/20">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl !== "#" && (
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl !== "#" && (
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg" asChild>
            <a href="https://github.com/bharadwajGarugu" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
