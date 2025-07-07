import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ConnectPage from './pages/ConnectPage';
import CallbackPage from './pages/CallbackPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen pt-12 pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
