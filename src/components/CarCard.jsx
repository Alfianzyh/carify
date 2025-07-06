import React from 'react';

function CarCard({ car }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-1">
        {car.make} {car.model}
      </h3>
      <p className="text-sm text-gray-600">Tahun: {car.year}</p>
      <p className="text-sm text-gray-600">Harga: Rp {car.price.toLocaleString()}</p>
    </div>
  );
}

export default CarCard;
