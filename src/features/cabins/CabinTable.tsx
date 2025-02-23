import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../utils/cabins-api';
import { formatCurrency } from '../../utils/helpers';

export default function CabinTable() {
  const { data: cabinData } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  console.log(cabinData);

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
          {cabinData?.map((cabin) => (
            <tr
              key={cabin.id}
              className="border-my-grey-200 grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-x-4 border-b px-6 py-3.5 last:border-b-0"
            >
              <td>
                <img
                  src={cabin.image ?? ''}
                  alt={cabin.name ?? ''}
                  className="block aspect-[3/2] w-16 -translate-x-1.5 scale-150 object-cover object-center"
                />
              </td>

              <td className="text-my-grey-600 font-[Sono] text-base font-semibold">
                {cabin.name}
              </td>

              <td className="text-my-grey-600 font-[Sono] text-base font-semibold">
                fits up to {cabin.maxCapacity} guests
              </td>

              <td className="font-[Sono] font-semibold">
                {formatCurrency(cabin.regularPrice!)}
              </td>

              <td className="text-my-green-700 font-[Sono] font-medium">
                {formatCurrency(cabin.discount!)}
              </td>
              <td className="font-medium">
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
}
