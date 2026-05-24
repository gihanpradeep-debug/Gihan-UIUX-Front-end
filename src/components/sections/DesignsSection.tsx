import React, { useState } from 'react';
import { portfolioItems, categories, PortfolioItem } from '../../data/portfolioData';
import ProjectCard from '../shared/ProjectCard';

const DesignsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="designs" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary neon-glow">Designs</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2  rounded-full transition-all duration-300 ${activeCategory === category
                  ? 'glass bg-primary/10 text-primary'
                  : 'glass hover:bg-background/40'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          <div className="relative max-w-4xl w-full glass rounded-xl p-6 animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-background/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-60 md:h-auto">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-primary glass inline-block px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-foreground/80 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="glass px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary inline-block"
                >
                  Discuss This Project
                </a>
                <span className="mx-4 text-foreground/50">..</span>
                <a
                  href="https://www.behance.net/gihanpradeep/projects"
                  className="btn btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignsSection;