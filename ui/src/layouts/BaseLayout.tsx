import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export const BaseLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
};
