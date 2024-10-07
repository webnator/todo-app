import React, { useState } from 'react';

interface CopyTagProps {
  text: string;
}

const CopyTag: React.FC<CopyTagProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 border border-gray-300 rounded-lg">
      <span className="text-gray-800 font-medium">{text}</span>

      <button
        onClick={handleCopy}
        className="px-3 py-1 bg-slate-500 text-white rounded-md text-sm hover:bg-slate-800 transition duration-200"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyTag;