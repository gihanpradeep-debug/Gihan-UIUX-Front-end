import React from 'react';
import ServiceCard from '../shared/ServiceCard';
import { services } from '../../data/serviceData';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary neon-glow">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;