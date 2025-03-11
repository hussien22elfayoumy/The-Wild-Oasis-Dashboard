import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../utils/auth-api';

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    staleTime: 0,
  });

  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
}
