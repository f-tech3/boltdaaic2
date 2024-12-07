import { supabase } from './client';
import type { Event, EventFilters, QueryResult } from './types';
import { generateSampleEvents } from './sample-data';
import { 
  applyTimeFilter, 
  applyCategoryFilter,
  applyCompanyFilter,
  applyDateFilter, 
  applySearchFilter
} from './filters';

export async function fetchEvents(filters: EventFilters): Promise<QueryResult<Event[]>> {
  try {
    // First check if we have any events
    const { count, error: countError } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    // Insert sample data only if there are no events
    if (count === 0) {
      const sampleEvents = generateSampleEvents();
      const { error: insertError } = await supabase
        .from('events')
        .insert(sampleEvents);

      if (insertError) throw insertError;
    }

    // Now fetch events with filters
    let query = supabase.from('events').select('*');

    // Apply filters
    query = applyTimeFilter(query, filters.timeFilter);
    
    if (filters.categories && filters.categories.length > 0) {
      const categoryConditions = filters.categories.map(category => 
        `categories.ilike.%${category}%`
      ).join(',');
      query = query.or(categoryConditions);
    }
    
    if (filters.companies && filters.companies.length > 0) {
      query = query.in('organizer', filters.companies);
    }
    
    if (filters.date) {
      query = applyDateFilter(query, filters.date);
    }
    
    if (filters.search) {
      query = applySearchFilter(query, filters.search);
    }

    // Default sorting by start_date
    query = query.order('start_date', { 
      ascending: filters.timeFilter !== 'past'
    });

    const { data, error: fetchError } = await query;

    if (fetchError) throw fetchError;

    return { data, error: null };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { data: null, error: error as Error };
  }
}

export async function registerForEvent(eventId: string, userId: string): Promise<QueryResult<boolean>> {
  try {
    // For now, we'll just simulate a successful registration
    return { data: true, error: null };
  } catch (error) {
    console.error('Error registering for event:', error);
    return { data: false, error: error as Error };
  }
}

export async function bookmarkEvent(eventId: string, userId: string): Promise<QueryResult<boolean>> {
  try {
    // For now, we'll just simulate a successful bookmark
    return { data: true, error: null };
  } catch (error) {
    console.error('Error bookmarking event:', error);
    return { data: false, error: error as Error };
  }
}