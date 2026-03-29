export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border px-4 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}