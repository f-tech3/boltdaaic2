import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, isCollapsed }) => {
  return (
    <a 
      href="#" 
      className="flex items-center px-3 py-2 text-gray-300 hover:bg-[#262b3d] rounded-lg transition-colors group"
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
      {!isCollapsed && (
        <span className="ml-3 text-sm font-medium">{label}</span>
      )}
    </a>
  );
};