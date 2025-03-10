import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

function DataItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="flex items-center gap-2 font-medium">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

function Flag({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="border-my-grey-100 block max-w-8 rounded-sm border"
    />
  );
}

function BookingDataBox({ booking }: { booking: TBookingWithRelations }) {
  const {
    createdAt,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: {
      fullName: guestName,
      email,
      nationality,
      countryFlag,
      nationalID,
    },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="border-my-grey-100 overflow-hidden rounded-md border bg-white">
      <header className="bg-my-brand-500 text-my-indigo-100 flex flex-col gap-3 p-8 text-lg font-medium md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 text-lg font-semibold">
          <HiOutlineHomeModern className="h-8 w-8" />
          <p>
            {numNights} nights in Cabin{' '}
            <span className="font-sono ml-1 text-xl">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate!), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate!))
            ? 'Today'
            : formatDistanceFromNow(startDate!)}
          ) &mdash; {format(new Date(endDate!), 'EEE, MMM dd yyyy')}
        </p>
      </header>

      <section className="p-8 pt-12">
        <div className="text-my-grey-500 mb-4 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex gap-1">
            {countryFlag && (
              <Flag src={countryFlag} alt={`Flag of ${nationality}`} />
            )}
            <p className="text-my-grey-700 font-medium">
              {guestName} {numGuests! > 1 ? `+ ${numGuests! - 1} guests` : ''}
            </p>
          </div>
          <span className="hidden md:block">&bull;</span>
          <p>{email}</p>
          <span className="hidden md:block">&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={
              <HiOutlineChatBubbleBottomCenterText className="text-my-brand-600 h-6 w-6" />
            }
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem
          icon={<HiOutlineCheckCircle className="text-my-brand-600 h-6 w-6" />}
          label="Breakfast included?"
        >
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <div
          className={`mt-6 flex flex-col gap-2 rounded-md p-4 md:flex-row md:items-center md:justify-between ${
            isPaid
              ? 'bg-my-green-100 text-my-green-700'
              : 'bg-my-yellow-100 text-my-yellow-700'
          }`}
        >
          <div className="flex flex-col gap-4 py-2 md:flex-row md:items-center">
            <span className="flex items-center gap-2 font-medium">
              <HiOutlineCurrencyDollar className="h-6 w-6" />
              <span>Total price</span>
            </span>
            {formatCurrency(totalPrice!)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice!)} cabin + ${formatCurrency(extrasPrice!)} breakfast)`}
          </div>

          <p className="self-end text-sm font-semibold uppercase md:self-auto">
            {isPaid ? 'Paid' : 'Will pay at property'}
          </p>
        </div>
      </section>

      <footer className="text-my-grey-500 p-4 text-right text-sm">
        <p>Booked {format(new Date(createdAt), 'EEE, MMM dd yyyy, p')}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
