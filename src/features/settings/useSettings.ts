import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../utils/settings-api';

export default function useSettings() {
  const { isLoading, data: settingsData } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { isLoading, settingsData };
}
