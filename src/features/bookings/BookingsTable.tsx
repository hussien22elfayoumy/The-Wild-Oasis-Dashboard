import Empty from '../../components/global/Empty';
import Pagination from '../../components/global/Paginations';
import Spinner from '../../components/global/Spinner';
import BookingsRow from './BookingsRow';
import { useBookings } from './useBookings';

export default function BookingsTable() {
  const { bookingsData, isLoading, count } = useBookings();

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!bookingsData?.length) return <Empty resourceName="bookings" />;

  return (
    <table className="bg-my-grey-0 border-my-grey-200 mx-auto border text-left text-sm">
      <thead className="w-full">
        <tr className="border-my-grey-200 bg-my-grey-50 text-my-grey-600 grid grid-cols-[6.2rem_15rem_20rem_11.5rem_7.5rem_6.2rem] items-center gap-x-4 border-b p-4 px-6 font-semibold tracking-wider uppercase">
          <td>Cabin</td>
          <td>Guest</td>
          <td>Dates</td>
          <td>Status</td>
          <td>Amount</td>
          <td></td>
        </tr>
      </thead>
      <tbody className="w-full">
        <>
          {bookingsData.map((booking) => (
            <BookingsRow key={booking.id} bookingDetails={booking} />
          ))}
        </>
      </tbody>
      <tfoot>
        <tr className="border-my-grey-200 border">
          <td>
            <Pagination count={count!} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
