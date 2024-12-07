import React from 'react';
import { Filter } from 'lucide-react';
import { useEventStore } from '../stores/eventStore';

export const EventFilters: React.FC = () => {
  const { filters, setFilters } = useEventStore();

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select
        className="px-4 py-2 bg-[#262b3d] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-100"
        value={filters.category || ''}
        onChange={(e) => setFilters({ category: e.target.value || null })}
      >
        <option value="">All Categories</option>
        <option value="conference">Conference</option>
        <option value="workshop">Workshop</option>
        <option value="meetup">Meetup</option>
        <option value="webinar">Webinar</option>
      </select>
      
      <input
        type="date"
        className="px-4 py-2 bg-[#262b3d] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-100"
        value={filters.date || ''}
        onChange={(e) => setFilters({ date: e.target.value || null })}
      />
      
      <select
        className="px-4 py-2 bg-[#262b3d] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-100"
        value={filters.sortBy}
        onChange={(e) => setFilters({ sortBy: e.target.value as any })}
      >
        <option value="date">Sort by Date</option>
        <option value="popularity">Sort by Popularity</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};