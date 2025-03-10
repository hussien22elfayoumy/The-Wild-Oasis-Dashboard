import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../utils/bookings-api';
import { useParams } from 'react-router-dom';

export function useBooking() {
  const { bookingId } = useParams();

  const { data: bookingData, isLoading } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(+bookingId!),

    retry: false,
  });

  return { bookingData, isLoading };
}
