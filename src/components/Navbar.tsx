import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          FORGE<span className="text-mango">STUDIOS</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-grey hover:text-mango transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/917542878967?text=Hi%20Forge%20Studios!%20I'd%20like%20to%20get%20started%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-mango text-ink px-6 py-2.5 rounded-full text-sm font-bold hover:bg-mango/90 transition-all hover:shadow-lg hover:shadow-mango/20"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-off-white border-b border-ink/5 px-6 py-8 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-bold text-ink"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/917542878967?text=Hi%20Forge%20Studios!%20I'd%20like%20to%20get%20started%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mango text-ink px-6 py-4 rounded-xl text-lg font-bold text-center"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
}
