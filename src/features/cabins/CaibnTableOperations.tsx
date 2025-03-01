import { useSearchParams } from 'react-router-dom';
import Button from '../../components/global/Button';

export default function CaibnTableOperations() {
  const [searchParams, setSearhParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set('discount', value);
    setSearhParams(searchParams);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="bg-my-grey-0 border-my-grey-100 flex gap-1 rounded-sm border p-1 shadow-sm">
        <Button
          onClick={() => handleClick('all')}
          size="medium"
          variation="filter"
          active={
            searchParams.get('discount') === 'all' ||
            searchParams.get('discount') === null
          }
        >
          All
        </Button>
        <Button
          onClick={() => handleClick('no-discount')}
          size="medium"
          variation="filter"
          active={searchParams.get('discount') === 'no-discount'}
        >
          No discount
        </Button>
        <Button
          onClick={() => handleClick('with-discount')}
          size="medium"
          variation="filter"
          active={searchParams.get('discount') === 'with-discount'}
        >
          with discount
        </Button>
      </div>
    </div>
  );
}
