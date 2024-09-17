import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#004d00]">
      <header className="bg-[#F5F5F5] p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-[#004d00]">Swasthi Ayurveda</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="hover:text-[#FFD700] transition-colors duration-300 hover-effect"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F5F5F5] z-40 flex items-center justify-center">
          <nav>
            <ul className="flex flex-col space-y-4 text-center">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="text-xl hover:text-[#FFD700] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <main>{children}</main>
      <footer className="bg-[#004d00] text-[#F5F5F5] p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Swasthi Ayurveda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
