import React from 'react';
import { Calendar, LayoutGrid, List } from 'lucide-react';
import { motion } from 'framer-motion';

interface ViewToggleProps {
  value: 'list' | 'grid' | 'calendar';
  onChange: (value: 'list' | 'grid' | 'calendar') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ value, onChange }) => {
  return (
    <div className="flex space-x-2 bg-[#262b3d] rounded-lg p-1">
      {[
        { value: 'list', icon: List, label: 'List' },
        { value: 'grid', icon: LayoutGrid, label: 'Cards' },
        { value: 'calendar', icon: Calendar, label: 'Calendar' },
      ].map((option) => (
        <button
          key={option.value}
          className="relative px-4 py-2 rounded-md flex items-center space-x-2"
          onClick={() => onChange(option.value as any)}
        >
          {value === option.value && (
            <motion.div
              layoutId="viewToggle"
              className="absolute inset-0 bg-blue-600 rounded-md"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <option.icon className="w-4 h-4 relative z-10" />
          <span className="relative z-10">{option.label}</span>
        </button>
      ))}
    </div>
  );
};