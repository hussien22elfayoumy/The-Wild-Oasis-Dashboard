import { useQuery } from '@tanstack/react-query';
import { getStaysTodayActivity } from '../../utils/bookings-api';

export function useTodayActivity() {
  const { data: todayActivity, isLoading } = useQuery({
    queryKey: ['today-activity'],
    queryFn: getStaysTodayActivity,
  });

  return { todayActivity, isLoading };
}
