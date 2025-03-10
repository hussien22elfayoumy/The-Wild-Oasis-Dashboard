import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking } from '../../utils/bookings-api';

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingBooking, mutate: deleteBookingMutation } =
    useMutation({
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success('Booking Deleted Successfully');
        queryClient.invalidateQueries({
          queryKey: ['bookings'],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isDeletingBooking, deleteBookingMutation };
}
