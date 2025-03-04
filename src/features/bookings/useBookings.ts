import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../utils/bookings-api';
import { useSearchParams } from 'react-router-dom';
import { RES_PER_PAGE } from '../../constants/global';

export function useBookings() {
  const queryClient = useQueryClient();
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

  // TODO:  Prefetch for better UX
  const pageCount = Math.ceil(count! / RES_PER_PAGE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sort, page + 1],
      queryFn: () => getBookings({ filter, sort, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sort, page - 1],
      queryFn: () => getBookings({ filter, sort, page: page - 1 }),
    });
  }

  return { bookingsData, isLoading, count };
}
