import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function SalesChart({
  bookings,
  numDayes,
}: {
  bookings: TRecentBookins[];
  numDayes: number;
}) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDayes - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.createdAt)))
        .reduce((acc, curr) => acc + curr.totalPrice!, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.createdAt)))
        .reduce((acc, curr) => acc + curr.extrasPrice!, 0),
    };
  });

  return (
    <div className="sales-chart bg-my-grey-0 border-my-grey-200 col-span-full flex flex-col gap-2.5 rounded-md p-5">
      <h2 className="text-xl font-semibold">
        {`Sales from ${format(allDates.at(0) as unknown as string, 'MMM dd yyy')} - ${format(allDates.at(-1) as unknown as string, 'MMM dd yyyy')}`}
      </h2>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: 'var(--color-my-grey-700)' }}
            tickLine={{ stroke: 'var(--color-my-grey-700)' }}
          />
          <YAxis
            unit="$"
            tick={{ fill: 'var(--color-my-grey-700)' }}
            tickLine={{ stroke: 'var(--color-my-grey-700)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-my-grey-50)',
              borderColor: 'var(--color-my-grey-200)',
            }}
          />
          <CartesianGrid strokeDasharray={4} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="var(--color-chart-strock-1)"
            fill="var(--color-chart-fill-1)"
            name="Total Sales"
            unit="$"
            strokeWidth={1.5}
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke="var(--color-chart-strock-2)"
            fill="var(--color-chart-fill-2)"
            name="Extras Sales"
            unit="$"
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
