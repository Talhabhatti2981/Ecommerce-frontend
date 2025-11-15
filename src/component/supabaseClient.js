import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://YOUR_PROJECT_ID.supabase.co"; 
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "YOUR_ANON_KEY";

if (!supabaseUrl || supabaseUrl.includes("YOUR_PROJECT_ID") || !supabaseAnonKey || supabaseAnonKey.includes("YOUR_ANON_KEY")) {
  console.error("⚠️ Supabase credentials are not configured! Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
