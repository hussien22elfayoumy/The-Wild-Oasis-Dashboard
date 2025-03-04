import { HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import UpdateCabin from './UpdateCabin';
import { useCreateCabin } from './useCreateCabin';
import { useDeleteCabin } from './useDeleteCabin';
import Button from '../../components/global/Button';

export default function CabinRow({ cabin }: { cabin: TCabins }) {
  const { isDeletingCabin, deleteCabinMutation } = useDeleteCabin();
  const { createCabinMutation, isCreatingCabin } = useCreateCabin();
  const isWorking = isCreatingCabin || isDeletingCabin;

  function handleDuplicateCabin() {
    createCabinMutation({
      name: `Copy of ${cabin.name!}`,
      maxCapacity: cabin.maxCapacity!,
      regularPrice: cabin.regularPrice!,
      discount: cabin.discount!,
      description: cabin.description!,
      image: cabin.image!,
    });
  }
  return (
    <>
      <tr
        key={cabin.id}
        className="border-my-grey-200 grid grid-cols-[6.25rem_15rem_18rem_8.5rem_8.5rem_8.5rem] items-center gap-x-4 border-b px-6 py-3.5 last:border-b-0"
      >
        <td className="w-16">
          <img
            src={cabin.image ?? ''}
            alt={cabin.name ?? ''}
            className="aspect-[3/2]-translate-x-1.5 border-my-grey-400 block scale-150 border object-cover object-center"
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

        {cabin.discount ? (
          <td className="text-my-green-700 font-[Sono] font-medium">
            {formatCurrency(cabin.discount!)}
          </td>
        ) : (
          <td>&mdash;</td>
        )}
        <td className="flex items-center gap-1">
          <UpdateCabin disable={isWorking} cabin={cabin} />
          <Button
            disabled={isWorking}
            size="small"
            onClick={handleDuplicateCabin}
          >
            <HiSquare2Stack className="size-4" />
          </Button>

          <Button
            variation="danger"
            size="small"
            onClick={() => deleteCabinMutation(cabin.id)}
            disabled={isWorking}
          >
            <HiTrash className="size-4" />
          </Button>
        </td>
      </tr>
    </>
  );
}
