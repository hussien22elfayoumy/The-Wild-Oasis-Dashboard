import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="bg-my-grey-50 flex h-screen items-center justify-center p-12">
      <div className="border-my-grey-100 max-w-6xl flex-1 rounded-lg border bg-white p-12 text-center">
        <h1 className="mb-8 text-3xl leading-relaxed font-semibold">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="bg-my-brand-500 hover:bg-my-brand-600 cursor-pointer rounded-lg px-6 py-3 text-lg font-semibold text-white transition-colors"
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}
export default PageNotFound;
