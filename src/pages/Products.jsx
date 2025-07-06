import { useState } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import CarForm from '../components/CarForm';

function Products() {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Avanza', year: 2020, price: 150000000 },
    { id: 2, make: 'Honda', model: 'Jazz', year: 2019, price: 175000000 },
    { id: 3, make: 'Suzuki', model: 'Ertiga', year: 2021, price: 160000000 },
  ]);

  const [search, setSearch] = useState('');
  const [editingCar, setEditingCar] = useState(null);

  const handleAddOrUpdateCar = (carData) => {
    if (editingCar) {
      setCars(cars.map((car) => (car.id === editingCar.id ? { ...carData, id: editingCar.id } : car)));
      setEditingCar(null);
    } else {
      const newCar = { ...carData, id: Date.now() };
      setCars([newCar, ...cars]);
    }
  };

  const handleEdit = (car) => {
    setEditingCar(car);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Hapus mobil ini?');
    if (confirm) {
      setCars(cars.filter((car) => car.id !== id));
    }
  };

  const filteredCars = cars.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Daftar Mobil</h2>
      <CarForm onSubmit={handleAddOrUpdateCar} initialData={editingCar} onCancel={() => setEditingCar(null)} />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredCars.map((car) => (
          <div key={car.id} className="relative">
            <CarCard car={car} />
            <div className="absolute top-2 right-2 flex gap-2">
              <button onClick={() => handleEdit(car)} className="text-blue-600 text-xs underline">
                Edit
              </button>
              <button onClick={() => handleDelete(car.id)} className="text-red-600 text-xs underline">
                Hapus
              </button>
            </div>
          </div>
        ))}
        {filteredCars.length === 0 && <p className="text-gray-500 col-span-full">Tidak ada mobil ditemukan.</p>}
      </div>
    </section>
  );
}

export default Products;
