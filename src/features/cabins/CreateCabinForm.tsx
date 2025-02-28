import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '../../components/global/Button';
import { FieldValues, useForm } from 'react-hook-form';
import { createCabin } from '../../utils/cabins-api';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createCabinSchema,
  TCreateCabin,
} from '../../types/schema/create-cabin-schema';

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateCabin>({
    resolver: zodResolver(createCabinSchema),
  });
  const queryClient = useQueryClient();
  const { mutate, isPending: isCreatingCabin } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin created successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(values: FieldValues) {
    mutate(values);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-my-grey-0 space-y-3 px-6 py-8"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <input
          type="text"
          id="name"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-my-red-700">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('maxCapacity')}
        />
        {errors.maxCapacity && (
          <p className="text-my-red-700">{errors.maxCapacity.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <input
          type="number"
          id="regularPrice"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('regularPrice')}
        />
        {errors.regularPrice && (
          <p className="text-my-red-700">{errors.regularPrice.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('discount')}
        />
        {errors.discount && (
          <p className="text-my-red-700">{errors.discount.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <textarea
          id="description"
          className="border-my-grey-200 bg-my-grey-0 min-h-20 rounded-md border p-2 shadow"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-my-red-700">{errors.description.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="border-my-grey-200 bg-my-grey-0 file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-md border shadow file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:px-4 file:py-2 file:font-medium"
        />
      </div>

      <div className="flex justify-end gap-3 pt-3">
        <Button
          type="reset"
          onClick={() => console.log('hello')}
          variation="secondary"
        >
          Cancel
        </Button>
        <Button disabled={isCreatingCabin} variation="primary">
          Create cabin
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
