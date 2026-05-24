import React from 'react';
import { Service } from '../../data/serviceData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="glass rounded-lg p-6 hover-lift group">
      <div className="mb-5 relative">
        <div className="w-14 h-14 glass rounded-lg flex items-center justify-center group-hover:bg-background/40 transition-all duration-300">
          <service.icon className={`w-7 h-7 ${service.color}`} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      
      <p className="text-foreground/70">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;