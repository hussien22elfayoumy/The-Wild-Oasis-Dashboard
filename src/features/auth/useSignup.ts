import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../utils/auth-api';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signupMutation, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () =>
      toast.success(
        'User created  successfully!, Please Confirem the email address'
      ),
    onError: (err) => toast.error(err.message),
  });

  return { signupMutation, isPending };
}
