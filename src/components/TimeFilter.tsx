import React from 'react';
import { Clock, Calendar, Clock3 } from 'lucide-react';
import clsx from 'clsx';

interface TimeFilterProps {
  value: 'upcoming' | 'all' | 'past';
  onChange: (value: 'upcoming' | 'all' | 'past') => void;
}

export const TimeFilter: React.FC<TimeFilterProps> = ({ value, onChange }) => {
  const options = [
    { id: 'upcoming', label: 'Upcoming', icon: Clock },
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'past', label: 'Past', icon: Clock3 },
  ] as const;

  return (
    <div className="flex bg-[#1f2437] rounded-lg p-1">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={clsx(
              'flex items-center px-4 py-2 rounded-md space-x-2 transition-all',
              value === option.id
                ? 'bg-[#262b3d] text-[#22c55e]'
                : 'text-gray-400 hover:text-gray-300'
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};