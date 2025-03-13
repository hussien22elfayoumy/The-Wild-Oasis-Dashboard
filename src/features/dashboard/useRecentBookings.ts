import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../utils/bookings-api';

export default function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last') ? 7 : +searchParams.get('last')!;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: recentBookings, isLoading } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { recentBookings, isLoading };
}
