# Supabase Setup Instructions

## Fixing "Failed to Fetch" Error

The "failed to fetch" error occurs because Supabase credentials are not configured. Follow these steps to fix it:

### Step 1: Create a Supabase Account
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

### Step 2: Get Your Supabase Credentials
1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (the `anon` key, not the `service_role` key)

### Step 3: Configure Environment Variables
1. In the `frontend` directory, create a file named `.env`
2. Add the following content to the `.env` file:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

3. Replace `your_project_url_here` with your actual Project URL
4. Replace `your_anon_key_here` with your actual anon key

### Example:
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzQ1Njc4OSwiZXhwIjoxOTM5MDMyNzg5fQ.example-key-here
```

### Step 4: Restart Your Development Server
1. Stop your current development server (Ctrl+C)
2. Restart it with `npm run dev` or `yarn dev`

### Step 5: Verify Configuration
- The login and signup pages should now work without "failed to fetch" errors
- Check the browser console for any error messages
- If you see a warning about Supabase credentials, double-check your `.env` file

## Important Notes

- **Never commit your `.env` file** to version control (it's already in `.gitignore`)
- The `.env` file should be in the `frontend` directory, not the root directory
- Environment variables must be prefixed with `VITE_` to be accessible in Vite projects
- After changing `.env` file, you must restart your development server

## Troubleshooting

### Still getting "failed to fetch" error?
1. Verify your `.env` file is in the `frontend` directory
2. Check that variable names start with `VITE_`
3. Make sure there are no spaces around the `=` sign
4. Restart your development server
5. Check browser console for detailed error messages
6. Verify your Supabase project is active and not paused

### Google OAuth not working?
1. Go to Supabase Dashboard → Authentication → Providers
2. Enable Google provider
3. Add your Google OAuth credentials (Client ID and Client Secret)
4. Add authorized redirect URLs in Google Cloud Console

## Need Help?

If you're still experiencing issues:
1. Check the Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
2. Verify your Supabase project status in the dashboard
3. Check the browser console for detailed error messages

