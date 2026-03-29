import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");

  // 🔒 Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleCreate = () => {
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    console.log("Created:", name);
    setName("");
    onClose();
  };

  return (
    <>
      {/* 🔥 BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* 🔥 DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-xl 
        transform transition-transform duration-300 ease-in-out
        w-full sm:w-[380px] md:w-[420px]
        flex flex-col
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* 🔥 HEADER */}
        <div className="flex justify-between items-start p-4 sm:p-6 border-b shrink-0">
          <div>
            <h2 className="text-base sm:text-lg font-semibold">
              Create New Knowledge Base
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* 🔥 FORM (SCROLLABLE AREA) */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              placeholder="Description"
              className="w-full mt-1 border rounded-md px-3 py-2 text-sm h-24 resize-none outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="text-sm font-medium">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 transition">
              <option>Qdrant</option>
            </select>
          </div>

          {/* Embedding Model */}
          <div>
            <label className="text-sm font-medium">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 transition">
              <option>text-embedding-ada-002</option>
            </select>
          </div>
        </div>

        {/* 🔥 FOOTER (STICKY + SAFE FOR MOBILE) */}
        <div className="border-t p-4 sm:p-6 bg-white sticky bottom-0">
          <button
            onClick={handleCreate}
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-indigo-600 transition-all duration-200 hover:shadow-md"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}