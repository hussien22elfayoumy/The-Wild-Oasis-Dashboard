import { FaDoorClosed, FaDoorOpen } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/global/Button';
import Empty from '../../components/global/Empty';
import Spinner from '../../components/global/Spinner';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useCheckout } from '../check-in-out/useCheckout';
import BookingDataBox from './BookingDataBox';
import { useBooking } from './useBooking';
import { HiTrash } from 'react-icons/hi2';
import { useDeleteBooking } from '../check-in-out/useDeleteBooking';

function BookingDetail() {
  const moveBack = useMoveBack();
  const { bookingData, isLoading } = useBooking();
  const { checkoutMutation, isCheckingOut } = useCheckout();
  const { deleteBookingMutation, isDeletingBooking } = useDeleteBooking();
  const navigate = useNavigate();

  const statusTypeColor = {
    unconfirmed: 'text-my-blue-700 bg-my-blue-100',
    'checked-in': 'text-my-green-700 bg-my-green-100',
    'checked-out': 'text-my-silver-700 bg-my-silver-100',
  };

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
      <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-semibold">Booking #{bookingData.id}</h1>
          <p
            className={`text-${statusTypeColor[bookingData.status as 'unconfirmed' | 'checked-in' | 'checked-out']} w-fit rounded-full px-3 py-1 font-[Sono] text-sm font-medium uppercase`}
          >
            {bookingData.status?.replace('-', ' ')}
          </p>
        </div>

        <div className="self-end md:self-auto">
          <Button onClick={moveBack} variation="text">
            &larr; Back
          </Button>
        </div>
      </div>

      <BookingDataBox booking={bookingData} />

      <div className="flex justify-end gap-3">
        {bookingData.status === 'unconfirmed' && (
          <Button
            onClick={() => navigate(`/checkin/${bookingData.id}`)}
            variation="primary"
          >
            <span className="flex items-center gap-1">
              <FaDoorClosed />
              Check in
            </span>
          </Button>
        )}
        {bookingData.status === 'checked-in' && (
          <Button
            disabled={isCheckingOut}
            onClick={() => checkoutMutation()}
            variation="primary"
          >
            <span className="flex items-center gap-1">
              <FaDoorOpen />
              Check out
            </span>
          </Button>
        )}

        <Button
          disabled={isDeletingBooking}
          onClick={() =>
            deleteBookingMutation(bookingData.id, {
              onSuccess: () => navigate(-1),
            })
          }
          variation="danger"
        >
          <span className="flex items-center gap-1">
            <HiTrash />
            {bookingData.status === 'checked-out' ? 'Delete ' : 'Cancel '}
            booking
          </span>
        </Button>
        <Button onClick={moveBack} variation="secondary">
          Back
        </Button>
      </div>
    </>
  );
}

export default BookingDetail;
