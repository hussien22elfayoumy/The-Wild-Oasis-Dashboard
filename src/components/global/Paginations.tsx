import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Button from './Button';

const Pagination = () => {
  return (
    <div className="flex w-full items-center justify-between">
      {/* Pagination Info */}
      <p className="ml-2 text-sm">
        Showing <span className="font-semibold">1</span> to{' '}
        <span className="font-semibold">10</span> of{' '}
        <span className="font-semibold">100</span> results
      </p>

      {/* Pagination Buttons */}
      <div className="flex gap-2">
        {/* Previous Button */}
        <Button variation="pagination" size="medium">
          <HiChevronLeft />
          <span>Previous</span>
        </Button>

        {/* Page Numbers */}
        {/*  <button className="bg-my-brand-600 text-my-brand-50 hover:bg-my-brand-600 hover:text-my-brand-50 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300">
          <span>1</span>
        </button>
        <button className="bg-my-gray-50 hover:bg-my-brand-600 hover:text-my-brand-50 flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300">
          <span>2</span>
        </button> */}

        {/* Next Button */}
        <Button variation="pagination">
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
