import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-[#181C14] text-white flex flex-row justify-center gap-[50px]">
        <div className="flex items-center">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex items-center">
          <NavLink to="/call">Call</NavLink>
        </div>
        <div className="flex items-center">
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </nav>
    </>
  );
};
