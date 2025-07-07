import React from "react";
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';
import {
  FaCar,
  FaUserTie,
  FaPlaneArrival,
  FaGlobeAsia,
  FaCalendarCheck,
  FaBuilding,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="w-full bg-white text-gray-900 font-montserrat overflow-x-hidden">

      {/* Hero Section */}
      <section className="w-full min-h-screen mt-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center">
        <div className="max-w-screen-2xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Temukan Mobil Sewa Terbaikmu Hari Ini
            </h2>
            <p className="text-blue-100 text-lg">
              Pilihan mobil berkualitas dengan harga terjangkau. Sewa harian, mingguan, hingga bulanan, semua bisa!
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Tombol 1: Ke halaman Products */}
              <Link to="/products">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                  Mulai Cari Mobil
                </button>
              </Link>

              {/* Tombol 2: Tetap statis (jika nanti mau diarahkan ke fitur jadwal bisa diganti) */}
              <button className="relative overflow-hidden border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group hover:bg-white hover:text-blue-700">
                <span className="relative z-10">Jadwalkan Penjemputan</span>
                <span className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="./src/assets/Fortuner.jpg"
              alt="Mobil Rental"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
     <section className="w-full bg-gray-50 py-20">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-2">Mobil Paling Banyak Disewa</h3>
        <p className="text-gray-600 mb-10">
          Pilihan mobil terpopuler yang sering digunakan pelanggan kami
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              id: 101,
              make: 'Toyota',
              model: 'Avanza',
              year: 2023,
              price: 350000,
              image: './src/assets/Avanza.jpg',
            },
            {
              id: 102,
              make: 'Honda',
              model: 'CR-V',
              year: 2023,
              price: 670000,
              image: './src/assets/CRV.jpg',
            },
            {
              id: 103,
              make: 'Toyota',
              model: 'Fortuner',
              year: 2024,
              price: 750000,
              image: './src/assets/Fortuner.jpg',
            },
          ].map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>


      {/* Services Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-2">Layanan Kami</h3>
          <p className="text-gray-600 mb-10">
            Solusi rental mobil lengkap, nyaman, dan terpercaya
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily & Weekly Car Rental",
                desc: "Penyewaan mobil fleksibel untuk kebutuhan harian atau mingguan.",
                icon: <FaCar className="text-blue-600 text-3xl mx-auto" />,
              },
              {
                title: "Professional Driver",
                desc: "Layanan supir profesional dan ramah untuk perjalanan Anda.",
                icon: <FaUserTie className="text-blue-600 text-3xl mx-auto" />,
              },
              {
                title: "Airport Pickup & Drop",
                desc: "Layanan antar-jemput bandara dengan kenyamanan maksimal.",
                icon: <FaPlaneArrival className="text-blue-600 text-3xl mx-auto" />,
              },
              {
                title: "Online Booking",
                desc: "Pemesanan mobil mudah secara online dari mana saja.",
                icon: <FaCalendarCheck className="text-blue-600 text-3xl mx-auto" />,
              },
              {
                title: "Tour Packages",
                desc: "Nikmati paket wisata bersama keluarga atau rombongan.",
                icon: <FaGlobeAsia className="text-blue-600 text-3xl mx-auto" />,
              },
              {
                title: "Corporate Rental",
                desc: "Solusi sewa mobil untuk kebutuhan perusahaan dan bisnis.",
                icon: <FaBuilding className="text-blue-600 text-3xl mx-auto" />,
              },
            ].map((service, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-600 text-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-4xl font-bold">Siap Menyewa Mobil Impian Anda?</h3>
          <p className="text-blue-100 text-lg">
            Jelajahi pilihan mobil kami atau hubungi tim kami untuk informasi lebih lanjut
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link to="/products">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                Lihat Daftar Mobil
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
