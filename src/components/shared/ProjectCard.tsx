import React, { useState } from 'react';
import { PortfolioItem } from '../../data/portfolioData';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  project: PortfolioItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass rounded-lg overflow-hidden hover-lift group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div 
          className={`absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            className="glass px-4 py-2 rounded-full flex items-center gap-2 text-primary hover:bg-primary/20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <Eye className="w-4 h-4" />
            View Project
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
            {project.category}
          </span>
        </div>
        
        <p className="text-foreground/70 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;