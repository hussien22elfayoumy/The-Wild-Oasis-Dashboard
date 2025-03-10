import Button from '../../components/global/Button';
import Empty from '../../components/global/Empty';
import Spinner from '../../components/global/Spinner';
import { useMoveBack } from '../../hooks/useMoveBack';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';

export default function CheckinBooking() {
  const moveBack = useMoveBack();
  const { bookingData, isLoading } = useBooking();

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!bookingData) return <Empty resourceName="bookings" />;
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
          Check in Booking #{bookingData.id}
        </h1>

        <Button onClick={moveBack} variation="text">
          &larr; Back
        </Button>
      </div>

      <BookingDataBox booking={bookingData} />

      <div className="flex justify-end gap-3">
        <Button onClick={moveBack} variation="primary">
          Check in booking #{bookingData.id}
        </Button>
        <Button onClick={moveBack} variation="secondary">
          Back
        </Button>
      </div>
    </>
  );
}
