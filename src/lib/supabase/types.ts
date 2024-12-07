import type { Database } from '../../types/supabase';

export type Event = Database['public']['Tables']['events']['Row'];

export interface EventFilters {
  categories: string[];
  companies: string[];
  date: string | null;
  search: string;
  timeFilter: 'upcoming' | 'all' | 'past';
}

export interface QueryResult<T> {
  data: T | null;
  error: Error | null;
}