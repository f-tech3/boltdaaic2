export function generateSampleEvents() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);

  return [
    {
      title: 'AI Summit 2024',
      description: 'Global conference on artificial intelligence and machine learning',
      start_date: nextWeek.toISOString().split('T')[0],
      end_date: new Date(nextWeek.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      location_name: 'Tech Convention Center',
      location_address: 'San Francisco, CA',
      organizer: 'AI Global Institute',
      tags: ['AI', 'ML', 'Deep Learning'],
      image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      event_type: 'conference',
      website_url: 'https://example.com',
      categories: 'ai,tech'
    },
    {
      title: 'GenAI Workshop',
      description: 'Hands-on workshop on generative AI and LLMs',
      start_date: tomorrow.toISOString().split('T')[0],
      end_date: tomorrow.toISOString().split('T')[0],
      location_name: 'Innovation Hub',
      location_address: 'New York, NY',
      organizer: 'Data Science Academy',
      tags: ['GenAI', 'LLMs', 'AI'],
      image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      event_type: 'workshop',
      website_url: 'https://example.com',
      categories: 'genai,tech'
    },
    {
      title: 'Healthcare Analytics Conference',
      description: 'Conference focused on healthcare data analytics',
      start_date: lastWeek.toISOString().split('T')[0],
      end_date: lastWeek.toISOString().split('T')[0],
      location_name: 'Medical Center',
      location_address: 'Boston, MA',
      organizer: 'Healthcare Analytics Institute',
      tags: ['Healthcare', 'Analytics', 'Data Science'],
      image_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      event_type: 'conference',
      website_url: 'https://example.com',
      categories: 'health,data,conference'
    }
  ];
}