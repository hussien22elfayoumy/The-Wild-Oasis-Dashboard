import CabinTable from '../features/cabins/CabinTable';
import CaibnTableOperations from '../features/cabins/CaibnTableOperations';
import CreateCabin from '../features/cabins/CreateCabin';

function Cabins() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">All cabins</h1>
        <CaibnTableOperations />
      </div>

      <div className="flex flex-col gap-1.5">
        <CabinTable />

        <div className="mt-4 self-end">
          <CreateCabin />
        </div>
      </div>
    </>
  );
}
export default Cabins;
