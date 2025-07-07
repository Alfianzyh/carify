import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

function Products() {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Avanza', year: 2020, price: 150000000 },
    { id: 2, make: 'Honda', model: 'Jazz', year: 2019, price: 175000000 },
    { id: 3, make: 'Suzuki', model: 'Ertiga', year: 2021, price: 160000000 },
  ]);

  const [search, setSearch] = useState('');

  // Ambil dari Smartcar localStorage
  useEffect(() => {
    const stored = localStorage.getItem('smartcarVehicle');
    if (stored) {
      const smartcar = JSON.parse(stored);
      const exists = cars.some((c) => c.id === smartcar.id);
      if (!exists) {
        setCars((prev) => [
          ...prev,
          {
            id: smartcar.id,
            make: smartcar.make,
            model: smartcar.model,
            year: smartcar.year,
            price: 0, // placeholder karena Smartcar tidak sediakan harga
          },
        ]);
      }
      localStorage.removeItem('smartcarVehicle');
    }
  }, [cars]);

  const filteredCars = cars.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Daftar Mobil</h2>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {filteredCars.length === 0 && (
          <p className="text-gray-500 col-span-full">Tidak ada mobil ditemukan.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
