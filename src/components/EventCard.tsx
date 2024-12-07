import React from 'react';
import { Calendar, MapPin, BookmarkPlus, ExternalLink, Building2 } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import type { Database } from '../types/supabase';
import { useEventStore } from '../stores/eventStore';

type Event = Database['public']['Tables']['events']['Row'];

interface EventCardProps {
  event: Event;
  onBookmark: (eventId: string) => void;
  onShare: (event: Event) => void;
  onRegister: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onBookmark,
  onShare,
  onRegister,
}) => {
  const { toggleCompany } = useEventStore();
  const tags = event.tags || [];
  const daysLeft = differenceInDays(new Date(event.start_date), new Date());
  const displayTags = tags.slice(0, 3);
  const remainingTags = tags.length > 3 ? tags.length - 3 : 0;

  return (
    <div className="group relative h-full flex flex-col bg-[rgb(var(--card))] rounded-xl overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--border))]/80 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48">
        <img
          src={event.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] to-transparent opacity-60" />
        
        {/* Two-line Days Counter */}
        <div className="absolute top-3 left-3">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="px-4 py-1 text-center bg-red-500/90">
              <span className="text-xs font-medium text-white/90 uppercase tracking-wide">
                {daysLeft === 0 ? 'Today' : 'Days Left'}
              </span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-b from-red-600/90 to-red-700/90">
              <span className="block text-2xl font-bold text-white text-center">
                {daysLeft === 0 ? '!' : daysLeft}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="absolute bottom-3 left-3 right-12 flex items-center space-x-2 overflow-hidden">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs bg-black/50 backdrop-blur-sm text-white rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className="text-xs text-white/90 whitespace-nowrap backdrop-blur-sm bg-black/50 px-2 py-1 rounded-full">
              +{remainingTags} more
            </span>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={() => onBookmark(event.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm text-gray-300 hover:text-white transition-colors"
        >
          <BookmarkPlus className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[rgb(var(--foreground))] line-clamp-2 group-hover:text-[rgb(var(--primary))] transition-colors">
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-1 text-sm text-[rgb(var(--foreground))]/70 mt-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0 text-emerald-400" />
            <span>{format(new Date(event.start_date), 'MMM d, yyyy')}</span>
            {event.end_date && (
              <>
                <span className="mx-2">→</span>
                <span>{format(new Date(event.end_date), 'MMM d, yyyy')}</span>
              </>
            )}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-purple-400" />
            <span className="truncate">{event.location_name}</span>
          </div>
        </div>

        {/* Footer - Minimal spacing */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[rgb(var(--border))]">
          <button
            onClick={() => toggleCompany(event.organizer)}
            className="flex items-center text-sm text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition-colors group/organizer"
          >
            <Building2 className="w-4 h-4 mr-2 flex-shrink-0 text-amber-400 group-hover/organizer:scale-110 transition-transform" />
            <span className="truncate">{event.organizer}</span>
          </button>
          {event.website_url && (
            <a
              href={event.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] hover:text-[#3b82f6] transition-colors"
            >
              <ExternalLink className="w-5 h-5 transform scale-120" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};