import React, { useEffect, useState } from 'react';
import { EventList } from '../components/EventList';
import { useEventStore } from '../stores/eventStore';
import { DiscoverSection } from '../components/DiscoverSection';

export const Home: React.FC = () => {
  const { filters, setFilters } = useEventStore();
  const [view, setView] = useState<'list' | 'cards' | 'calendar'>('cards');
  const [grouping, setGrouping] = useState<'none' | 'monthly' | 'quarterly'>('none');

  useEffect(() => {
    setFilters({ timeFilter: 'upcoming' });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Discover Section - Fixed Position */}
      <div className="sticky top-14 z-40 bg-[rgb(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--background))]/80 pb-4">
        <DiscoverSection
          view={view}
          grouping={grouping}
          onViewChange={setView}
          onGroupingChange={setGrouping}
        />
      </div>

      {/* Event List */}
      <div className="mt-4">
        <EventList viewMode={view} />
      </div>
    </div>
  );
};