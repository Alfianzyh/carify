import React from 'react';
import PropTypes from 'prop-types';

function CarCard({ car }) {
  const { make, model, year, price, image } = car;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={image}
        alt={`${make} ${model}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="mb-4 space-y-1">
          <h4 className="text-xl font-semibold text-gray-800">
            {make} {model}
          </h4>
          <p className="text-sm text-gray-500">Tahun {year}</p>
          <p className="text-blue-600 font-bold text-lg">
            Rp {price.toLocaleString('id-ID')} / hari
          </p>
        </div>

        <button className="mt-auto bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Sewa Sekarang
        </button>
      </div>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CarCard;