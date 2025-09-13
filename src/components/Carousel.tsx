import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const collaborations = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg' },
    { name: 'InnovateLab', logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg' },
    { name: 'DigitalStudio', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
    { name: 'StartupHub', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
    { name: 'CreativeAgency', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg' },
    { name: 'DevCompany', logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collaborations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [collaborations.length]);

  return (
    <section id="collaborations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Colaboraciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            He tenido el privilegio de trabajar con empresas innovadoras y proyectos emocionantes
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-8 items-center">
            {collaborations.map((collab, index) => (
              <div
                key={collab.name}
                className="group text-center transform transition-all duration-300 hover:scale-110"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {collab.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {collaborations.map((collab, index) => (
                <div key={collab.name} className="w-full flex-shrink-0 text-center px-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={collab.logo}
                      alt={collab.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800">
                    {collab.name}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {collaborations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;