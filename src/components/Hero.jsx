import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/images/hero-bg.svg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Warung Mamahmia Terasi MJS
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Nikmati kelezatan masakan rumahan dengan sentuhan terasi khas yang menggugah selera.
        </p>
        <Link
          to="/gallery"
          className="bg-accent text-secondary hover:bg-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
        >
          Lihat Menu Kami
        </Link>
      </div>
    </section>
  );
};

export default Hero;