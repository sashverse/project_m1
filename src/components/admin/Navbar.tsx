import { Bell, Search, User } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

            {/* Left Section */}
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold text-[#0A2540]">
                    Welcome to Santhosh
                </h1>

                {/* Search */}
                <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none ml-2 text-sm w-full"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Notifications */}
                <div className="relative cursor-pointer">
                    <Bell size={20} className="text-gray-600" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        3
                    </span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 bg-[#0A2540] text-white flex items-center justify-center rounded-full">
                        <User size={18} />
                    </div>

                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-gray-700">
                            Santhosh
                        </p>
                        <p className="text-xs text-gray-500">
                            Admin
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;