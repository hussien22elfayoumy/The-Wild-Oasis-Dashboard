import { useSearchParams } from 'react-router-dom';
import Spinner from '../../components/global/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Empty from '../../components/global/Empty';

export default function CabinTable() {
  const [searchParmas] = useSearchParams();
  const { isLoading, cabinsData } = useCabins();
  // TODO: Cabin filterations
  const filter = searchParmas.get('discount') || 'all';

  let filterdCabins;

  if (filter === 'all') filterdCabins = cabinsData;

  if (filter === 'with-discount')
    filterdCabins = cabinsData?.filter((cabin) => cabin.discount! > 0);

  if (filter === 'no-discount')
    filterdCabins = cabinsData?.filter((cabin) => cabin.discount === 0);

  // TODO: cabin sort by

  const sortBy = searchParmas.get('sortBy') || 'name-asc';

  const [field, direction] = sortBy.split('-') as [
    'name' | 'regularPrice' | 'maxCapacity',
    'asc' | 'desc',
  ];
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins = filterdCabins?.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue == null || bValue == null) return 0;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return (aValue - bValue) * modifier;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue) * modifier;
    }

    return 0;
  });

  if (!cabinsData?.length) return <Empty resourceName="Cabins" />;

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center pt-20">
        <Spinner />
      </div>
    );
  }

  return (
    <table className="bg-my-grey-0 border-my-grey-200 mx-auto overflow-hidden rounded-lg border text-left text-sm">
      <thead className="w-full">
        <tr className="border-my-grey-200 bg-my-grey-50 text-my-grey-600 grid grid-cols-[6.25rem_15rem_18rem_8.5rem_8.5rem_8.5rem] items-center gap-x-4 border-b p-4 px-6 font-semibold tracking-wider uppercase">
          <td></td>
          <td>Cabin</td>
          <td>Capacity</td>
          <td>Price</td>
          <td>Discount</td>
          <td></td>
        </tr>
      </thead>
      <tbody className="w-full">
        <>
          {sortedCabins?.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </>
      </tbody>
    </table>
  );
}
