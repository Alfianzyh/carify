import { useState } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const carList = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Avanza',
    year: 2020,
    price: 350000,
    image: 'public/Avanza.jpg',
  },
  {
    id: 2,
    make: 'Mitsubishi',
    model: 'Xpander',
    year: 2022,
    price: 430000,
    image: 'public/Xpander.jpg',
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Fortuner',
    year: 2020,
    price: 750000,
    image: 'public/Fortuner.jpg',
  },
  {
    id: 4,
    make: 'Honda',
    model: 'CRV',
    year: 2018,
    price: 670000,
    image: 'public/CRV.jpg',
  },
  {
    id: 5,
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 700000,
    image: 'public/CX5.jpg',
  },
  {
    id: 6,
    make: 'Hyundai',
    model: 'Palisade',
    year: 2023,
    price: 850000,
    image: 'public/Palisade.jpg',
  },
  {
    id: 7,
    make: 'BMW',
    model: 'X1',
    year: 2019,
    price: 950000,
    image: 'public/X1.jpg',
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2020,
    price: 1050000,
    image: 'public/Gla.jpg',
  },
  {
    id: 9,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 1500000,
    image: 'public/Tesla.jpg',
  },
];

function Products() {
  const [search, setSearch] = useState('');

  const filteredCars = carList.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Mobil Siap Disewa</h2>
        <p className="text-gray-600">
          Temukan mobil pilihan yang sesuai dengan kebutuhan perjalanan Anda. Semua unit dalam kondisi terbaik dan siap jalan!
        </p>
      </div>

      <div className="mb-6 max-w-md mx-auto">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari merek atau model..." />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">Mobil tidak ditemukan. Coba kata kunci lain.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
