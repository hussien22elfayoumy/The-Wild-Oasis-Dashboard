import { useEffect, useState } from 'react';
import Button from '../../components/global/Button';
import Empty from '../../components/global/Empty';
import Spinner from '../../components/global/Spinner';
import { useMoveBack } from '../../hooks/useMoveBack';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';
import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './useCheckin';
import useSettings from '../settings/useSettings';

export default function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [hadBreakfast, setHadBreakfast] = useState(false);
  const moveBack = useMoveBack();
  const { bookingData, isLoading } = useBooking();
  const { chekinMutaion, isCheckingIn } = useCheckin();
  const { settingsData } = useSettings();
  console.log(bookingData);

  useEffect(() => {
    setConfirmPaid(bookingData?.isPaid!);
  }, [bookingData]);

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!bookingData) return <Empty resourceName="bookings" />;
  const optionalBreakfastPrice =
    settingsData?.breakfastPrice! *
    bookingData?.numGuests! *
    bookingData?.numNights!;

  const totalAmount = hadBreakfast
    ? optionalBreakfastPrice + bookingData.totalPrice!
    : bookingData.totalPrice!;

  function handleCheckin() {
    let checkInValues;

    if (hadBreakfast) {
      checkInValues = {
        isPaid: true,
        status: 'checked-in',
        hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalAmount,
      };
    } else {
      checkInValues = { isPaid: true, status: 'checked-in' };
    }

    chekinMutaion(checkInValues);
  }

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

      <div className="bg-my-grey-0 border-my-grey-100 rounded-md px-8 py-6">
        <div className="flex gap-4">
          <input
            type="checkbox"
            onChange={() => {
              setHadBreakfast((confirm) => !confirm);
              setConfirmPaid(false);
            }}
            checked={hadBreakfast}
            id="hadBreakfast"
            className="accent-my-brand-600 disabled:accent-my-brand-600 h-6 w-6 origin-[0] transform outline-offset-2"
          />
          <label
            htmlFor="hadBreakfast"
            className="flex flex-1 items-center gap-2"
          >
            Want to add Breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </label>
        </div>
      </div>

      {!bookingData.hasBreakfast && (
        <div className="bg-my-grey-0 border-my-grey-100 rounded-md px-8 py-6">
          <div className="flex gap-4">
            <input
              type="checkbox"
              onChange={() => setConfirmPaid((confirm) => !confirm)}
              checked={confirmPaid}
              id="confirm"
              className="accent-my-brand-600 disabled:accent-my-brand-600 h-6 w-6 origin-[0] transform outline-offset-2"
              disabled={confirmPaid}
            />
            <label htmlFor="confirm" className="flex flex-1 items-center gap-2">
              I confirm That
              {bookingData.guests.fullName}
              has paid the total amount of{' '}
              {hadBreakfast
                ? `${formatCurrency(totalAmount!)} (${formatCurrency(optionalBreakfastPrice)} + ${formatCurrency(bookingData.totalPrice!)})`
                : formatCurrency(totalAmount!)}
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-3">
        <Button
          disabled={!confirmPaid || isCheckingIn}
          onClick={handleCheckin}
          variation="primary"
        >
          Check in booking #{bookingData.id}
        </Button>
        <Button onClick={moveBack} variation="secondary">
          Back
        </Button>
      </div>
    </>
  );
}
