import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-[#004d00] opacity-50"></div>
      <div className="relative text-center text-[#F5F5F5] z-10 fade-in px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Swasthi Ayurveda</h1>
        <p className="text-xl md:text-2xl font-sans text-[#FFD700]">Ayurveda Clinic & Panchakarma Center</p>
        <button className="mt-8 bg-[#004d00] text-[#F5F5F5] px-6 py-3 rounded-full hover:bg-[#FFD700] hover:text-[#004d00] transition-colors duration-300 hover-effect">
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
