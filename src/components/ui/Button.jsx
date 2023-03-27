import React from 'react';

export const Button = ({ children, className, ...attrs }) => {
  return (
    <button className={className} {...attrs}>
      {children}
    </button>
  );
};
