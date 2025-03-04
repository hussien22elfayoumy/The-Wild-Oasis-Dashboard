import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Button from './Button';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const RES_PER_PAGE = 10;

const Pagination = ({ count }: { count: number }) => {
  const [searchParams, setSearhParams] = useSearchParams();

  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pagesCount = Math.ceil(count / RES_PER_PAGE);

  function nextPage() {
    const next = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set('page', String(next));
    setSearhParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', String(prev));
    setSearhParams(searchParams);
  }

  useEffect(() => {
    if (currentPage > pagesCount) {
      searchParams.set('page', String(pagesCount));
      setSearhParams(searchParams);
    }

    if (currentPage < 1) {
      searchParams.set('page', String(1));
      setSearhParams(searchParams);
    }
  }, []);

  if (pagesCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between px-4 py-2">
      <p className="ml-2 text-sm">
        Showing{' '}
        <span className="font-semibold">
          {(currentPage - 1) * RES_PER_PAGE + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold">
          {currentPage === pagesCount ? count : currentPage * RES_PER_PAGE}
        </span>{' '}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2">
        <Button
          disabled={currentPage === 1}
          onClick={prevPage}
          variation="pagination"
          size="medium"
        >
          <HiChevronLeft />
          <span>Previous</span>
        </Button>

        {/*  <button className="bg-my-brand-600 text-my-brand-50 hover:bg-my-brand-600 hover:text-my-brand-50 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300">
          <span>1</span>
        </button>
        <button className="bg-my-gray-50 hover:bg-my-brand-600 hover:text-my-brand-50 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300">
          <span>2</span>
        </button> */}

        <Button
          disabled={currentPage === pagesCount}
          onClick={nextPage}
          variation="pagination"
        >
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
