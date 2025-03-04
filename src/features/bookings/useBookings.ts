import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../utils/bookings-api';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // TODO: FILTER
  const filterVlue = searchParams.get('status') || 'all';
  const filter =
    !filterVlue || filterVlue === 'all'
      ? null
      : { field: 'status', value: filterVlue };

  const { data: bookingsData, isLoading } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({ filter }),
  });

  return { bookingsData, isLoading };
}
