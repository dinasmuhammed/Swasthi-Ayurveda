import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
