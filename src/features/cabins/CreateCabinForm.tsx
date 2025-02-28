import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import {
  createCabinSchema,
  TCreateCabin,
} from '../../types/schema/create-cabin-schema';
import { createEditCabin } from '../../utils/cabins-api';

function CreateCabinForm({
  cabinDefaultValues,
}: {
  cabinDefaultValues?: TCabins;
}) {
  const isEditMode = Boolean(cabinDefaultValues);
  const defaultValues = cabinDefaultValues
    ? {
        name: cabinDefaultValues.name!,
        maxCapacity: cabinDefaultValues.maxCapacity!,
        regularPrice: cabinDefaultValues.regularPrice!,
        discount: cabinDefaultValues.discount!,
        description: cabinDefaultValues.description!,
        image: cabinDefaultValues.image!,
      }
    : { discount: 0 };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<TCreateCabin>({
    resolver: zodResolver(createCabinSchema),
    defaultValues,
  });

  const queryClient = useQueryClient();
  const { mutate: mutateCreateCabin, isPending: isCreatingCabin } = useMutation(
    {
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success('Cabin created successfully');
        queryClient.invalidateQueries({ queryKey: ['cabins'] });
        // reset();
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );

  const { mutate: mutateEditCabin, isPending: isUpdatingCabin } = useMutation({
    mutationFn: ({
      newCabinData,
      id,
    }: {
      newCabinData: TCreateCabin;
      id: number;
    }) => createEditCabin(newCabinData, id),

    onSuccess: () => {
      toast.success('Cabin updated successfully');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(values: TCreateCabin) {
    const image =
      typeof values.image === 'string' ? values.image : values.image[0];

    if (isEditMode)
      mutateEditCabin({
        newCabinData: { ...values, image },
        id: cabinDefaultValues?.id!,
      });
    else mutateCreateCabin({ ...values, image });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-my-grey-0 space-y-3 px-6 py-8"
    >
      <FormRow
        labelName="Cabin name"
        labelFor="name"
        error={errors?.name?.message}
      >
        <input
          type="text"
          id="name"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('name')}
        />
      </FormRow>

      <FormRow
        labelName="Maximum capacity"
        labelFor="maxCapacity"
        error={errors?.maxCapacity?.message}
      >
        <input
          type="number"
          id="maxCapacity"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('maxCapacity')}
        />
      </FormRow>

      <FormRow
        labelName="Regular price"
        labelFor="regularPrice"
        error={errors?.regularPrice?.message}
      >
        <input
          type="number"
          id="regularPrice"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('regularPrice')}
        />
      </FormRow>

      <FormRow
        labelName="Discount"
        labelFor="discount"
        error={errors?.discount?.message}
      >
        <input
          type="number"
          id="discount"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
          {...register('discount')}
        />
      </FormRow>

      <FormRow
        labelName="Description for website"
        labelFor="description"
        error={errors?.description?.message}
      >
        <textarea
          id="description"
          className="border-my-grey-200 bg-my-grey-0 min-h-20 rounded-md border p-2 shadow"
          {...register('description')}
        />
      </FormRow>

      <FormRow
        labelName="Cabin photo"
        labelFor="image"
        error={errors?.image?.message as string}
      >
        <input
          type="file"
          id="image"
          accept="image/*"
          className="border-my-grey-200 bg-my-grey-0 file:text-my-brand-50 file:bg-my-brand-600 hover:file:bg-my-brand-700 rounded-md border shadow file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:px-4 file:py-2 file:font-medium"
          {...register('image')}
        />
      </FormRow>

      <div className="flex justify-end gap-3 pt-3">
        <Button type="reset" variation="secondary">
          Cancel
        </Button>
        <Button
          disabled={isCreatingCabin || isUpdatingCabin}
          variation="primary"
        >
          {isEditMode ? 'Edit Cabin' : 'Create Cabin'}
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
