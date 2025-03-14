export default function Stat({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  color: string;
}) {
  return (
    <div className="bg-my-grey-0 border-my-grey-200 flex items-center gap-2.5 rounded-md p-5">
      <div
        className={`flex size-14 items-center justify-center rounded-full ${color}`}
      >
        {icon}
      </div>
      <div>
        <h5 className="text-my-grey-500 mb-1 text-xs font-semibold tracking-wider uppercase">
          {title}
        </h5>
        <p className="text-2xl leading-none font-medium">{value}</p>
      </div>
    </div>
  );
}
