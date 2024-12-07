import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = 'https://pyywkkmzdavroidwnzhf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5eXdra216ZGF2cm9pZHduemhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MTc0MjcsImV4cCI6MjA0Nzk5MzQyN30.RQDJe27B6zsMbTIjPsAS5gijAv7snCAIoGSewnoeRFI';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);