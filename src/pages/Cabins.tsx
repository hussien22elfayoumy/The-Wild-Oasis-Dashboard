import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">All cabins</h1>
        <p>Filter / Sort</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <CabinTable />

        <CreateCabinForm />
      </div>
    </>
  );
}
export default Cabins;
