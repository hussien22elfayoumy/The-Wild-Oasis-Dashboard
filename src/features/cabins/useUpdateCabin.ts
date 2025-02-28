import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TCreateCabin } from '../../types/schema/create-cabin-schema';
import { createEditCabin } from '../../utils/cabins-api';
import toast from 'react-hot-toast';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabinMutation, isPending: isUpdatingCabin } =
    useMutation({
      mutationFn: ({
        newCabinData,
        id,
      }: {
        newCabinData: TCreateCabin;
        id: number;
      }) => createEditCabin(newCabinData, id),

      onSuccess: () => {
        toast.success('Cabin updated successfully');
        queryClient.invalidateQueries({ queryKey: ['cabins'] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { updateCabinMutation, isUpdatingCabin };
}
