import Empty from '../../components/global/Empty';
import Spinner from '../../components/global/Spinner';
import { useCabins } from '../cabins/useCabins';
import TodayActivity from '../check-in-out/TodayActivity';
import DurationChart from './DurationChart';
import SalesChart from './SalesChart';
import Stats from './Stats';
import useRecentBookings from './useRecentBookings';
import useRecentStays from './useRecentStays';

export default function DashboardLayout() {
  const { cabinsData, isLoading: isLoadingCabins } = useCabins();
  const { recentBookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    isLoading: isLoadingStayes,
    confirmedStays,
    numDays,
  } = useRecentStays();

  if (!recentBookings?.length) return <Empty resourceName="bookings" />;

  if (isLoadingBookings || isLoadingStayes || isLoadingCabins) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 grid-rows-[auto_auto_22rem_22rem_auto] gap-6 lg:grid-cols-4 lg:grid-rows-[auto_24rem_auto]">
      <Stats
        bookings={recentBookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        numCabins={cabinsData?.length!}
      />

      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={recentBookings} numDayes={numDays} />
    </div>
  );
}
