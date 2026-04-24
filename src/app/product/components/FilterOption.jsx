export default function FilterOption({ label, value, checked, onChange }) {
  return (
    <label className="flex gap-2 mb-2 items-center cursor-pointer">
      {/* Accessible Input */}
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />

      {/* Custom Checkbox */}
      <div
        className="h-6 w-6 border border-gray-400 rounded-md 
        flex items-center justify-center
        peer-checked:bg-primary peer-checked:border-primary"
      >
        <svg
          className="w-5 h-5 text-secondary peer-checked:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Label */}
      <span className="text-[18px] text-accent">{label}</span>
    </label>
  );
}
