function PageNotFound() {
  // const moveBack = useMoveBack();

  return (
    <main className="bg-my-grey-50 flex h-screen items-center justify-center p-12">
      <div className="border-my-grey-100 max-w-6xl flex-1 rounded-lg border bg-white p-12 text-center">
        <h1 className="mb-8 text-3xl leading-relaxed font-semibold">
          The page you are looking for could not be found 😢
        </h1>
        <button
          // onClick={moveBack}
          className="rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}
export default PageNotFound;
