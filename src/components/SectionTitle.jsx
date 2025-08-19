import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8 relative pb-2">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded"></span>
    </h2>
  );
};

export default SectionTitle;