import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* HEADER */}
      <Header />

      {/* MAIN BODY */}
      <div className="flex">
        
        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT */}
        <div className="flex-1 px-6 py-4">
          <Home />
        </div>

      </div>
    </div>
  );
}

export default App;