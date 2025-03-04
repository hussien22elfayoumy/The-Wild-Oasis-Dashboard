import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../utils/bookings-api';

export function useBookings() {
  const { data: bookingsData, isLoading } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return { bookingsData, isLoading };
}
