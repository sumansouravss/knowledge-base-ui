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
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen px-4 py-6 flex flex-col">
      
      {/* SECTION: MY PROJECTS */}
      <p className="text-xs text-gray-400 font-semibold mb-3 px-2">
        MY PROJECTS
      </p>

      <ul className="space-y-2">
        <SidebarItem icon={<Bot size={18} />} label="Agents" />
        <SidebarItem icon={<Boxes size={18} />} label="AI Models" />
        <SidebarItem icon={<Library size={18} />} label="Library" />
      </ul>

      {/* SECTION: ORCHESTRATOR */}
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

        {/* ACTIVE ITEM */}
        <SidebarItem
          icon={<Database size={18} />}
          label="Knowledge Base"
          active
        />

        <SidebarItem icon={<List size={18} />} label="Key Store" />
      </ul>

      {/* SECTION: ADMIN */}
      <p className="text-xs text-gray-400 font-semibold mt-6 mb-3 px-2">
        ADMIN
      </p>

      <ul className="space-y-2">
        <SidebarItem icon={<Building2 size={18} />} label="Tenant" />
        <SidebarItem icon={<Settings size={18} />} label="Integrations" />
      </ul>
      <li className="flex items-center gap-3 px-3 py-2 rounded-lg 
transition-all duration-200 hover:bg-gray-100 hover:shadow-sm"></li>
    </div>
  );
}

/* 🔁 Reusable Item Component */
function SidebarItem({ icon, label, active }) {
  return (
    <li
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
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