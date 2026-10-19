export default function FilterOption({ label, value, checked, onChange }) {
  return (
    <label className="flex gap-2 mb-3.5 items-center cursor-pointer">
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
        className="flex h-5 w-5 items-center justify-center rounded-sm border border-gray-400
        peer-checked:bg-primary peer-checked:border-primary"
      >
        <svg
          className="h-4 w-4 text-secondary peer-checked:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Label */}
      <span className="text-sm text-accent">{label}</span>
    </label>
  );
}
