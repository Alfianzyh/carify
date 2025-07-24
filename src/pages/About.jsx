import React, { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim. Kami akan segera menghubungi Anda!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-8 max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">Tentang Kami</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Carify</strong> adalah platform digital yang memudahkan Anda dalam mencari dan menyewa mobil dengan aman, cepat, dan nyaman. Kami menyediakan berbagai pilihan mobil dari berbagai merek dan tipe, sesuai kebutuhan perjalanan Anda.
        </p>
      </motion.div>

      <motion.div
        className="bg-blue-100 p-6 rounded-lg space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-blue-800">Hubungi Kami</h3>
        <p className="text-gray-700">
          Email: <a href="mailto:support@rentalmobil.id" className="text-blue-600 underline">info@carify.com</a>
        </p>
        <p className="text-gray-700">
          Telepon/WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">+62 812-3456-7890</a>
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white border rounded-lg p-6 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h4 className="text-xl font-semibold text-gray-800">Kirim Pesan ke Kami</h4>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Nama</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Pesan</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Kirim Pesan
        </button>
      </motion.form>
    </section>
  );
}

export default About;
