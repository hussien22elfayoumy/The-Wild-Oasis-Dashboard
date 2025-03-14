import Spinner from '../../components/global/Spinner';
import TodayItem from './TodayItem';
import { useTodayActivity } from './useTodayActivity';

export default function TodayActivity() {
  const { todayActivity, isLoading } = useTodayActivity();

  return (
    <div className="bg-my-grey-0 border-my-grey-100 col-span-2 flex flex-col gap-6 rounded-lg p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Today</h2>
      </div>

      {!isLoading ? (
        todayActivity?.length! > 0 ? (
          <ul className="today-list divide-my-grey-200 w-full divide-y-2 overflow-auto">
            {todayActivity?.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="mb-2 text-center text-lg font-medium">
            There is No activity for Today
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
