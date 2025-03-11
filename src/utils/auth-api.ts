import { supabase } from '../db/supabase';
import { TLoginForm } from '../types/schema/login-scheme';

export async function login(values: TLoginForm) {
  const { data, error } = await supabase.auth.signInWithPassword(values);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
