import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";

const DashboardLayout = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashboardLayout;