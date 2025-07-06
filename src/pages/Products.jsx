import { useState } from 'react';
import { dummyCars } from '../api/cars';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

function Products() {
  const [search, setSearch] = useState('');

  const filteredCars = dummyCars.filter((car) =>
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
        {filteredCars.length === 0 && <p className="text-gray-500 col-span-full">Tidak ada mobil ditemukan.</p>}
      </div>
    </section>
  );
}

export default Products;
