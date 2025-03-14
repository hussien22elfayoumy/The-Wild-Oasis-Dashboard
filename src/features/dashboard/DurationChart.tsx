// import styled from "styled-components";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

// const ChartBox = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 2.4rem 3.2rem;
//   grid-column: 3 / span 2;

//   & > *:first-child {
//     margin-bottom: 1.6rem;
//   }

//   & .recharts-pie-label-text {
//     font-weight: 600;
//   }
// `;

type ChartDate = { duration: string; value: number; color: string };

const startDataLight = [
  {
    duration: '1 night',
    value: 0,
    color: '#ef4444',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#f97316',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#eab308',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#84cc16',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#22c55e',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#14b8a6',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#3b82f6',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#a855f7',
  },
];

const startDataDark = [
  {
    duration: '1 night',
    value: 0,
    color: '#b91c1c',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#c2410c',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#a16207',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#4d7c0f',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#15803d',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#0f766e',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#1d4ed8',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#7e22ce',
  },
];

function prepareData(
  startData: ChartDate[],
  stays: TRecentStyes[]
): ChartDate[] {
  function incArrayValue(arr: ChartDate[], field: string) {
    return arr.map((obj: any) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights!;
      if (num === 1) return incArrayValue(arr, '1 night');
      if (num === 2) return incArrayValue(arr, '2 nights');
      if (num === 3) return incArrayValue(arr, '3 nights');
      if ([4, 5].includes(num)) return incArrayValue(arr, '4-5 nights');
      if ([6, 7].includes(num)) return incArrayValue(arr, '6-7 nights');
      if (num >= 8 && num <= 14) return incArrayValue(arr, '8-14 nights');
      if (num >= 15 && num <= 21) return incArrayValue(arr, '15-21 nights');
      if (num >= 21) return incArrayValue(arr, '21+ nights');
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

export default function DurationChart({
  confirmedStays,
}: {
  confirmedStays: TRecentStyes[] | undefined;
}) {
  const { darkMode } = useTheme();

  const startData = darkMode ? startDataDark : startDataLight;

  const data = prepareData(startData, confirmedStays!);

  return (
    <div className="sales-chart bg-my-grey-0 border-my-grey-200 col-span-2 col-start-3 flex flex-col gap-2.5 rounded-md p-6">
      <h2 className="text-xl font-semibold">Stay duration summary</h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="duration"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={2}
          >
            {data.map((data) => (
              <Cell key={data.color} fill={data.color} stroke={data.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-my-grey-0)',
              borderColor: 'var(--color-my-grey-200)',
              borderRadius: '12px',
            }}
            itemStyle={{
              color: 'var(--color-my-grey-700)',
              fontWeight: '500',
              fontSize: '16px',
            }}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            width={200}
            layout="vertical"
            iconSize={15}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
