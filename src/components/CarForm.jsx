import React from 'react';
import { useState, useEffect } from 'react';

function CarForm({ onSubmit, initialData = null, onCancel }) {
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
  });

  useEffect(() => {
    if (initialData) {
      setCar(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...car, year: Number(car.year), price: Number(car.price) });
    setCar({ make: '', model: '', year: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6 bg-gray-50 p-4 rounded">
      <input name="make" placeholder="Merk" value={car.make} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="model" placeholder="Model" value={car.model} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="year" placeholder="Tahun" value={car.year} onChange={handleChange} className="w-full p-2 border rounded" type="number" />
      <input name="price" placeholder="Harga" value={car.price} onChange={handleChange} className="w-full p-2 border rounded" type="number" />
      <div className="flex gap-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {initialData ? 'Update' : 'Tambah'}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel} className="text-gray-600 underline">
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

export default CarForm;
