import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="p-3 bg-gray-100">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5] text-white shadow-md">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
              <span className="text-sm font-bold">a</span>
            </div>
            <h1 className="font-semibold text-lg">Workspace</h1>
          </div>

          {/* Workspace Dropdown */}
          <button className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm hover:bg-white/20 transition">
            Workspace 1
            <ChevronDown size={16} />
          </button>
        </div>

        {/* CENTER SEARCH */}
        <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg w-[350px]">
          <Search size={16} className="text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm flex-1 placeholder-gray-300"
          />
          <span className="text-xs text-gray-300">⌘K</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Bell size={18} className="cursor-pointer" />

          <div className="w-8 h-8 bg-white text-indigo-600 flex items-center justify-center rounded-full font-semibold text-sm">
            GK
          </div>
        </div>
      </div>
    </div>
  );
}