import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Warung Mamahmia Terasi MJS</h3>
          <p className="text-sm">
            Menyajikan kelezatan masakan rumahan dengan sentuhan terasi khas yang menggugah selera.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Jl. Contoh No. 123, Kota Bahagia
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> (021) 12345678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@mamahmia.com
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Setiap Hari: 09:00 - 21:00
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="hover:text-accent transition-colors duration-300">FB</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">IG</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">TW</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Warung Mamahmia Terasi MJS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;