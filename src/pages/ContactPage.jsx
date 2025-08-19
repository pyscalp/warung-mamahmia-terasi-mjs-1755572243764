import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle>Hubungi Kami</SectionTitle>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Punya pertanyaan, kritik, saran, atau ingin memesan layanan catering? Jangan ragu hubungi kami melalui formulir di bawah ini atau informasi kontak yang tersedia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-6">Kirim Pesan</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Subjek Pesan"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Kirim Pesan
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-4">
              <MapPin size={28} className="flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold block">Alamat Kami:</span>
                Jl. Contoh No. 123, Kel. Bahagia, Kec. Sentosa, Kota Bahagia, 12345
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={28} className="flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold block">Telepon:</span>
                (021) 12345678
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={28} className="flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold block">Email:</span>
                info@mamahmia.com
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock size={28} className="flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold block">Jam Operasional:</span>
                Setiap Hari: 09:00 - 21:00 WIB
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;