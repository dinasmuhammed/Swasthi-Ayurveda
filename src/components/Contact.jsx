import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#9CBA9D] mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-[#9CBA9D]">
            <p className="flex items-center mb-4">
              <Phone className="mr-2" /> <span className="text-lg">☎️ 8138814322</span>
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2" /> <span className="text-lg">Ullyeri 19, Thamarassery - Koyilandi Road, Calicut, India 673323</span>
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <iframe
              title="Swasthi Ayurveda Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1751401562!2d75.8681!3d11.3479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzUyLjQiTiA3NcKwNTInMDUuMiJF!5e0!3m2!1sen!2sus!4v1645454545454!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
