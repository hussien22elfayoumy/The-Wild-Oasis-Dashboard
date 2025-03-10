import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../utils/bookings-api';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useCheckin() {
  const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: chekinMutaion, isPending: isCheckingIn } = useMutation({
    mutationFn: (values: { isPaid: boolean; status: string }) =>
      updateBooking(+bookingId!, values),
    onSuccess: () => {
      toast.success('Booking was checked in successfully');
      queryClient.invalidateQueries({
        queryKey: ['booking', bookingId],
      });
      navigate('/');
    },
    onError: (err) => toast.error(err.message),
  });

  return { chekinMutaion, isCheckingIn };
}
