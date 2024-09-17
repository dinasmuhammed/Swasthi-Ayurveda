import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#6F4F28]">
      <header className="bg-[#9CBA9D] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-[#6F4F28]">Swasthi Spa</div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="hover:text-[#FFD700] transition-colors duration-300"
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
      <footer className="bg-[#9CBA9D] text-[#6F4F28] p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Swasthi Spa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;