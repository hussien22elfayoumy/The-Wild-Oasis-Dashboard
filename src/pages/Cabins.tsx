import CabinTable from '../features/cabins/CabinTable';
import CaibnTableOperations from '../features/cabins/CaibnTableOperations';
import CreateCabin from '../features/cabins/CreateCabin';

function Cabins() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">All cabins</h1>
        <CaibnTableOperations />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="overflow-x-auto">
          <CabinTable />
        </div>

        <div className="mt-4">
          <CreateCabin />
        </div>
      </div>
    </>
  );
}
export default Cabins;
