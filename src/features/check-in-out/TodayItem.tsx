import { Link } from 'react-router-dom';
import Flag from '../../components/global/Flag';
import { HiEye } from 'react-icons/hi2';

export default function TodayItem({ activity }: { activity: TRecentStyes }) {
  const statusTypeColor = {
    unconfirmed: 'text-my-blue-700 bg-my-blue-100',
    'checked-in': 'text-my-green-700 bg-my-green-100',
    'checked-out': 'text-my-silver-700 bg-my-silver-100',
  };
  return (
    <li className="border-my-grey-200 grid grid-cols-[6.5rem_1.6rem_1fr_4.3rem_5.6rem] items-center gap-3 border-b py-2 text-sm first:border-t">
      <p
        className={`text-${statusTypeColor[activity.status as 'unconfirmed' | 'checked-in' | 'checked-out']} w-fit rounded-full px-3 py-1 font-[Sono] text-sm font-medium uppercase`}
      >
        {activity.status === 'unconfirmed' && 'Arriving'}
        {activity.status === 'checked-in' && 'Departing'}
      </p>
      <div>
        <Flag
          src={activity.guests.countryFlag || ''}
          alt={`Flag of ${activity.guests.nationality}`}
        />
      </div>
      <p className="font-medium">{activity.guests.fullName}</p>
      <div className="font-medium">{activity.numNights} Nights</div>
      <Link
        className="text-my-brand-600 flex items-center gap-1 underline-offset-2 hover:underline"
        to={`/bookings/${activity.id}`}
      >
        <HiEye />
        <span>Details</span>
      </Link>
    </li>
  );
}
