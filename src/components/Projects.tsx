import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito de compras, pagos seguros y panel de administración.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      link: 'https://example.com',
      github: 'https://github.com',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de control con visualización de datos en tiempo real y reportes interactivos.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg',
      link: 'https://example.com',
      github: 'https://github.com',
      tech: ['Next.js', 'TypeScript', 'Chart.js']
    },
    {
      title: 'Landing Page Corporativa',
      description: 'Sitio web profesional para empresa con diseño responsive y animaciones atractivas.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      link: 'https://example.com',
      github: 'https://github.com',
      tech: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar proyectos y tareas con colaboración en tiempo real.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      link: 'https://example.com',
      github: 'https://github.com',
      tech: ['React', 'Firebase', 'Material-UI']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo frontend
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Ver Proyecto</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;