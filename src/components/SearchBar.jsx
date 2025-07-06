import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Cari mobil..."
      className="p-2 border w-full mb-4 rounded-md"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
