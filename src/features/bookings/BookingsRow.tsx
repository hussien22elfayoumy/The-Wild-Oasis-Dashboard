import { format, isToday } from 'date-fns';
import { HiEye } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

export default function BookingsRow({
  bookingDetails,
}: {
  bookingDetails: TBookingWithRelations;
}) {
  const statusTypeColor = {
    unconfirmed: 'text-my-blue-700 bg-my-blue-100',
    'checked-in': 'text-my-green-700 bg-my-green-100',
    'checked-out': 'text-my-silver-700 bg-my-silver-100',
  };

  return (
    <>
      <tr className="border-my-grey-200 grid grid-cols-[6.2rem_15rem_20rem_11.5rem_7.5rem_6.2rem] items-center gap-x-4 border-b px-6 py-3.5 last:border-b-0">
        <td className="text-my-grey-600 font-[Sono] text-base font-medium">
          {bookingDetails.cabins.name}
        </td>
        <td className="text-my-grey-600 flex flex-col gap-1 font-[Sono] text-base font-medium">
          <span>{bookingDetails.guests.fullName}</span>
          <span className="text-xs">{bookingDetails.guests.email}</span>
        </td>
        <td className="text-my-grey-600 flex flex-col gap-1 font-[Sono] text-base font-medium">
          <span>
            {isToday(new Date(bookingDetails.startDate as string))
              ? 'Today'
              : formatDistanceFromNow(bookingDetails.startDate as string)}{' '}
            &rarr; {bookingDetails.numNights} night stay
          </span>
          <span className="text-xs">
            {format(
              new Date(bookingDetails.startDate as string),
              'MMM dd yyyy'
            )}{' '}
            &mdash;{' '}
            {format(new Date(bookingDetails.endDate as string), 'MMM dd yyyy')}
          </span>
        </td>

        <td
          className={`text-${statusTypeColor[bookingDetails.status as 'unconfirmed' | 'checked-in' | 'checked-out']} w-fit rounded-full px-3 py-1 font-[Sono] text-sm font-medium uppercase`}
        >
          {bookingDetails.status?.replace('-', ' ')}
        </td>
        <td className="font-[Sono] text-base font-semibold">
          {formatCurrency(bookingDetails.totalPrice!)}
        </td>
        <td className="flex flex-col gap-0.5 font-[Sono] text-base">
          <Link
            className="text-my-brand-600 flex items-center gap-1 underline-offset-2 hover:underline"
            to={`/bookings/${bookingDetails.id}`}
          >
            <HiEye />
            <span>Details</span>
          </Link>
          {/* {bookingDetails.status === 'unconfirmed' && (
            <Link
              className="text-my-brand-600 flex items-center gap-1 underline-offset-2 hover:underline"
              to={`/checkin/${bookingDetails.id}`}
            >
              <LuMapPinCheck />

              <span>Checkin</span>
            </Link>
          )} */}
        </td>
      </tr>
    </>
  );
}
