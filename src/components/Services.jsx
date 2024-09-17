import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="bg-secondary p-6 rounded-lg shadow-md border border-primary hover-effect">
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-primary">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Panchakarma Therapy",
      description: "Experience deep cleansing and rejuvenation with our authentic Panchakarma treatments."
    },
    {
      title: "Ayurvedic Consultation",
      description: "Receive personalized health advice based on your unique Ayurvedic constitution."
    },
    {
      title: "Herbal Remedies",
      description: "Benefit from our carefully crafted herbal preparations to support your wellness journey."
    },
    {
      title: "Ayurvedic Massage",
      description: "Indulge in therapeutic massages using traditional techniques and herbal oils."
    }
  ];

  return (
    <section id="services" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-secondary mb-12 slide-in">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
