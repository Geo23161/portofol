import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            Voir la démo <ExternalLink size={16} />
          </a>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {project.images.map((image, index) => (
            <div 
              key={index} 
              className="relative flex-none snap-start"
              style={{
                width: image.device === 'mobile' ? '240px' : 
                       image.device === 'tablet' ? '400px' : '600px',
                       
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full object-cover rounded-lg"
              />
              <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                {image.device}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}