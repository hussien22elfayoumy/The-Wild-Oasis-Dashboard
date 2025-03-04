import Uploader from '../../data/Uploader';
import Logo from './Logo';
import MainNav from './MainNav';

export default function Sidebar() {
  return (
    <aside className="bg-my-grey-0 border-my-grey-200 row-span-full flex flex-col gap-8 border-r p-8">
      <Logo />
      <MainNav />
      {/*  TODO: Remove later */}
      <Uploader />
    </aside>
  );
}
