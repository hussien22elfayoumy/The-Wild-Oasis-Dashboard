import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../utils/cabins-api';
import CabinRow from './CabinRow';
import Spinner from '../../components/global/Spinner';

export default function CabinTable() {
  const { data: cabinData, isLoading } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center pt-20">
        <Spinner />
      </div>
    );
  }

  return (
    <table className="bg-my-grey-0 border-my-grey-200 overflow-hidden rounded-lg border text-left text-sm">
      <thead className="w-full">
        <tr className="border-my-grey-200 bg-my-grey-50 text-my-grey-600 grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-4 border-b p-4 px-6 font-semibold tracking-wider uppercase">
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
          {cabinData?.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
        </>
      </tbody>
    </table>
  );
}
