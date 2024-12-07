import { SupabaseClient } from '@supabase/supabase-js';
import { startOfDay } from 'date-fns';
import type { EventFilters } from './types';
import type { Database } from '../../types/supabase';

type Query = ReturnType<SupabaseClient<Database>['from']>['select'];

export function applyTimeFilter(query: Query, timeFilter: EventFilters['timeFilter']): Query {
  const today = startOfDay(new Date()).toISOString();
  
  switch (timeFilter) {
    case 'upcoming':
      return query.gte('start_date', today);
    case 'past':
      return query.lt('start_date', today);
    default:
      return query;
  }
}

export function applyCategoryFilter(query: Query, categories: string[]): Query {
  if (!categories.length) return query;
  
  // Build OR conditions for each category
  const conditions = categories.map(category => `categories.ilike.%${category}%`).join(',');
  return query.or(conditions);
}

export function applyDateFilter(query: Query, date: string | null): Query {
  if (!date) return query;
  return query.gte('start_date', date);
}

export function applySearchFilter(query: Query, search: string): Query {
  if (!search) return query;
  const searchTerm = search.toLowerCase();
  return query.or(
    `title.ilike.%${searchTerm}%,` +
    `description.ilike.%${searchTerm}%,` +
    `location_name.ilike.%${searchTerm}%,` +
    `organizer.ilike.%${searchTerm}%`
  );
}