import { useSearchParams } from 'react-router-dom';
import Select from './Select';

interface ISortByProps {
  options: { value: string; label: string }[];
}
export default function SortBy({ options }: ISortByProps) {
  const [searchParams, setSearhParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';
  function handleChange(value: string) {
    searchParams.set('sortBy', value);
    setSearhParams(searchParams);
  }
  return (
    <Select
      options={options}
      onChange={handleChange}
      value={sortBy}
      type="white"
    />
  );
}
