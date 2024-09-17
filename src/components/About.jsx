import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-primary mb-8 slide-in">About Swasthi Ayurveda</h2>
        <div className="max-w-3xl mx-auto text-center fade-in">
          <p className="mb-4 text-primary">
            Swasthi Ayurveda is dedicated to providing holistic wellness through traditional Ayurvedic practices. Our clinic offers a serene escape from the everyday world, focusing on balancing body, mind, and spirit.
          </p>
          <p className="text-primary">
            We believe in a personalized approach to health and well-being, offering customized Ayurvedic treatments that cater to your individual constitution and needs. At Swasthi Ayurveda, we're committed to guiding you on your journey to optimal health and inner harmony.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
