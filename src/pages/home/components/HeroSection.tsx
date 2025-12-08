import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';
import macbookPro from '../../../images/MacBook Pro M3.jpg';
import iphone from '../../../images/iPhone 15 Pro Max.jpg';
import sonySpeaker from '../../../images/Sony Headphones.jpg';
import dellXPS from '../../../images/Dell_XPS_15_.png';
import lgTV from '../../../images/LG 4K TV 65.webp';
import asusROG from '../../../images/Laptop ASUS ROG.jpg';
import ps5 from '../../../images/PlayStation 5.jpg';
import samsungFridge from '../../../images/Samsung Refrigerator.jpg';
import samsungGalaxy from '../../../images/Samsung_Galaxy_s24.jpeg';
import iPad from '../../../images/iPad Pro 12.9.jpg';

interface CarouselProduct {
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselProducts: CarouselProduct[] = [
    {
      name: 'MacBook Pro M3',
      price: 2850000,
      originalPrice: 3200000,
      image: macbookPro
    },
    {
      name: 'iPhone 15 Pro Max',
      price: 1450000,
      originalPrice: 1650000,
      image: iphone
    },
    {
      name: 'Samsung Galaxy S24',
      price: 1350000,
      originalPrice: 1500000,
      image: samsungGalaxy
    },
    {
      name: 'iPad Pro 12.9"',
      price: 1200000,
      originalPrice: 1400000,
      image: iPad
    },
    {
      name: 'Sony Headphones',
      price: 385000,
      originalPrice: 450000,
      image: sonySpeaker
    },
    {
      name: 'Dell XPS 15',
      price: 1850000,
      originalPrice: 2100000,
      image: dellXPS
    },
    {
      name: 'LG 4K TV 65"',
      price: 1200000,
      originalPrice: 1450000,
      image: lgTV
    },
    {
      name: 'PlayStation 5',
      price: 650000,
      originalPrice: 750000,
      image: ps5
    },
    {
      name: 'Samsung Refrigerator',
      price: 950000,
      originalPrice: 1100000,
      image: samsungFridge
    },
    {
      name: 'Laptop ASUS ROG',
      price: 2200000,
      originalPrice: 2500000,
      image: asusROG
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselProducts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentProduct = carouselProducts[currentIndex];
  const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.85) 50%, rgba(59, 130, 246, 0.7) 100%), url('https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte à gauche */}
          <div className="text-white space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">🎉 Nouveautés 2024 disponibles</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Votre Partenaire
              <span className="text-yellow-300 block mt-2">Technologie</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-xl">
              Découvrez l'excellence technologique avec notre sélection premium d'appareils électroniques et électroménagers. Innovation, qualité et service au cœur de Bangui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 !text-blue-900 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all whitespace-nowrap"
                onClick={() => scrollToSection('produits')}
              >
                <i className="ri-shopping-bag-3-fill mr-2 text-xl"></i>
                Explorer nos Produits
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="!border-2 !border-white !text-white hover:!bg-white hover:!text-blue-600 font-semibold shadow-lg whitespace-nowrap"
                onClick={() => scrollToSection('contact')}
              >
                <i className="ri-customer-service-2-fill mr-2 text-xl"></i>
                Contactez-nous
              </Button>
            </div>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
              <div>
                <div className="text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-sm text-blue-100">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-100">Produits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">1+</div>
                <div className="text-sm text-blue-100">Ans d'Expérience</div>
              </div>
            </div>
          </div>

          {/* Carousel de produits à droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Product Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transition-all duration-500">
                {/* Product Image */}
                <div className="relative h-96 mb-4 bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(currentProduct.name);
                    }}
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                    -{discount}%
                  </div>

                  {/* Product Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                    <h3 className="text-xl font-bold">{currentProduct.name}</h3>
                  </div>
                </div>

                {/* Price Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Prix Normal:</span>
                    <span className="text-xl font-bold text-gray-400 line-through">
                      {(currentProduct.originalPrice / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <span className="text-gray-900 font-semibold">Prix Promo:</span>
                    <span className="text-3xl font-bold text-blue-600">
                      {(currentProduct.price / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">
                    Économisez: {((currentProduct.originalPrice - currentProduct.price) / 1000000).toFixed(2)}M FCFA
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
                  <i className="ri-shopping-cart-2-line mr-2"></i>
                  Ajouter au panier
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 w-3 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselProducts.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
              >
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}
