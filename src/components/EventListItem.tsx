import React from 'react';
import { Calendar, MapPin, Building2, ExternalLink, BookmarkPlus } from 'lucide-react';
import { format } from 'date-fns';
import type { Database } from '../types/supabase';
import clsx from 'clsx';

type Event = Database['public']['Tables']['events']['Row'];

interface EventListItemProps {
  event: Event;
  onBookmark: (eventId: string) => void;
}

export const EventListItem: React.FC<EventListItemProps> = ({ event, onBookmark }) => {
  return (
    <div className="group flex items-center gap-4 p-4 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-xl hover:border-[rgb(var(--border))]/80 transition-all">
      {/* Date Column */}
      <div className="flex-shrink-0 w-24 text-center">
        <div className="bg-[rgb(var(--background))] rounded-lg p-2">
          <div className="text-sm text-[rgb(var(--foreground))]/70">
            {format(new Date(event.start_date), 'MMM')}
          </div>
          <div className="text-2xl font-bold">
            {format(new Date(event.start_date), 'd')}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-[rgb(var(--primary))] transition-colors">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--foreground))]/70">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>{format(new Date(event.start_date), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="truncate">{event.location_name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="truncate">{event.organizer}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onBookmark(event.id)}
          className="p-2 text-[rgb(var(--foreground))]/50 hover:text-[rgb(var(--foreground))] transition-colors"
          title="Bookmark Event"
        >
          <BookmarkPlus className="w-5 h-5" />
        </button>
        {event.website_url && (
          <a
            href={event.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2563eb] hover:text-[#3b82f6] transition-colors"
            title="Visit Event Website"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};