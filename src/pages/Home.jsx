import React from 'react';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-10 bg-gray-100 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        Temukan Mobil Impianmu
      </h1>
      <p className="text-gray-700 max-w-xl mb-6 text-lg">
        CarDealer adalah platform jual-beli mobil terbaik untuk kamu yang ingin membeli kendaraan dengan mudah dan cepat.
      </p>
      <a
        href="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Lihat Produk
      </a>
    </section>
  );
}

export default Home;
