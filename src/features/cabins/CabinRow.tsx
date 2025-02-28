import { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';

export default function CabinRow({ cabin }: { cabin: TCabins }) {
  const { isDeletingCabin, deleteCabinMutation } = useDeleteCabin();
  const { createCabinMutation, isCreatingCabin } = useCreateCabin();
  const isWorking = isCreatingCabin || isDeletingCabin;

  const [showForm, setShowForm] = useState(false);

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

        {cabin.discount ? (
          <td className="text-my-green-700 font-[Sono] font-medium">
            {formatCurrency(cabin.discount!)}
          </td>
        ) : (
          <td>&mdash;</td>
        )}
        <td className="font-medium">
          <button
            className="cursor-pointer disabled:text-red-500"
            onClick={() => deleteCabinMutation(cabin.id)}
            disabled={isWorking}
          >
            <HiTrash />
          </button>
          <button
            onClick={() => setShowForm((show) => !show)}
            className="cursor-pointer disabled:text-red-500"
            disabled={isWorking}
          >
            <HiPencil />
          </button>
          <button
            disabled={isWorking}
            className="cursor-pointer disabled:text-red-500"
            onClick={handleDuplicateCabin}
          >
            <HiSquare2Stack />
          </button>
        </td>
      </tr>
      {showForm && (
        <tr>
          <td>
            <CreateCabinForm cabinDefaultValues={cabin} />
          </td>
        </tr>
      )}
    </>
  );
}
