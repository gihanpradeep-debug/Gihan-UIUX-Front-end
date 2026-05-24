import React, { useEffect } from 'react';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Designs', href: '#designs' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Slide-in sidebar with glass effect */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 shadow-xl backdrop-blur-lg bg-white/10 border-l border-white/20 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white hover:text-red-400 transition"
          aria-label="Close menu"
        >
          &times;
        </button>

        <nav className="pt-16 px-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lg font-semibold text-white hover:text-primary transition"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
