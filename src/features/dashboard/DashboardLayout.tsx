import Empty from '../../components/global/Empty';
import Spinner from '../../components/global/Spinner';
import useRecentBookings from './useRecentBookings';
import useRecentStays from './useRecentStays';

export default function DashboardLayout() {
  const { recentBookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { recetnStays, isLoading: isLoadingStayes } = useRecentStays();

  console.log(recentBookings);
  console.log(recetnStays);

  if (!recentBookings?.length) return <Empty resourceName="bookings" />;

  if (isLoadingBookings || isLoadingStayes) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6">
      <div>staticts</div>
      <div>today activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </div>
  );
}
