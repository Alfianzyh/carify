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
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HomePage = () => {
  const services = [
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
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-montserrat overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-screen mt-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center">
        <div className="max-w-screen-2xl w-full mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Temukan Mobil Sewa Terbaikmu Hari Ini
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Pilihan mobil berkualitas dengan harga terjangkau. Sewa harian, mingguan, hingga bulanan, semua bisa!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/products">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition w-full sm:w-auto">
                  Mulai Cari Mobil
                </button>
              </Link>
              <button className="relative overflow-hidden border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group hover:bg-white hover:text-blue-700 w-full sm:w-auto">
                <span className="relative z-10">Jadwalkan Penjemputan</span>
                <span className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/Fortuner.jpg"
              alt="Mobil Rental"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Mobil Paling Banyak Disewa
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-10 text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
          >
            Pilihan mobil terpopuler yang sering digunakan pelanggan kami
          </motion.p>

          <motion.div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                id: 101,
                make: 'Toyota',
                model: 'Avanza',
                year: 2023,
                price: 350000,
                image: '/Avanza.jpg',
              },
              {
                id: 102,
                make: 'Honda',
                model: 'CR-V',
                year: 2023,
                price: 670000,
                image: '/CRV.jpg',
              },
              {
                id: 103,
                make: 'Toyota',
                model: 'Fortuner',
                year: 2024,
                price: 750000,
                image: '/Fortuner.jpg',
              },
            ].map((car, i) => (
              <motion.div key={car.id} variants={fadeUp} custom={i}>
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Layanan Kami
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-10 text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
          >
            Solusi rental mobil lengkap, nyaman, dan terpercaya
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="text-center space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-600 text-white py-20">
        <motion.div
          className="max-w-screen-2xl mx-auto px-6 text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h3 className="text-3xl sm:text-4xl font-bold">
            Siap Menyewa Mobil Impian Anda?
          </h3>
          <p className="text-blue-100 text-sm sm:text-lg">
            Jelajahi pilihan mobil kami atau hubungi tim kami untuk informasi lebih lanjut
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition w-full sm:w-auto">
                Lihat Daftar Mobil
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition w-full sm:w-auto">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
