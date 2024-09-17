import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <header className="bg-secondary p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-primary">Swasthi Ayurveda</div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="hover:text-accent transition-colors duration-300 hover-effect"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-primary text-secondary p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Swasthi Ayurveda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
