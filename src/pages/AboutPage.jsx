import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle>Tentang Kami</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div className="md:w-1/2">
          <img
            src="/images/about-illustration.svg"
            alt="About Us Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Warung Mamahmia Terasi MJS berawal dari kecintaan Mamahmia pada masakan tradisional Indonesia, khususnya yang menggunakan terasi berkualitas tinggi. Didirikan pada tahun 2010, kami berkomitmen menyajikan hidangan lezat, higienis, dan harga terjangkau.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Nama "MJS" sendiri merupakan singkatan dari "Mamahmia Jaminan Selera", yang menjadi filosofi kami dalam setiap hidangan yang disajikan. Kami percaya bahwa makanan yang baik tidak hanya mengenyangkan, tetapi juga membangkitkan kenangan dan kehangatan keluarga.
          </p>
          <p className="text-lg leading-relaxed">
            Terasi MJS adalah rahasia di balik setiap hidangan kami, memberikan aroma dan rasa yang unik, otentik, dan tak terlupakan. Kami menggunakan terasi pilihan yang diproses secara tradisional untuk menjaga kualitas dan keaslian rasanya.
          </p>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold mb-4 text-center">Visi Kami</h3>
        <p className="text-lg text-center leading-relaxed">
          Menjadi warung makan terkemuka yang dikenal akan kelezatan masakan terasi autentik dan menjadi pilihan utama keluarga Indonesia.
        </p>
      </div>

      <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">Misi Kami</h3>
        <ul className="list-disc list-inside text-lg space-y-2 leading-relaxed">
          <li>Menyajikan hidangan tradisional Indonesia dengan kualitas terbaik dan cita rasa terasi yang khas.</li>
          <li>Menggunakan bahan-bahan segar dan berkualitas tinggi dari pemasok lokal.</li>
          <li>Memberikan pengalaman kuliner yang memuaskan dengan pelayanan yang ramah dan profesional.</li>
          <li>Menjaga kebersihan dan higienitas dalam setiap proses penyajian makanan.</li>
          <li>Berinovasi dalam menu untuk memenuhi selera pelanggan yang beragam.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;