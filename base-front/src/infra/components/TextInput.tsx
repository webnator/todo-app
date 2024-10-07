import React from 'react';

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      { ...props }
      type="text"
      className="bg-transparent focus:border-gray-500 hover:border-gray-400 focus:border-b hover:border-b outline-none placeholder-gray-400 transition duration-200 ease-in-out text-gray-700 w-full py-2"
    />
  );
};

export default TextInput;