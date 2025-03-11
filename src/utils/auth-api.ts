import { supabase } from '../db/supabase';
import { TLoginForm } from '../types/schema/login-scheme';

export async function login(values: TLoginForm) {
  const { data, error } = await supabase.auth.signInWithPassword(values);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
