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
    image: 'https://source.unsplash.com/400x300/?toyota,avanza',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Jazz',
    year: 2019,
    price: 400000,
    image: 'https://source.unsplash.com/400x300/?honda,jazz',
  },
  {
    id: 3,
    make: 'Suzuki',
    model: 'Ertiga',
    year: 2021,
    price: 370000,
    image: 'https://source.unsplash.com/400x300/?suzuki,ertiga',
  },
  {
    id: 4,
    make: 'Daihatsu',
    model: 'Xenia',
    year: 2022,
    price: 340000,
    image: 'https://source.unsplash.com/400x300/?daihatsu,xenia',
  },
  {
    id: 5,
    make: 'Mitsubishi',
    model: 'Xpander',
    year: 2022,
    price: 430000,
    image: 'https://source.unsplash.com/400x300/?mitsubishi,xpander',
  },
  {
    id: 6,
    make: 'Nissan',
    model: 'Livina',
    year: 2021,
    price: 390000,
    image: 'https://source.unsplash.com/400x300/?nissan,livina',
  },
  {
    id: 7,
    make: 'Wuling',
    model: 'Almaz',
    year: 2023,
    price: 500000,
    image: 'https://source.unsplash.com/400x300/?wuling,almaz',
  },
  {
    id: 8,
    make: 'Toyota',
    model: 'Fortuner',
    year: 2020,
    price: 750000,
    image: 'https://source.unsplash.com/400x300/?toyota,fortuner',
  },
  {
    id: 9,
    make: 'Honda',
    model: 'CRV',
    year: 2018,
    price: 670000,
    image: 'https://source.unsplash.com/400x300/?honda,crv',
  },
  {
    id: 10,
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 700000,
    image: 'https://source.unsplash.com/400x300/?mazda,cx5',
  },
  {
    id: 11,
    make: 'Hyundai',
    model: 'Palisade',
    year: 2023,
    price: 850000,
    image: 'https://source.unsplash.com/400x300/?hyundai,palisade',
  },
  {
    id: 12,
    make: 'Kia',
    model: 'Seltos',
    year: 2022,
    price: 600000,
    image: 'https://source.unsplash.com/400x300/?kia,seltos',
  },
  {
    id: 13,
    make: 'BMW',
    model: 'X1',
    year: 2019,
    price: 950000,
    image: 'https://source.unsplash.com/400x300/?bmw,x1',
  },
  {
    id: 14,
    make: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2020,
    price: 1050000,
    image: 'https://source.unsplash.com/400x300/?mercedes,gla',
  },
  {
    id: 15,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 1500000,
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
