import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookMarked,
  GemIcon,
  Bell,
  HelpCircle,
  LogIn,
  Radio,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { QuarryLogo } from '../icons/QuarryLogo';
import clsx from 'clsx';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/', color: 'text-emerald-400' },
    { icon: BookMarked, label: 'My Events', path: '/my-events', color: 'text-purple-400' },
    { icon: GemIcon, label: 'Sponsors', path: '/sponsors', color: 'text-amber-400' },
    { icon: Bell, label: 'Notifications', path: '/notifications', color: 'text-rose-400' },
  ];

  const bottomNavItems = [
    { icon: HelpCircle, label: 'Help', path: '/help', color: 'text-blue-400' },
    { icon: LogIn, label: 'Sign In', path: '/signin', color: 'text-indigo-400' },
  ];

  return (
    <aside 
      className={clsx(
        'fixed left-0 top-0 h-screen bg-[#1f2437] transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="flex items-center h-14 px-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] rounded-full blur opacity-40" />
            <QuarryLogo className="relative w-8 h-8 text-[#2ecc71]" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent">
              DaaiC
            </span>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="p-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => clsx(
              'flex items-center px-3 py-2 rounded-lg transition-all duration-200 group relative',
              isActive 
                ? 'bg-[#262b3d]' 
                : 'hover:bg-[#262b3d]/50'
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={clsx(
                  'w-5 h-5 transition-transform duration-200',
                  item.color,
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                )} />
                {!isCollapsed && (
                  <span className={clsx(
                    'ml-3 transition-colors duration-200',
                    isActive ? 'text-white font-medium' : 'text-gray-400 group-hover:text-white'
                  )}>
                    {item.label}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 border-2 border-[#2ecc71]/20 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Conference Info */}
      <div className="absolute bottom-20 left-0 right-0 px-2">
        <div className="p-3 rounded-lg bg-[#262b3d]/50">
          <div className="flex items-center space-x-3">
            <Radio className="w-5 h-5 text-[#2ecc71]" />
            {!isCollapsed && (
              <div className="text-sm">
                <div className="text-[#2ecc71] font-medium">Data Analytics & AI</div>
                <div className="text-gray-400">Conferences</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-800">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => clsx(
              'flex items-center px-3 py-2 rounded-lg transition-all duration-200 group',
              isActive 
                ? 'bg-[#262b3d]' 
                : 'hover:bg-[#262b3d]/50'
            )}
          >
            <item.icon className={clsx('w-5 h-5', item.color)} />
            {!isCollapsed && (
              <span className="ml-3 text-gray-400 group-hover:text-white">
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Collapse Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-[#262b3d] rounded-full flex items-center justify-center hover:bg-[#2f354a] transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </aside>
  );
};