import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../components/global/Button';
import FormRow from '../../components/global/FormRow';
import {
  createCabinSchema,
  TCreateCabin,
} from '../../types/schema/create-cabin-schema';
import { useCreateCabin } from './useCreateCabin';
import { useUpdateCabin } from './useUpdateCabin';
import { useState } from 'react';

function CreateCabinForm({
  cabinDefaultValues,
}: {
  cabinDefaultValues?: TCabins;
}) {
  const { isCreatingCabin, createCabinMutation } = useCreateCabin();
  const { isUpdatingCabin, updateCabinMutation } = useUpdateCabin();
  const [imageError, setImageError] = useState('');

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
    reset,
    formState: { errors },
  } = useForm<TCreateCabin>({
    resolver: zodResolver(createCabinSchema),
    defaultValues,
  });

  function onSubmit(values: TCreateCabin) {
    console.log(values);
    setImageError('');
    if (!values.image.length || !values.image) {
      setImageError('Cabin Image is Require');
      return;
    }

    const image =
      typeof values.image === 'string' ? values.image : values.image[0];

    if (isEditMode)
      updateCabinMutation({
        newCabinData: { ...values, image },
        id: cabinDefaultValues?.id!,
      });
    else
      createCabinMutation(
        { ...values, image },
        {
          onSuccess: () => reset(),
        }
      );
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

      <FormRow labelName="Cabin photo" labelFor="image" error={imageError}>
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
          {isEditMode ? 'Update Cabin' : 'Create new Cabin'}
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
