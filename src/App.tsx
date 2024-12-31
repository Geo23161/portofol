import React from 'react';
import { Layout } from 'lucide-react';
import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Layout className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Quelques Projets</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;