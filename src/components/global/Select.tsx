interface ISelectProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  type: string;
  value: string;
}
export default function Select({
  options,
  onChange,
  type,
  value,
}: ISelectProps) {
  return (
    <select
      value={value}
      className={`bg-my-grey-0 rounded-sm px-4 py-3 text-sm font-medium shadow-sm ${
        type === 'white' ? '!border-my-grey-100' : '!border-my-grey-300'
      }`}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
