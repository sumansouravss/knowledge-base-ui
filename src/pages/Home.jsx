import { useState } from "react";
import Card from "../components/cards/Card";
import Modal from "../components/modal/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* TOP SECTION */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Knowledge Base
        </h2>

        <div className="flex items-center gap-3">
          
          {/* Search */}
          <input
            placeholder="Search..."
            className="border px-4 py-2 rounded-md text-sm outline-none"
          />

          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-600 transition"
          >
            + Create New
          </button>

        </div>
      </div>

      {/* CARDS CONTAINER */}
      <div className="bg-white p-6 rounded-xl border">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <p>6 rows</p>

        <div className="flex items-center gap-4">
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

      {/* MODAL */}
      <Modal isOpen={open} onClose={() => setOpen(false)} />

    </div>
  );
}