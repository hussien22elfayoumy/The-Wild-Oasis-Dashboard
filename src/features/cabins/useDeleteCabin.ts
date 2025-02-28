import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabine } from '../../utils/cabins-api';
import toast from 'react-hot-toast';

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingCabin, mutate: deleteCabinMutation } =
    useMutation({
      mutationFn: deleteCabine,
      onSuccess: () => {
        toast.success('Cabin Deleted Successfully');
        queryClient.invalidateQueries({
          queryKey: ['cabins'],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isDeletingCabin, deleteCabinMutation };
}
