import { Outlet } from "react-router-dom"

import SideBar from "./components/NavBar"
import DashBoard from "./components/DashBoard"

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* sidebar */}
        <SideBar />
        {/* Outlet part */}
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
