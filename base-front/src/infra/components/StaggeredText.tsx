import React from 'react';

interface StaggeredTextProps {
  children: React.ReactNode;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold text-center leading-relaxed animate-slidein opacity-0 mb-12">{children}</h1>
  );
};

export default StaggeredText;