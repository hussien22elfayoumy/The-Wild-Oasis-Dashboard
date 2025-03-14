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
  bookings: {
    createdAt: string;
    totalPrice: number | null;
    extrasPrice: number | null;
  }[];
  confirmedStays: TRecentStyes[] | undefined;
  numDays: number;
  numCabins: number;
}) {
  console.log('booking', bookings);
  console.log('stayes', confirmedStays);
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
  console.log(numDays, numCabins);

  const avaliableNights = numDays * numCabins;

  const occupationRate = Math.round((checkInNights! / avaliableNights) * 100);
  console.log(occupationRate);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase className="text-my-blue-700 size-7" />}
        title="Bookings"
        color="blue"
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes className="text-my-green-700 size-7" />}
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays className="text-my-indigo-700 size-7" />}
        title="Check Ins"
        color="indigo"
        value={checkIns!}
      />
      <Stat
        icon={<HiOutlineChartBar className="text-my-yellow-700 size-7" />}
        title="Occupancy rate"
        color="yellow"
        value={occupationRate! + '%'}
      />
    </>
  );
}
