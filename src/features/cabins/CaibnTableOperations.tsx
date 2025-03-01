import Filter from '../../components/global/Filter';
import SortBy from '../../components/global/SortBy';

const cabinsFilterOptions = [
  { value: 'all', label: 'All' },
  { value: 'with-discount', label: 'With discount' },
  { value: 'no-discount', label: 'No discount' },
];

const cabinsSortOptions = [
  { value: 'name-asc', label: 'Sort by name (A-Z)' },
  { value: 'name-desc', label: 'Sort by name (Z-A)' },
  { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
  { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
  { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
  { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' },
];

export default function CaibnTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <Filter options={cabinsFilterOptions} filterField="discount" />
      <SortBy options={cabinsSortOptions} />
    </div>
  );
}
