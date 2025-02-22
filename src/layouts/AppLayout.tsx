import { Outlet } from 'react-router-dom';
import Sidebar from '../components/global/SideBar';

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <header className="bg-my-grey-0 border-my-grey-200 border-b p-3 px-12">
        Header
      </header>
      <Sidebar />
      <main className="bg-my-grey-50 overflow-scroll p-10 pb-16">
        <div className="mx-auto flex max-w-[120rem] flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
