import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../utils/cabins-api';

export function useCabins() {
  const { data: cabinsData, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { cabinsData, isLoading };
}
