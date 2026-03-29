import {
  Bot,
  Boxes,
  Library,
  Upload,
  Monitor,
  List,
  Zap,
  Briefcase,
  PlaySquare,
  Shield,
  Database,
  Building2,
  Settings,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* 🔥 BACKDROP (ONLY MOBILE) */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* 🔥 SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r z-50 
        transform transition-transform duration-300 ease-in-out
        flex flex-col overflow-y-auto

        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="px-4 py-6">
           {/* 🔥 HEADER (ADD THIS) */}
        <div className="flex items-center justify-between px-4 py-4 border-b md:hidden">
          <h2 className="font-semibold text-gray-800">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6"></div>

          {/* MY PROJECTS */}
          <p className="text-xs text-gray-400 font-semibold mb-3 px-2">
            MY PROJECTS
          </p>

          <ul className="space-y-2">
            <SidebarItem icon={<Bot size={18} />} label="Agents" />
            <SidebarItem icon={<Boxes size={18} />} label="AI Models" />
            <SidebarItem icon={<Library size={18} />} label="Library" />
          </ul>

          {/* ORCHESTRATOR */}
          <p className="text-xs text-gray-400 font-semibold mt-6 mb-3 px-2">
            ORCHESTRATOR
          </p>

          <ul className="space-y-2">
            <SidebarItem icon={<Upload size={18} />} label="Published" />
            <SidebarItem icon={<Monitor size={18} />} label="Machines" />
            <SidebarItem icon={<List size={18} />} label="Queues" />
            <SidebarItem icon={<Zap size={18} />} label="Triggers" />
            <SidebarItem icon={<Briefcase size={18} />} label="Jobs" />
            <SidebarItem icon={<PlaySquare size={18} />} label="Executions" />
            <SidebarItem icon={<Shield size={18} />} label="Vault" />

            <SidebarItem
              icon={<Database size={18} />}
              label="Knowledge Base"
              active
            />

            <SidebarItem icon={<List size={18} />} label="Key Store" />
          </ul>

          {/* ADMIN */}
          <p className="text-xs text-gray-400 font-semibold mt-6 mb-3 px-2">
            ADMIN
          </p>

          <ul className="space-y-2">
            <SidebarItem icon={<Building2 size={18} />} label="Tenant" />
            <SidebarItem icon={<Settings size={18} />} label="Integrations" />
          </ul>

        </div>
      </div>
    </>
  );
}

/* 🔁 REUSABLE ITEM */
function SidebarItem({ icon, label, active }) {
  return (
    <li
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
      transition-all duration-200 hover:shadow-sm

      ${
        active
          ? "bg-indigo-100 text-primary font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </li>
  );
}