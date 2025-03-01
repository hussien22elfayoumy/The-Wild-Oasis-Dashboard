import Filter from '../../components/global/Filter';

const cabinsFilterOptions = [
  { value: 'all', label: 'All' },
  { value: 'with-discount', label: 'With discount' },
  { value: 'no-discount', label: 'No discount' },
];

export default function CaibnTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <Filter options={cabinsFilterOptions} filterField="discount" />
    </div>
  );
}
