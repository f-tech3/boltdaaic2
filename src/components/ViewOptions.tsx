import React from 'react';
import { List, Grid } from 'lucide-react';
import clsx from 'clsx';

interface ViewOptionsProps {
  view: 'list' | 'cards' | 'calendar';
  grouping: 'none' | 'monthly' | 'quarterly';
  onViewChange: (view: 'list' | 'cards' | 'calendar') => void;
  onGroupingChange: (grouping: 'none' | 'monthly' | 'quarterly') => void;
}

export const ViewOptions: React.FC<ViewOptionsProps> = ({
  view,
  onViewChange,
}) => {
  return (
    <div className="flex bg-[rgb(var(--card))] rounded-lg p-1">
      <button
        onClick={() => onViewChange('list')}
        className={clsx(
          'flex items-center px-4 py-2 rounded-md space-x-2 transition-all',
          view === 'list'
            ? 'bg-[rgb(var(--primary))] text-white'
            : 'text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))]'
        )}
      >
        <List className="w-4 h-4" />
        <span className="text-sm font-medium">List</span>
      </button>
      <button
        onClick={() => onViewChange('cards')}
        className={clsx(
          'flex items-center px-4 py-2 rounded-md space-x-2 transition-all',
          view === 'cards'
            ? 'bg-[rgb(var(--primary))] text-white'
            : 'text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))]'
        )}
      >
        <Grid className="w-4 h-4" />
        <span className="text-sm font-medium">Cards</span>
      </button>
    </div>
  );
};