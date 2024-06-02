import { Link, Outlet } from "react-router-dom";
import LogoutBtn from "../components/shared/auth/LogoutBtn";

function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-screen flex flex-col justify-between ">
        
         <ul className="menu p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/book-list"> Book List</Link> 
            </li>
            <li>
              <Link to="/dashboard/category-list"> Category List</Link> 
            </li>
            <li>
              <Link to="/dashboard/add-book"> Add book</Link> 
            </li>
          </ul>
         
         <LogoutBtn/>  
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
