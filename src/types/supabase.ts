export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          start_date: string;
          end_date: string | null;
          location_name: string;
          location_address: string;
          organizer: string;
          tags: string[] | null;
          image_url: string | null;
          created_at: string;
          updated_at: string;
          event_type: string;
          website_url: string | null;
          categories: string[] | null;
        };
        Insert: Omit<Database['public']['Tables']['events']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['events']['Insert']>;
      };
    };
  };
}