import { useSearchParams } from 'react-router-dom';
import Button from './Button';

interface IFilterProps {
  filterField: string;
  options: { value: string; label: string }[];
}

export default function Filter({ options, filterField }: IFilterProps) {
  const [searchParams, setSearhParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearhParams(searchParams);
  }

  return (
    <div className="bg-my-grey-0 border-my-grey-100 flex gap-1 rounded-sm border p-1 shadow-sm">
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleClick(option.value)}
          size="medium"
          variation="filter"
          active={searchParams.get(filterField) === option.value}
        >
          {option.value}
        </Button>
      ))}
    </div>
  );
}
