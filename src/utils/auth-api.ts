import { supabase } from '../db/supabase';
import { TLoginForm } from '../types/schema/login-scheme';
import { TSignupForm, TUpdateAccountForm } from '../types/schema/signup-schema';

const URL = import.meta.env.VITE_SUPABASE_URL;

export async function signUp(values: TSignupForm) {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        fullName: values.fullName,
        avatar: '',
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

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

export async function UpdateCurrentUser(values: TUpdateAccountForm) {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let avatarPath;
  if (typeof values.avatar === 'string') {
    avatarPath = values.avatar;
  } else {
    const imageName =
      `user-${user?.id}-${values.avatar[0].name}-${Math.random()}`.replaceAll(
        '/',
        ''
      );
    console.log(imageName);

    const { error: storageError } = await supabase.storage
      .from('avatars')
      .upload(imageName, values.avatar[0]);

    if (storageError) {
      throw new Error('Error uploading the Image');
    }

    avatarPath = `${URL}/storage/v1/object/public/avatars/${imageName}`;
  }

  const { data, error } = await supabase.auth.updateUser({
    data: { fullName: values.fullName, avatar: avatarPath },
  });

  if (error) {
    throw new Error('Faild to updata user data');
  }

  console.log(data);
  return data;
}
