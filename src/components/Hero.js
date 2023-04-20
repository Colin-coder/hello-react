import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
        <p className="text-lg text-gray-600 text-center max-w-lg mb-8">
          Your subtitle goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log('Button clicked!')}
        >
          Call-to-Action Button
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
