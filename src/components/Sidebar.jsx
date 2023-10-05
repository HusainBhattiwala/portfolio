"use client";

import Logo from "./sidebar/Logo";
import Menu from "./sidebar/Menu";
import { useMenu } from "./Provider";

const Sidebar = () => {
  const { showMenu } = useMenu();
  return (
    <aside
      className={`${
        showMenu ? "flex" : "hidden"
      } lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
    >
      {/* sidebar container */}
      <div className='toggle flex flex-col lg:m-5 w-full'>
        <Logo />
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
