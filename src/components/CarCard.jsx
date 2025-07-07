function CarCard({ car }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow bg-white hover:shadow-lg transition">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {car.make} {car.model} ({car.year})
        </h3>
        <p className="text-green-600 font-bold mt-2">
          Rp {car.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CarCard;
