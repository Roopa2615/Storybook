// src/utils/iconUtils.tsx
import React from 'react';
import SearchIcon from './SearchIcon';
import UserIcon from './UserIcon';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'search':
      return <SearchIcon {...props} />;
    case 'user':
      return <UserIcon {...props} />;
    default:
      return null;
  }
};

export default Icon;
