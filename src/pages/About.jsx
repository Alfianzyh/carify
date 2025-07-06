import React from 'react';

function About() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Tentang Kami</h2>

      <p className="mb-4 text-gray-700 leading-relaxed">
        <strong>CarDealer</strong> adalah platform digital yang dirancang untuk membantu kamu menemukan dan membeli mobil impian dengan lebih cepat, aman, dan terpercaya. Kami menyediakan informasi detail setiap mobil agar kamu bisa membandingkan dan memilih dengan bijak.
      </p>

      <p className="mb-6 text-gray-700">
        Kami percaya bahwa proses jual beli mobil harus mudah dan nyaman bagi semua orang. Itulah mengapa kami selalu mengembangkan layanan dan fitur kami agar sesuai dengan kebutuhan pengguna.
      </p>

      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Hubungi Kami</h3>
        <p className="text-gray-700">Email: <a href="mailto:support@cardealer.com" className="text-blue-600 underline">support@cardealer.com</a></p>
        <p className="text-gray-700">Telepon/WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">+62 812-3456-7890</a></p>
      </div>
    </section>
  );
}

export default About;
