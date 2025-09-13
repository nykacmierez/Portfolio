import React from 'react';
import { Github, Linkedin, Mail, Code, Palette, Smartphone } from 'lucide-react';

const Hero = () => {
  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js'
  ];

  const services = [
    { icon: Code, title: 'Desarrollo Web', desc: 'Aplicaciones web modernas y escalables' },
    { icon: Palette, title: 'Landing Pages', desc: 'Sitios atractivos y optimizados para conversión' },
    { icon: Smartphone, title: 'E-commerce', desc: 'Tiendas online personalizadas y funcionales' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hola, soy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Desarrollador
                </span>
                <br />
                Frontend
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Especializado en crear experiencias digitales excepcionales con tecnologías modernas. 
                Transformo ideas en interfaces atractivas y funcionales.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tecnologías que utilizo:</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tu@email.com"
                className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transform hover:scale-110 transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="about" className="mt-20 pt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Qué puedo hacer por ti?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;