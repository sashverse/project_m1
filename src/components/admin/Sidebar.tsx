import { useState } from "react";
import {
    Home,
    Users,
    Settings,
    Briefcase,
    Menu,
    ChevronLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Employees", icon: Users, path: "/employees" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "jobs", icon: Settings, path: "/jobs" },
];

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div
            className={`h-screen bg-[#0A2540] text-white flex flex-col transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-64"}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {!isCollapsed && (
                    <h1 className="text-lg font-semibold tracking-wide">
                        Sashverse
                    </h1>
                )}

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded-md hover:bg-[#12345a] transition"
                >
                    {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Menu */}
            <div className="flex-1 mt-4 space-y-2">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            onClick={() => navigate(item.path)}
                            key={index}
                            className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-[#12345a] transition rounded-md mx-2"
                        >
                            <Icon size={20} />

                            <span
                                className={`whitespace-nowrap transition-all duration-300 ${isCollapsed
                                    ? "opacity-0 w-0 overflow-hidden"
                                    : "opacity-100"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="py-6 pl-6 cursor-pointer">
                <button onClick={handleLogout}>Logout</button>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 text-sm">
                {!isCollapsed && <p>© 2026 Sashverse</p>}
            </div>
        </div>
    );
};

export default Sidebar;