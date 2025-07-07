import React from "react";

const HomePage = () => {
  return (
    <div className="w-full bg-white text-gray-900 font-montserrat overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center">
        <div className="max-w-screen-2xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Find Your Perfect Car Today
            </h2>
            <p className="text-blue-100 text-lg">
              Discover thousands of quality vehicles from trusted dealers. Get
              the best deals on new and used cars.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                Browse Inventory
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold">
                Schedule Test Drive
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/640x360"
              alt="Car Showcase"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-4xl font-bold">Find Your Dream Car</h3>
          <p className="text-gray-600">Search through our extensive inventory</p>

          <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-sm grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Make", "Model", "Year", "Price Range"].map((label, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-300 px-4 py-3 text-left"
              >
                <span className="text-base">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
              Search Vehicles
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-2">Featured Vehicles</h3>
          <p className="text-gray-600 mb-10">
            Handpicked cars from our premium collection
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "2024 BMW M3",
                desc: "3.0L Twin Turbo • 473 HP • AWD",
                price: "$72,500",
                tag: "New",
              },
              {
                name: "2023 Honda CR-V",
                desc: "1.5L Turbo • 190 HP • AWD",
                price: "$28,900",
                tag: "Used",
              },
              {
                name: "2024 Ford F-150",
                desc: "3.5L V6 • 400 HP • 4WD",
                price: "$45,200",
                tag: "New",
              },
            ].map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://placehold.co/384x192"
                  alt={car.name}
                  className="w-full"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{car.name}</h4>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        car.tag === "New"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {car.tag}
                    </span>
                  </div>
                  <p className="text-gray-600">{car.desc}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-2xl text-blue-600 font-bold">
                      {car.price}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-2">Our Services</h3>
          <p className="text-gray-600 mb-10">
            Complete automotive solutions for all your needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vehicle Sales",
                desc: "Wide selection of new and used vehicles from top brands",
              },
              {
                title: "Service & Repair",
                desc: "Expert maintenance and repair services by certified technicians",
              },
              {
                title: "Financing",
                desc: "Flexible financing options with competitive rates",
              },
            ].map((service, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full" />
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
          <h3 className="text-4xl font-bold">Ready to Find Your Next Car?</h3>
          <p className="text-blue-100 text-lg">
            Browse our inventory or schedule a test drive today
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
              Browse Inventory
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">AutoDeal</h4>
            <p>Your trusted partner in finding the perfect vehicle</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-1">
              <li>Inventory</li>
              <li>Financing</li>
              <li>Trade-In</li>
              <li>Service</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Contact Info</h5>
            <ul className="space-y-1">
              <li>(555) 123-4567</li>
              <li>info@autodeal.com</li>
              <li>123 Auto Street, City, ST 12345</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Follow Us</h5>
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
              <div className="w-6 h-6 bg-gray-400 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
