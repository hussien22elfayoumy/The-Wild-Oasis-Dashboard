import BookingsTable from '../features/bookings/bookingsTable';

function Bookings() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">All bookings</h1>
        <p>TEST</p>
      </div>
      <div className="overflow-x-auto">
        <BookingsTable />
      </div>
    </>
  );
}
export default Bookings;
