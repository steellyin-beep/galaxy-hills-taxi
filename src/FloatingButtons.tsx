import { useState } from 'react';
import { Phone, MessageCircle, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [showBookForm, setShowBookForm] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {showBookForm && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-dark-card rounded-2xl shadow-2xl p-5 w-80 mb-2 border border-dark-border"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Quick Book</h3>
                <button onClick={() => setShowBookForm(false)} className="p-1 hover:bg-dark-border rounded-lg">
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get('name');
                  const phone = data.get('phone');
                  const pickup = data.get('pickup');
                  const drop = data.get('drop');
                  const date = data.get('date');
                  const msg = `New Booking Request:\nName: ${name}\nPhone: ${phone}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}`;
                  window.open(`https://wa.me/919997949063?text=${encodeURIComponent(msg)}`, '_blank');
                  setShowBookForm(false);
                  form.reset();
                }}
                className="space-y-2"
              >
                <input name="name" placeholder="Your Name" required className="w-full px-3 py-2 rounded-lg bg-dark border border-dark-border text-white text-sm focus:outline-none focus:border-primary placeholder-slate-500" />
                <input name="phone" placeholder="Phone Number" required className="w-full px-3 py-2 rounded-lg bg-dark border border-dark-border text-white text-sm focus:outline-none focus:border-primary placeholder-slate-500" />
                <input name="pickup" placeholder="Pickup Location" required className="w-full px-3 py-2 rounded-lg bg-dark border border-dark-border text-white text-sm focus:outline-none focus:border-primary placeholder-slate-500" />
                <input name="drop" placeholder="Drop Location" required className="w-full px-3 py-2 rounded-lg bg-dark border border-dark-border text-white text-sm focus:outline-none focus:border-primary placeholder-slate-500" />
                <input name="date" type="date" required className="w-full px-3 py-2 rounded-lg bg-dark border border-dark-border text-white text-sm focus:outline-none focus:border-primary placeholder-slate-500" />
                <button type="submit" className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                  Send on WhatsApp
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowBookForm(!showBookForm)}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center relative"
        >
          <Calendar className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[10px] font-bold flex items-center justify-center text-white">1</span>
        </motion.button>

        <motion.a
          href="https://wa.me/919997949063?text=Namaste%20Galaxy%20Hills%2C%20mujhe%20cab%20book%20karni%20hai"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>

        <motion.a
          href="tel:+919997949063"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-accent text-white shadow-lg shadow-accent/30 flex items-center justify-center relative"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
        </motion.a>
      </div>
    </>
  );
}
