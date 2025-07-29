import { NavLink } from "react-router";

const routes = [{ name: "Home", path: "/" }];

const Sidebar = () => {
  const renderNavOptions = routes.map((route) => (
    <li key={route.name} className="shadow-accent shadow-md">
      <NavLink
        to={route.path}
        className="hover:bg-secondary active:bg-secondary block w-full p-4"
      >
        {route.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={`accented-bg translate-all w-[20rem] select-none`}>
      <h2 className="border-b-2 p-4 text-3xl font-semibold">Modules</h2>
      <nav aria-label="Main Navigation" className="h-full">
        <ul className="mb-4 flex flex-col gap-1 py-4 text-2xl">
          {renderNavOptions}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
