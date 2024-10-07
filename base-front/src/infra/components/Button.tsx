import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button 
      className="animate-slidein opacity-0 bg-gray-50 text-2xl text-slate-800 font-semibold py-4 px-12 rounded-lg shadow-md hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in-out" 
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;