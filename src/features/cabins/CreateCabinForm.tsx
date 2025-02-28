import Button from '../../components/global/Button';

function CreateCabinForm() {
  return (
    <form className="space-y-4">
      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <input
          type="text"
          id="name"
          className="border-grey-300 bg-grey-0 rounded-sm border p-2 shadow-sm"
        />
      </div>

      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          className="border-grey-300 bg-grey-0 rounded-sm border p-2 shadow-sm"
        />
      </div>

      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <input
          type="number"
          id="regularPrice"
          className="border-grey-300 bg-grey-0 rounded-sm border p-2 shadow-sm"
        />
      </div>

      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          className="border-grey-300 bg-grey-0 rounded-sm border p-2 shadow-sm"
        />
      </div>

      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <textarea
          id="description"
          defaultValue=""
          className="border-grey-300 bg-grey-0 rounded-sm border p-2 shadow-sm"
        />
      </div>

      <div className="border-grey-100 grid grid-cols-[24rem,1fr,1.2fr] items-center gap-6 border-b py-3">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="border-grey-300 bg-grey-0 file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-sm border p-2 shadow-sm file:mr-4 file:cursor-pointer file:rounded-sm file:border-0 file:px-4 file:py-2 file:font-medium"
        />
      </div>

      <div className="flex justify-end gap-3 py-3">
        <Button>Cancel</Button>
        <Button>Edit cabin</Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
