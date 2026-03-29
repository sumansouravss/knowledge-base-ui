import { Bell, Search, ChevronDown, Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <div className="p-2 sm:p-3 bg-gray-100">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5] text-white shadow-md">

        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* 🔥 MOBILE MENU */}
          <button
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu size={20} />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
              <span className="text-sm font-bold">a</span>
            </div>
            <h1 className="font-semibold text-sm sm:text-lg">
              Workspace
            </h1>
          </div>

          {/* WORKSPACE DROPDOWN (HIDE ON SMALL MOBILE) */}
          <button className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm hover:bg-white/20 transition-all duration-200">
            Workspace 1
            <ChevronDown size={16} />
          </button>
        </div>

        {/* 🔥 CENTER SEARCH */}
        <div className="hidden md:flex items-center bg-white/10 px-4 py-2 rounded-lg w-[300px] lg:w-[350px] transition-all duration-200">
          <Search size={16} className="text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm flex-1 placeholder-gray-300"
          />
          <span className="text-xs text-gray-300 hidden lg:block">⌘K</span>
        </div>

        {/* 🔥 RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Bell size={18} className="cursor-pointer" />

          <div className="w-8 h-8 bg-white text-indigo-600 flex items-center justify-center rounded-full font-semibold text-sm">
            GK
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE SEARCH (BELOW HEADER) */}
      <div className="mt-2 px-2 md:hidden">
        <div className="flex items-center bg-white border px-3 py-2 rounded-md">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            placeholder="Search..."
            className="outline-none text-sm flex-1"
          />
        </div>
      </div>
    </div>
  );
}