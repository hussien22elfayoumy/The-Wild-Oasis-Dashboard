import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatCurrency } from '../../utils/helpers';
import { deleteCabine } from '../../utils/cabins-api';
import toast from 'react-hot-toast';

export default function CabinRow({ cabin }: { cabin: TCabins }) {
  const queryClient = useQueryClient();
  const { isPending: isDeletingCabin, mutate } = useMutation({
    mutationFn: deleteCabine,
    onSuccess: () => {
      toast.success('Cabin Deleted Successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
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
        <button
          className="cursor-pointer disabled:text-red-500"
          onClick={() => mutate(cabin.id)}
          disabled={isDeletingCabin}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
