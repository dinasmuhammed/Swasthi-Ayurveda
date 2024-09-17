import React from 'react';

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="italic mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Swasthi Spa provided the most relaxing experience I've ever had. I left feeling completely renewed.",
      author: "Sarah M."
    },
    {
      quote: "The Ayurvedic treatments here are truly transformative. I've never felt more balanced and energized.",
      author: "Rahul K."
    },
    {
      quote: "The attention to detail and personalized care at Swasthi Spa is unmatched. It's my go-to place for self-care.",
      author: "Emily L."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#6F4F28] mb-12">What Our Clients Say</h2>
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