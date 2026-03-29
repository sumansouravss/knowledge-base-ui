export default function Card() {
  return (
    <div
      className="border rounded-xl bg-white 
      p-4 sm:p-5 
      transition-all duration-200 
      hover:shadow-md hover:-translate-y-1"
    >
      
      {/* TOP */}
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base break-words">
          Test
        </h3>

        <span className="text-gray-400 cursor-pointer shrink-0">
          ⋮
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* FOOTER */}
      <div className="border-t mt-4 pt-3 text-xs text-gray-400">
        Created On: 14/07/2025
      </div>
    </div>
  );
}