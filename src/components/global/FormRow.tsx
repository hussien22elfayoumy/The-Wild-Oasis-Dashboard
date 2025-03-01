interface IFormRowProps {
  children: React.ReactNode;
  error?: string | undefined;
  labelFor: string;
  labelName: string;
}
export default function FormRow({
  children,
  error,
  labelFor,
  labelName,
}: IFormRowProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={labelFor} className="font-medium">
        {labelName}
      </label>
      {children}
      {error && <p className="text-my-red-800 font-medium">{error}</p>}
    </div>
  );
}
