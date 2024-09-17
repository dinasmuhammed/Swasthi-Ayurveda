import React from 'react';

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-[#9CBA9D] p-6 rounded-lg shadow-md">
    <p className="italic mb-4 text-white">"{quote}"</p>
    <p className="font-semibold text-[#FFD700]">- {author}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Swasthi Ayurveda has transformed my approach to health. The Panchakarma therapy was incredibly rejuvenating.",
      author: "Priya M."
    },
    {
      quote: "The personalized Ayurvedic consultation provided insights that have greatly improved my well-being.",
      author: "Rahul K."
    },
    {
      quote: "The herbal remedies and treatments at Swasthi Ayurveda have made a significant difference in my life.",
      author: "Anjali S."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#9CBA9D] mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
