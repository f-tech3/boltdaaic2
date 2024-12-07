import { create } from 'zustand';
import type { Database } from '../types/supabase';
import { fetchEvents, registerForEvent, bookmarkEvent } from '../lib/supabase/queries';
import toast from 'react-hot-toast';

type Event = Database['public']['Tables']['events']['Row'];

interface EventStore {
  events: Event[];
  loading: boolean;
  error: string | null;
  filters: {
    categories: string[];
    companies: string[];
    date: string | null;
    search: string;
    timeFilter: 'upcoming' | 'all' | 'past';
  };
  setFilters: (filters: Partial<EventStore['filters']>) => void;
  toggleCategory: (category: string) => void;
  toggleCompany: (company: string) => void;
  clearFilters: () => void;
  fetchEvents: () => Promise<void>;
  registerForEvent: (eventId: string) => Promise<void>;
  bookmarkEvent: (eventId: string) => Promise<void>;
}

const defaultFilters = {
  categories: [],
  companies: [],
  date: null,
  search: '',
  timeFilter: 'upcoming' as const,
};

export const useEventStore = create<EventStore>((set, get) => ({
  events: [],
  loading: false,
  error: null,
  filters: defaultFilters,
  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      loading: true,
    }));
    get().fetchEvents();
  },
  toggleCategory: (category: string) => {
    set((state) => {
      const categories = state.filters.categories.includes(category)
        ? state.filters.categories.filter(c => c !== category)
        : [...state.filters.categories, category];
      
      return {
        filters: { ...state.filters, categories },
        loading: true,
      };
    });
    get().fetchEvents();
  },
  toggleCompany: (company: string) => {
    set((state) => {
      const companies = state.filters.companies.includes(company)
        ? state.filters.companies.filter(c => c !== company)
        : [...state.filters.companies, company];
      
      return {
        filters: { ...state.filters, companies },
        loading: true,
      };
    });
    get().fetchEvents();
  },
  clearFilters: () => {
    set((state) => ({
      filters: { ...defaultFilters, timeFilter: state.filters.timeFilter },
      loading: true,
    }));
    get().fetchEvents();
  },
  fetchEvents: async () => {
    const { filters } = get();
    try {
      const { data, error } = await fetchEvents(filters);
      
      if (error) {
        set({ error: error.message, loading: false });
        toast.error('Failed to fetch events');
        return;
      }
      
      set({ events: data || [], loading: false, error: null });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      toast.error('An error occurred while fetching events');
    }
  },
  registerForEvent: async (eventId: string) => {
    const { success, error } = await registerForEvent(eventId, 'temp-user-id');
    
    if (success) {
      toast.success('Successfully registered for event!');
      get().fetchEvents();
    } else {
      toast.error(error?.message || 'Failed to register for event');
    }
  },
  bookmarkEvent: async (eventId: string) => {
    const { success, error } = await bookmarkEvent(eventId, 'temp-user-id');
    
    if (success) {
      toast.success('Event bookmarked!');
    } else {
      toast.error(error?.message || 'Failed to bookmark event');
    }
  },
}));