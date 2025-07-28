import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Coffee } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile Development",
      icon: Code,
      description: "Modern web and mobile application development",
      skills: ["React", "React Native", "Expo", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development",
      icon: Coffee,
      description: "Server-side development and API creation",
      skills: ["Java", "Python", "Spring Boot", "REST APIs", "Microservices", "API Development"]
    },
    {
      title: "AI & Data Analysis",
      icon: Brain,
      description: "Artificial intelligence and data processing technologies",
      skills: ["Python", "LangChain", "Streamlit", "SQL", "Machine Learning", "AI/ML Projects"]
    },
    {
      title: "Cloud & Database Technologies",
      icon: Database,
      description: "Cloud platforms and database management",
      skills: ["AWS", "Firebase", "Supabase", "SQL", "Netlify", "Git", "Postman"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning backend development, data analysis, and cutting-edge AI technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary mr-4 group-hover:animate-glow">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/20 border border-primary/20 hover:bg-secondary/30 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;