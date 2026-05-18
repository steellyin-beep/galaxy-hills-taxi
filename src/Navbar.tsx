import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg shadow-black/30 border-b border-dark-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight ${scrolled ? 'text-white' : 'text-white'}`}>Galaxy Hills</span>
              <span className={`text-[10px] uppercase tracking-widest leading-tight ${scrolled ? 'text-primary-light' : 'text-white/80'}`}>Taxi Service</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-light ${location.pathname === link.path ? 'text-primary-light' : 'text-white/70'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919997949063" className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${scrolled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'}`}>
              <Phone className="w-4 h-4" />
              +91 99979 49063
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg">
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-dark-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname === link.path ? 'bg-primary/20 text-primary-light' : 'text-white/80 hover:bg-dark-card'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+919997949063" className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-white text-sm font-medium mt-2">
                <Phone className="w-4 h-4" />
                +91 99979 49063
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
