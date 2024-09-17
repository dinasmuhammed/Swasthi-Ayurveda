import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-primary opacity-50"></div>
      <div className="relative text-center text-secondary z-10 fade-in">
        <h1 className="text-6xl font-serif mb-4">Swasthi Ayurveda</h1>
        <p className="text-2xl font-sans text-accent">Ayurveda Clinic & Panchakarma Center</p>
        <button className="mt-8 bg-primary text-secondary px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition-colors duration-300 hover-effect">
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
