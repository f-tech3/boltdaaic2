import React from 'react';
import { EventCard } from './EventCard';
import { EventListItem } from './EventListItem';
import { useEventStore } from '../stores/eventStore';

interface EventListProps {
  viewMode: 'list' | 'cards' | 'calendar';
}

export const EventList: React.FC<EventListProps> = ({ viewMode }) => {
  const { events, loading, error, registerForEvent, bookmarkEvent } = useEventStore();

  const handleShare = async (event: any) => {
    try {
      await navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(var(--primary))]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        <p>Error loading events: {error}</p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center text-[rgb(var(--foreground))]/70 py-8">
        <p>No events found matching your criteria.</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            onBookmark={bookmarkEvent}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {events.map((event) => (
        <div key={event.id} className="h-full">
          <EventCard
            event={event}
            onBookmark={bookmarkEvent}
            onShare={handleShare}
            onRegister={registerForEvent}
          />
        </div>
      ))}
    </div>
  );
};