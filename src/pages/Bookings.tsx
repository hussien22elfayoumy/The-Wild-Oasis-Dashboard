import BookingsTable from '../features/bookings/BookingsTable';
import BookingsTableOperations from '../features/bookings/BookingsTableOperations';

function Bookings() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">All bookings</h1>
        <BookingsTableOperations />
      </div>
      <div className="overflow-x-auto">
        <BookingsTable />
      </div>
    </>
  );
}
export default Bookings;
