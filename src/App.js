import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex">

        {/* SIDEBAR */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4 sm:p-6">
          <Home />
        </div>

      </div>
    </div>
  );
}

export default App;