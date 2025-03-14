import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBooking } from '../../utils/bookings-api';

export function useCheckout() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkoutMutation, isPending: isCheckingOut } = useMutation({
    mutationFn: () => updateBooking(+bookingId!, { status: 'checked-out' }),
    onSuccess: () => {
      toast.success(`Booking #${bookingId} was checked out successfully`);
      queryClient.invalidateQueries({
        queryKey: ['booking', bookingId],
      });
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkoutMutation, isCheckingOut };
}
