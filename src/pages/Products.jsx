import { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const carList = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Avanza',
    year: 2020,
    price: 350000,
    image: '/Avanza.jpg',
  },
  {
    id: 2,
    make: 'Mitsubishi',
    model: 'Xpander',
    year: 2022,
    price: 430000,
    image: '/Xpander.jpg',
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Fortuner',
    year: 2020,
    price: 750000,
    image: '/Fortuner.jpg',
  },
  {
    id: 4,
    make: 'Honda',
    model: 'CRV',
    year: 2018,
    price: 670000,
    image: '/CRV.jpg',
  },
  {
    id: 5,
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 700000,
    image: '/CX5.jpg',
  },
  {
    id: 6,
    make: 'Hyundai',
    model: 'Palisade',
    year: 2023,
    price: 850000,
    image: '/Palisade.jpg',
  },
  {
    id: 7,
    make: 'BMW',
    model: 'X1',
    year: 2019,
    price: 950000,
    image: '/X1.jpg',
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'GLA 200',
    year: 2020,
    price: 1050000,
    image: '/Gla.jpg',
  },
  {
    id: 9,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 1500000,
    image: '/Tesla.jpg',
  },
];

function Products() {
  const [search, setSearch] = useState('');

  const filteredCars = carList.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mobil Siap Disewa
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Temukan mobil pilihan yang sesuai dengan kebutuhan perjalanan Anda. Semua unit dalam kondisi terbaik dan siap jalan!
        </motion.p>
      </motion.div>

      <motion.div
        className="mb-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari merek atau model..."
        />
      </motion.div>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <motion.div
              key={car.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-gray-500 col-span-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mobil tidak ditemukan. Coba kata kunci lain.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

export default Products;
