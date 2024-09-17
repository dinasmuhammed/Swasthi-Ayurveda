import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-6xl font-serif mb-4">Swasthi Spa</h1>
        <p className="text-2xl">Rejuvenating Wellness and Tranquility</p>
        <button className="mt-8 bg-[#FFD700] text-[#6F4F28] px-6 py-3 rounded-full hover:bg-[#9CBA9D] transition-colors duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;