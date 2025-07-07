function SearchBar({ value, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Cari mobil..."
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
