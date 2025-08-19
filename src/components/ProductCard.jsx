import React from 'react';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {price && <p className="text-secondary font-bold text-lg">{price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;