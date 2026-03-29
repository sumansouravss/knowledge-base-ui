import { useState } from "react";
import Card from "../components/cards/Card";
import Modal from "../components/modal/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 py-4">

      {/* 🔥 TOP SECTION */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Knowledge Base
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          
          {/* SEARCH */}
          <input
            placeholder="Search..."
            className="border px-4 py-2 rounded-md text-sm outline-none w-full sm:w-[200px] md:w-[250px]"
          />

          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-600 transition-all duration-200 hover:shadow-md w-full sm:w-auto"
          >
            + Create New
          </button>

        </div>
      </div>

      {/* 🔥 CARDS CONTAINER */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border shadow-sm">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} />
          ))}
        </div>

      </div>

      {/* 🔥 FOOTER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 text-sm text-gray-500">
        
        <p>6 rows</p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span>Rows per page</span>

          <select className="border px-2 py-1 rounded">
            <option>10</option>
          </select>

          <span>page 1 of 1</span>

          <div className="flex gap-2">
            <button>{"<<"}</button>
            <button>{"<"}</button>
            <button>{">"}</button>
            <button>{">>"}</button>
          </div>
        </div>

      </div>

      {/* 🔥 MODAL */}
      <Modal isOpen={open} onClose={() => setOpen(false)} />

    </div>
  );
}