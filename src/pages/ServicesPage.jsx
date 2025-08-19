import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Package, Truck, Users } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Users size={48} className="text-primary" />,
      title: 'Dine-in Nyaman',
      description: 'Nikmati hidangan lezat kami langsung di warung dengan suasana yang nyaman dan ramah keluarga. Tempat yang pas untuk makan siang atau malam bersama orang terkasih.'
    },
    {
      icon: <Truck size={48} className="text-primary" />,
      title: 'Layanan Delivery',
      description: 'Tidak sempat datang? Kami siap mengantar hidangan favorit Anda langsung ke rumah atau kantor. Pesan mudah, nikmati cepat!'
    },
    {
      icon: <Package size={48} className="text-primary" />,
      title: 'Catering Acara',
      description: 'Rayakan momen spesial Anda dengan hidangan khas Mamahmia Terasi MJS. Kami menyediakan layanan catering untuk berbagai acara, dari rapat hingga pesta keluarga.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle>Layanan Kami</SectionTitle>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Kami berkomitmen untuk memberikan pengalaman kuliner terbaik bagi setiap pelanggan. Berikut adalah layanan yang kami tawarkan untuk memenuhi kebutuhan Anda:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Pesan Sekarang!</h3>
        <p className="text-lg text-gray-700 mb-6">
          Untuk informasi lebih lanjut atau pemesanan layanan catering, jangan ragu hubungi kami.
        </p>
        <Link
          to="/contact"
          className="bg-accent text-secondary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
        >
          Hubungi Kami
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;