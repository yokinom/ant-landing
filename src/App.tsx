import { Outlet, useLocation, useNavigate } from "react-router-dom"

import SideBar from "./components/NavBar"
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/repositories");
    }
  }, [pathname, navigate])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">

        <div className="hidden md:block col-span-1 border-r">
          <SideBar />
        </div>

        <div className="col-span-1 md:col-span-3 p-4">
          <div className="md:p-6">
            <div className="border bg-[#FAFAFA] rounded-lg shadow-sm w-full">
              <Outlet />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
