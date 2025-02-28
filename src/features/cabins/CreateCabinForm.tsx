import Button from '../../components/global/Button';
import { FieldValues, useForm } from 'react-hook-form';

function CreateCabinForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      maxCapacity: '',
      regularPrice: '',
      discount: 0,
      description: '',
    },
  });

  function onSubmit(values: FieldValues) {
    console.log(values);
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
        <Button variation="primary">Create cabin</Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
