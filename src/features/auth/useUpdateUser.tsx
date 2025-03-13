import { useMutation } from '@tanstack/react-query';
import { UpdateCurrentUser } from '../../utils/auth-api';

export function useUpdateUser() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: UpdateCurrentUser,
  });

  return { updateUser, isPending };
}
