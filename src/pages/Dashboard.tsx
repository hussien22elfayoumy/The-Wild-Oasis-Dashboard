import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl leading-relaxed font-semibold">Dashboard</h1>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}
export default Dashboard;
