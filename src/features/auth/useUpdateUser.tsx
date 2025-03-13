import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateCurrentUser } from '../../utils/auth-api';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: UpdateCurrentUser,
    onSuccess: (data) => {
      toast.success('User Updated successfully');
      queryClient.setQueryData(['user'], data?.user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isPending };
}
