import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-light border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Galaxy Hills</h3>
                <p className="text-[10px] uppercase tracking-widest text-primary-light">Taxi Service</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Dehradun's most trusted cab service since 2018. Safe, reliable, and affordable taxi services for local and outstation travel across Uttarakhand and North India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-dark-card flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold text-white">FB</a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-card flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold text-white">IG</a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-card flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold text-white">YT</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 text-sm hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Photo Gallery</Link></li>
              <li><Link to="/blog" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Travel Blog</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 text-sm hover:text-primary-light transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-400 text-sm">Airport Transfers</span></li>
              <li><span className="text-slate-400 text-sm">Hill Station Tours</span></li>
              <li><span className="text-slate-400 text-sm">Chardham Yatra</span></li>
              <li><span className="text-slate-400 text-sm">City Transfers</span></li>
              <li><span className="text-slate-400 text-sm">Corporate Cabs</span></li>
              <li><span className="text-slate-400 text-sm">School/Campus Rides</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Shimla Bypass Rd, Mehuwala, Dehradun, Arcadia Grant, Uttarakhand 248018</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <a href="tel:+919997949063" className="text-slate-400 text-sm hover:text-primary-light transition-colors">+91 99979 49063</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a href="mailto:info@galaxyhillstaxiservice.com" className="text-slate-400 text-sm hover:text-primary-light transition-colors">info@galaxyhillstaxiservice.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary-light shrink-0" />
                <span className="text-slate-400 text-sm">24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Galaxy Hills Taxi Service. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center transition-colors">
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
