import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">About Epicraft</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Welcome to <strong>Crafted Treasures</strong>, your ultimate online destination for authentic handcrafted treasures. 
        We are passionate about bringing unique, locally crafted products to a global audience, empowering artisans, 
        and celebrating the beauty of handmade craftsmanship.
      </p>
      
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          At Epicraft, we aim to bridge the gap between skilled artisans and customers looking for 
          exclusive, high-quality handmade goods. We believe that every product tells a story and carries the essence of its creator.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto">
          <li>Curated collection of premium handcrafted products</li>
          <li>Supporting local artisans and small businesses</li>
          <li>Ethically sourced and sustainable materials</li>
          <li>Secure and seamless shopping experience</li>
          <li>Worldwide shipping and dedicated customer support</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
