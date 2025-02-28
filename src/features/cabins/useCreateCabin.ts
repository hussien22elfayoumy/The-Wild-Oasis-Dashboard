import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createEditCabin } from '../../utils/cabins-api';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabinMutation, isPending: isCreatingCabin } =
    useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success('Cabin created successfully');
        queryClient.invalidateQueries({ queryKey: ['cabins'] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { createCabinMutation, isCreatingCabin };
}
