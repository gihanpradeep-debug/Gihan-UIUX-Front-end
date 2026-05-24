import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto h-screen flex items-center flex justify-center items-center px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl text-center md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Hi, I'm <span className="text-primary">Gihan</span> <br />
            Creative UI/UX Designer
          </h1>
          
          <p className="text-lg text-center md:text-xl mb-8 text-foreground/80 max-w-2xl animate-slide-up">
            I craft beautiful digital experiences that blend intuitive interfaces with delightful interactions. 
            Let's create something amazing together.
          </p>
          
          <div className=" justify-center items-center flex flex-wrap gap-4 animate-slide-up " style={{ animationDelay: '0.2s' }}>
            <a 
              href="#contact" 
              className="btn btn-primary group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
              <ArrowDownRight className="inline ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            
            <a 
              href="#designs" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#designs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>

          <div className="mt-16">
            <a 
              href="#about"
              className="flex items-center justify-center w-10 h-10 mx-auto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="sr-only">Scroll Down</span>
              <ArrowDownRight className="w-6 h-6 text-primary animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;