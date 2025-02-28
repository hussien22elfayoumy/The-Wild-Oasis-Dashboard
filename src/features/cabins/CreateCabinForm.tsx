import Button from '../../components/global/Button';

function CreateCabinForm() {
  return (
    <form className="space-y-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <input
          type="text"
          id="name"
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
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
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          className="border-my-grey-200 bg-my-grey-0 rounded-md border p-2 shadow"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <textarea
          id="description"
          defaultValue=""
          className="border-my-grey-200 bg-my-grey-0 min-h-20 rounded-md border p-2 shadow"
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
        <Button variation="secondary">Cancel</Button>
        <Button variation="primary">Edit cabin</Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
