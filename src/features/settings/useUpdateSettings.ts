import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting } from '../../utils/settings-api';
import toast from 'react-hot-toast';

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingSettings, mutate: updateSettingMutation } =
    useMutation({
      mutationFn: updateSetting,
      onSuccess: () => {
        toast.success('Hotel settings updates successfully');
        queryClient.invalidateQueries({
          queryKey: ['settings'],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isUpdatingSettings, updateSettingMutation };
}
