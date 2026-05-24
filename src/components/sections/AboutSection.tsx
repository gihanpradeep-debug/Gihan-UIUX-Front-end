import React from 'react';
import { Figma, Palette, LayoutPanelTop, Smartphone, AppWindow, Search } from 'lucide-react';


const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Figma', icon: Figma },
    { name: 'UX Research', icon: Search },
    { name: 'Adobe XD', icon: AppWindow },
    { name: 'Sketch', icon: Palette },
    { name: 'Wireframing', icon: LayoutPanelTop },
    { name: 'Mobile Design', icon: Smartphone },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary neon-glow">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 text-foreground/80">
              With over 4 years of experience in UI/UX design, I've helped companies create user-centered digital products that are both beautiful and functional.
            </p>
            
            <p className="text-lg mb-6 text-foreground/80">
              My approach combines strategic thinking with creative problem-solving. I believe that exceptional design starts with a deep understanding of user needs and business goals, creating experiences that delight users while driving business growth.
            </p>
            
            <p className="text-lg mb-8 text-foreground/80">
              I specialize in mobile-first design principles, accessibility, and creating cohesive design systems that scale.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="glass p-4 rounded-lg hover-lift flex flex-col items-center text-center">
                  <skill.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass border border-primary/30 animate-float">
                <img 
                  src="images\hero.jpeg" 
                  alt="Gihan - UI/UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mix-blend-overlay"></div>
              
              {/* Floating elements */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 glass rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Figma className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -left-6 top-1/2 w-16 h-16 glass rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <AppWindow className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;