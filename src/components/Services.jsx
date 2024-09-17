import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Relaxation Massage",
      description: "Unwind with our signature massage, designed to melt away stress and tension."
    },
    {
      title: "Rejuvenating Facial",
      description: "Revitalize your skin with our nourishing facial treatments, tailored to your skin type."
    },
    {
      title: "Ayurvedic Therapies",
      description: "Experience the healing power of ancient Ayurvedic treatments for holistic wellness."
    },
    {
      title: "Body Wraps",
      description: "Detoxify and hydrate your body with our luxurious and therapeutic body wraps."
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#9CBA9D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#6F4F28] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;