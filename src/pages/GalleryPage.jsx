import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const GalleryPage = () => {
  const galleryItems = [
    {
      image: '/images/gallery-item-1.svg',
      title: 'Nasi Goreng Terasi',
      description: 'Nasi goreng khas dengan aroma terasi yang kuat dan topping melimpah.'
    },
    {
      image: '/images/gallery-item-2.svg',
      title: 'Ayam Bakar Terasi',
      description: 'Ayam bakar empuk dengan bumbu terasi meresap, disajikan dengan sambal.'
    },
    {
      image: '/images/gallery-item-3.svg',
      title: 'Sambal Terasi Spesial',
      description: 'Sambal pedas nampol dengan terasi pilihan, cocok untuk semua hidangan.'
    },
    {
      image: '/images/gallery-item-4.svg',
      title: 'Ikan Bakar Terasi',
      description: 'Ikan segar dibakar dengan bumbu terasi, gurih dan lezat.'
    },
    {
      image: '/images/gallery-item-5.svg',
      title: 'Sayur Asem Terasi',
      description: 'Sayur asem segar dengan sentuhan terasi, kuah asam manis pedas.'
    },
    {
      image: '/images/gallery-item-6.svg',
      title: 'Tempe Mendoan Terasi',
      description: 'Tempe mendoan renyah dengan cocolan sambal terasi.'
    },
    {
      image: '/images/food-icon-1.svg',
      title: 'Sop Buntut Terasi',
      description: 'Sop buntut hangat dengan kuah kaya rempah dan aroma terasi.'
    },
    {
      image: '/images/food-icon-2.svg',
      title: 'Mie Goreng Terasi',
      description: 'Mie goreng dengan bumbu terasi yang medok, porsi mengenyangkan.'
    },
    {
      image: '/images/food-icon-3.svg',
      title: 'Tahu Isi Terasi',
      description: 'Tahu goreng isi sayuran dan bumbu terasi, camilan gurih.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle>Galeri Menu Kami</SectionTitle>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Lihatlah beberapa hidangan andalan kami yang siap memanjakan lidah Anda. Setiap sajian dibuat dengan bahan segar dan bumbu pilihan, dengan sentuhan terasi khas Mamahmia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;