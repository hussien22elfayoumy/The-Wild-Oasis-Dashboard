import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  numCabins,
}: {
  bookings: TRecentBookins[];
  confirmedStays: TRecentStyes[] | undefined;
  numDays: number;
  numCabins: number;
}) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, booking) => booking.totalPrice! + acc, 0);
  const checkIns = confirmedStays?.length;

  /* 
	occupation  = num checkd in nights/ all avaliable nights  (numDays * numbCabins)
	*/
  const checkInNights = confirmedStays?.reduce(
    (acc, stay) => acc + stay.numNights!,
    0
  );

  const avaliableNights = numDays * numCabins;

  const occupationRate = Math.round((checkInNights! / avaliableNights) * 100);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase className="text-my-blue-700 size-7" />}
        title="Bookings"
        color="bg-my-blue-100"
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes className="text-my-green-700 size-7" />}
        title="Sales"
        color="bg-my-green-100"
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays className="text-my-indigo-700 size-7" />}
        title="Check Ins"
        color="bg-my-indigo-100"
        value={checkIns!}
      />
      <Stat
        icon={<HiOutlineChartBar className="text-my-yellow-700 size-7" />}
        title="Occupancy rate"
        color="bg-my-yellow-100"
        value={occupationRate! + '%'}
      />
    </>
  );
}
