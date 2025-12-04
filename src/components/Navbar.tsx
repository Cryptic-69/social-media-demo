import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">
            !
          </div>
          <span className="text-xl tracking-tight">
            oh so <span className="italic">creative</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-gray-800"></span>
            <span className="w-full h-0.5 bg-gray-800"></span>
            <span className="w-full h-0.5 bg-gray-800"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
