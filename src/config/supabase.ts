import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Access the auth service
const auth = supabase.auth;

// Now you can use auth methods like:
// auth.signIn()
// auth.signUp()
// auth.signOut()
// auth.session()
// auth.user()

export default supabase;
export { auth };