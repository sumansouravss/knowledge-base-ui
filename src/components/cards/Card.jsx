export default function Card() {
  return (
    <div className="border rounded-xl p-5 bg-white hover:shadow-sm transition">
      
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">Test</h3>
        <span className="text-gray-400 cursor-pointer">⋮</span>
      </div>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="border-t mt-4 pt-3 text-xs text-gray-400">
        Created On: 14/07/2025
      </div>
    </div>
  );
}