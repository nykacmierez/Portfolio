import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tu@email.com',
      link: 'mailto:tu@email.com',
      color: 'text-red-600 bg-red-100 hover:bg-red-200'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 234 567 890',
      link: 'tel:+1234567890',
      color: 'text-green-600 bg-green-100 hover:bg-green-200'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Enviar mensaje',
      link: 'https://wa.me/1234567890',
      color: 'text-green-600 bg-green-100 hover:bg-green-200'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad, País',
      link: '#',
      color: 'text-blue-600 bg-blue-100 hover:bg-blue-200'
    }
  ];

  const socialMedia = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/tu-perfil',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/tu-usuario',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://instagram.com/tu-usuario',
      color: 'bg-pink-600 hover:bg-pink-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ¡Conectemos!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo y hacer realidad tus ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-full ${contact.color} transition-colors`}>
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-gray-300">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Redes Sociales</h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full text-white ${social.color} transform hover:scale-110 transition-all duration-300 animate-bounce-in`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Envíame un Mensaje</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">
            © 2025 Tu Nombre. Diseñado y desarrollado con ❤️ usando React y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;