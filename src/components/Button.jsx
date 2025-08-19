import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-colors duration-300";
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-secondary text-white hover:bg-primary",
    accent: "bg-accent text-secondary hover:bg-primary"
  };

  return (
    <button
      className={twMerge(clsx(baseClasses, variantClasses[variant]), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;