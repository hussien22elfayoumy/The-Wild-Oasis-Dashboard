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

  const sort = { field, direction };

  // TODO:  Pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { data: { data: bookingsData, count } = {}, isLoading } = useQuery({
    queryKey: ['bookings', filter, sort, page],
    queryFn: () => getBookings({ filter, sort, page }),
  });

  return { bookingsData, isLoading, count };
}
