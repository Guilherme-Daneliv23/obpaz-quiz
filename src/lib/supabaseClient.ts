import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://jeqzaluapakeymjmyxtg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcXphbHVhcGFrZXltam15eHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTY1MTUsImV4cCI6MjA3MTE5MjUxNX0.OKO6XchDdWKNvaVD7rhc6eZh-Fa6jc7iOnbqNGvQMT4'

export const supabase = createClient(supabaseUrl, supabaseKey);