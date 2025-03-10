import Button from '../../components/global/Button';
import { useMoveBack } from '../../hooks/useMoveBack';
import BookingDataBox from './BookingDataBox';

function BookingDetail() {
  const status = 'checked-in';
  const moveBack = useMoveBack();

  const statusTypeColor = {
    unconfirmed: 'text-my-blue-700 bg-my-blue-100',
    'checked-in': 'text-my-green-700 bg-my-green-100',
    'checked-out': 'text-my-silver-700 bg-my-silver-100',
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-semibold">Booking #X</h1>
          <p
            className={`text-${statusTypeColor[status as 'unconfirmed' | 'checked-in' | 'checked-out']} w-fit rounded-full px-3 py-1 font-[Sono] text-sm font-medium uppercase`}
          >
            {status?.replace('-', ' ')}
          </p>
        </div>

        <Button onClick={moveBack} variation="text">
          &larr; Back
        </Button>
      </div>

      {/* <BookingDataBox booking={booking} /> */}

      <div className="flex justify-end gap-3">
        <Button onClick={moveBack} variation="secondary">
          Back
        </Button>
      </div>
    </>
  );
}

export default BookingDetail;
