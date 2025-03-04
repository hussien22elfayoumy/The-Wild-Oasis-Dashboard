import Filter from '../../components/global/Filter';
import SortBy from '../../components/global/SortBy';

const bookingsFilterOptions = [
  { value: 'all', label: 'All' },
  { value: 'checked-out', label: 'Checked out' },
  { value: 'checked-in', label: 'Checked in' },
  { value: 'unconfirmed', label: 'Unconfirmed' },
];

const bookingsSortOptions = [
  { value: 'startDate-desc', label: 'Sort by date (recent first)' },
  { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
  {
    value: 'totalPrice-desc',
    label: 'Sort by amount (high first)',
  },
  { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
];

export default function BookingsTableOperations() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <Filter options={bookingsFilterOptions} filterField="status" />
      <SortBy options={bookingsSortOptions} />
    </div>
  );
}
