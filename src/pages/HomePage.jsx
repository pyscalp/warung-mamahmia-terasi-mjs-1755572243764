import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      image: '/images/gallery-item-1.svg',
      title: 'Nasi Goreng Terasi',
      description: 'Nasi goreng khas dengan aroma terasi yang kuat.',
      price: 'Rp 25.000'
    },
    {
      image: '/images/gallery-item-2.svg',
      title: 'Ayam Bakar Terasi',
      description: 'Ayam bakar empuk dengan bumbu terasi meresap.',
      price: 'Rp 35.000'
    },
    {
      image: '/images/gallery-item-3.svg',
      title: 'Sambal Terasi Spesial',
      description: 'Sambal pedas nampol dengan terasi pilihan.',
      price: 'Rp 10.000'
    },
  ];

  const whyChooseUs = [
    { icon: <Check size={24} className="text-primary" />, text: 'Cita Rasa Autentik' },
    { icon: <Check size={24} className="text-primary" />, text: 'Bahan Segar Pilihan' },
    { icon: <Check size={24} className="text-primary" />, text: 'Harga Terjangkau' },
    { icon: <Check size={24} className="text-primary" />, text: 'Pelayanan Ramah' },
  ];

  return (
    <>
      <Hero />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle>Tentang Warung Mamahmia</SectionTitle>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Warung Mamahmia Terasi MJS berawal dari kecintaan Mamahmia pada masakan tradisional Indonesia, khususnya yang menggunakan terasi berkualitas tinggi. Kami berkomitmen menyajikan hidangan lezat, higienis, dan harga terjangkau. Terasi MJS adalah rahasia di balik setiap hidangan kami, memberikan aroma dan rasa yang unik.
          </p>
          <Link to="/about" className="text-primary hover:underline font-semibold">
            Baca Selengkapnya
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>Menu Unggulan Kami</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="bg-primary text-white hover:bg-secondary px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Lihat Semua Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle>Kenapa Pilih Kami?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                {item.icon}
                <p className="mt-4 text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;