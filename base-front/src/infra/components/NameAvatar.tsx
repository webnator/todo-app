import React from 'react';

interface NameAvatarProps {
  name: string;
}

const NameAvatar: React.FC<NameAvatarProps> = ({ name }) => {
  const getInitials = (name: string) => {
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    } else {
      return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
    }
  };

  const initials = getInitials(name);

  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white text-xs font-semibold cursor-default" title={name}>
      {initials}
    </div>
  );
};

export default NameAvatar;