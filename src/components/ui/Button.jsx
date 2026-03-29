export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white px-4 py-2 rounded-md text-sm 
      hover:bg-indigo-600 transition ${className}`}
    >
      <button className="bg-primary text-white px-4 py-2 rounded-md 
transition-all duration-200 hover:shadow-md hover:bg-indigo-600"></button>
      {children}
    </button>
  );
}