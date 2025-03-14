import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../utils/bookings-api';

export default function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last') ? 7 : +searchParams.get('last')!;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: recetnStays, isLoading } = useQuery({
    queryKey: ['stays', `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = recetnStays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );

  return { recetnStays, isLoading, confirmedStays, numDays };
}
