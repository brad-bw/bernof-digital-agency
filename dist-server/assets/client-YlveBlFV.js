import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://asquzvdgksndciggfbhb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXV6dmRna3NuZGNpZ2dmYmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjA3MzgsImV4cCI6MjA2NTU5NjczOH0.HX_PeX0QXw1pXA9xwapfPOBK8t6WJY1X8sTjezbCCAs";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export { supabase as s };
