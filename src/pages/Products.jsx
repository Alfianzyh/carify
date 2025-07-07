import { useState } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const carList = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Avanza',
    year: 2020,
    price: 180000000,
    image: 'https://source.unsplash.com/400x300/?toyota,avanza',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Jazz',
    year: 2019,
    price: 190000000,
    image: 'https://source.unsplash.com/400x300/?honda,jazz',
  },
  {
    id: 3,
    make: 'Suzuki',
    model: 'Ertiga',
    year: 2021,
    price: 200000000,
    image: 'https://source.unsplash.com/400x300/?suzuki,ertiga',
  },
  {
    id: 4,
    make: 'Daihatsu',
    model: 'Xenia',
    year: 2022,
    price: 175000000,
    image: 'https://source.unsplash.com/400x300/?daihatsu,xenia',
  },
  {
    id: 5,
    make: 'Mitsubishi',
    model: 'Xpander',
    year: 2022,
    price: 230000000,
    image: 'https://source.unsplash.com/400x300/?mitsubishi,xpander',
  },
  {
    id: 6,
    make: 'Nissan',
    model: 'Livina',
    year: 2021,
    price: 210000000,
    image: 'https://source.unsplash.com/400x300/?nissan,livina',
  },
  {
    id: 7,
    make: 'Wuling',
    model: 'Almaz',
    year: 2023,
    price: 270000000,
    image: 'https://source.unsplash.com/400x300/?wuling,almaz',
  },
  {
    id: 8,
    make: 'Toyota',
    model: 'Fortuner',
    year: 2020,
    price: 450000000,
    image: 'https://source.unsplash.com/400x300/?toyota,fortuner',
  },
  {
    id: 9,
    make: 'Honda',
    model: 'CRV',
    year: 2018,
    price: 380000000,
    image: 'https://source.unsplash.com/400x300/?honda,crv',
  },
  {
    id: 10,
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 470000000,
    image: 'https://source.unsplash.com/400x300/?mazda,cx5',
  },
  {
    id: 11,
    make: 'Hyundai',
    model: 'Palisade',
    year: 2023,
    price: 620000000,
    image: 'https://source.unsplash.com/400x300/?hyundai,palisade',
  },
  {
    id: 12,
    make: 'Kia',
    model: 'Seltos',
    year: 2022,
    price: 350000000,
    image: 'https://source.unsplash.com/400x300/?kia,seltos',
  },
  {
    id: 13,
    make: 'BMW',
    model: 'X1',
    year: 2019,
    price: 650000000,
    image: 'https://source.unsplash.com/400x300/?bmw,x1',
  },
  {
    id: 14,
    make: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2020,
    price: 720000000,
    image: 'https://source.unsplash.com/400x300/?mercedes,gla',
  },
  {
    id: 15,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 950000000,
    image: 'https://source.unsplash.com/400x300/?tesla,model3',
  },
];

function Products() {
  const [search, setSearch] = useState('');

  const filteredCars = carList.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Cari Mobil Impianmu</h2>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="text-gray-500 col-span-full">Tidak ada mobil ditemukan.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
