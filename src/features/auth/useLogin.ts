import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../utils/auth-api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginMutation, isPending: isLogining } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data?.user);
      toast.success('Welcome to the Dashboard');
      navigate('/');
    },
    onError: (err) => toast.error(err.message + ': Invalid Email or Password'),
  });

  return { loginMutation, isLogining };
}
