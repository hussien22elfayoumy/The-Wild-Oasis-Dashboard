import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../utils/bookings-api';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  // TODO: FILTER
  const filterValue = searchParams.get('status') || 'all';
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  // TODO:  SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortBy.split('-');
  console.log(field, direction);

  const sort = { field, direction };

  const { data: bookingsData, isLoading } = useQuery({
    queryKey: ['bookings', filter, sort],
    queryFn: () => getBookings({ filter, sort }),
  });

  return { bookingsData, isLoading };
}
