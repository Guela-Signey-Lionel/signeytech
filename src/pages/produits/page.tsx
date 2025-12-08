import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useCart } from '../../context/CartContext';
import macbookProM3 from '../../images/MacBook Pro M3.jpg';
import ipadPro from '../../images/iPad Pro 12.9.jpg';
import samsungGalaxyS24 from '../../images/Samsung_Galaxy_s24.jpeg';
import lgTV from '../../images/LG 4K TV 65.webp';
import sonyHeadphones from '../../images/Sony Headphones.jpg';
import dellXPS from '../../images/Dell_XPS_15_.png';
import asusROG from '../../images/Laptop ASUS ROG.jpg';
import ps5 from '../../images/PlayStation 5.jpg';
import iphone from '../../images/iPhone 15 Pro Max.jpg';
import samsungTab from '../../images/Samsung Galaxy Tab S10.jpg';
import googlePixel from '../../images/Google Pixel 8 Pro.jpg';
import oneplus from '../../images/OnePlus 12.jpg';
import lgOled from '../../images/LG OLED 55_.jpeg';
import bose from '../../images/Bose SoundLink Max.jpg';
import samsung from '../../images/Samsung HW-Q90D Soundbar.jpg';
import homepod from '../../images/Apple HomePod mini.jpg';
import xbox from '../../images/Xbox Series X.avif';
import nintendoSwitch from '../../images/Nintendo Switch 2.jpg';
import dualsense from '../../images/DualSense Controller PS5.webp';
import xboxElite from '../../images/Xbox Elite Controller Series 2.webp';
import turtleBeach from '../../images/Turtle Beach Stealth 600 Gen 3.jpg';
import lenovo from '../../images/Lenovo ThinkPad X1 Carbon.jpg';
import hp from '../../images/HP Pavilion 16.png';
import acer from '../../images/Acer Swift Go 14.jpg';
import airpods from '../../images/AirPods Pro (3rd Gen).jpg';
import galaxyBuds from '../../images/Samsung Galaxy Buds 3 Pro.jpg';
import anker from '../../images/Anker 737 Power Bank 140W.jpg';
import belkin from '../../images/Belkin USB-C Hub 7-in-1.jpg';
import mophie from '../../images/Mophie Wireless Charging Pad.jpg';
import spigen from '../../images/Spigen Tempered Glass iPhone Screen Protector.jpg';

export default function ProduitsPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // Smartphones & Tablettes
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      category: 'Smartphones & Tablettes',
      price: 1450000,
      originalPrice: 1650000,
      image: iphone,
      badge: 'Promo -12%',
      badgeColor: 'bg-red-500',
      rating: 4.9,
      reviews: 203,
      features: ['A17 Pro', '256GB', 'Titanium', 'Pro Camera']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Smartphones & Tablettes',
      price: 1350000,
      originalPrice: 1500000,
      image: samsungGalaxyS24,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.8,
      reviews: 178,
      features: ['Snapdragon 8', '512GB', 'S Pen', 'AI Features']
    },
    {
      id: 3,
      name: 'iPad Pro 12.9" M4',
      category: 'Smartphones & Tablettes',
      price: 1200000,
      originalPrice: null,
      image: ipadPro,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 95,
      features: ['M4 Chip', '512GB', 'OLED Display', 'Apple Pencil']
    },
    {
      id: 4,
      name: 'Samsung Galaxy Tab S10',
      category: 'Smartphones & Tablettes',
      price: 850000,
      originalPrice: 950000,
      image: samsungTab,
      badge: 'Promo -10%',
      badgeColor: 'bg-red-500',
      rating: 4.7,
      reviews: 82,
      features: ['Snapdragon', '256GB', 'AMOLED', 'S Pen']
    },
    {
      id: 5,
      name: 'Google Pixel 8 Pro',
      category: 'Smartphones & Tablettes',
      price: 1100000,
      originalPrice: null,
      image: googlePixel,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 156,
      features: ['Tensor G4', '256GB', 'AI Camera', 'Magic Eraser']
    },
    {
      id: 6,
      name: 'OnePlus 12',
      category: 'Smartphones & Tablettes',
      price: 950000,
      originalPrice: 1050000,
      image: oneplus,
      badge: 'Promo -10%',
      badgeColor: 'bg-red-500',
      rating: 4.6,
      reviews: 120,
      features: ['Snapdragon 8', '256GB', '120Hz AMOLED', 'Fast Charge']
    },

    // TV & Audio
    {
      id: 7,
      name: 'Samsung QLED 65"',
      category: 'TV & Audio',
      price: 1200000,
      originalPrice: 1450000,
      image: lgTV,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.7,
      reviews: 156,
      features: ['4K QLED', 'HDR10+', 'Smart TV', '120Hz']
    },
    {
      id: 8,
      name: 'LG OLED 55"',
      category: 'TV & Audio',
      price: 950000,
      originalPrice: 1100000,
      image: lgOled,
      badge: 'Promo -14%',
      badgeColor: 'bg-red-500',
      rating: 4.8,
      reviews: 134,
      features: ['4K OLED', 'AI Upscaling', 'WebOS', 'Dolby Vision']
    },
    {
      id: 9,
      name: 'Sony WH-1000XM5',
      category: 'TV & Audio',
      price: 385000,
      originalPrice: 450000,
      image: sonyHeadphones,
      badge: 'Promo -14%',
      badgeColor: 'bg-red-500',
      rating: 4.9,
      reviews: 342,
      features: ['ANC', '30h Battery', 'Hi-Res', 'LDAC']
    },
    {
      id: 10,
      name: 'Bose SoundLink Max',
      category: 'TV & Audio',
      price: 280000,
      originalPrice: null,
      image: bose,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.7,
      reviews: 98,
      features: ['Portable', 'Bluetooth 5.3', 'Premium Sound', '20h Battery']
    },
    {
      id: 11,
      name: 'Samsung HW-Q90D Soundbar',
      category: 'TV & Audio',
      price: 450000,
      originalPrice: 550000,
      image: samsung,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 112,
      features: ['11.1.1 Ch', 'Dolby Atmos', 'AI Upscaling', 'Wireless Subwoofer']
    },
    {
      id: 12,
      name: 'Apple HomePod mini',
      category: 'TV & Audio',
      price: 95000,
      originalPrice: null,
      image: homepod,
      badge: 'Compact',
      badgeColor: 'bg-blue-500',
      rating: 4.6,
      reviews: 87,
      features: ['Smart Speaker', 'Siri', 'Hi-Fi Sound', 'Home Automation']
    },

    // Gaming & Consoles
    {
      id: 13,
      name: 'PlayStation 5 Slim',
      category: 'Gaming & Consoles',
      price: 650000,
      originalPrice: null,
      image: ps5,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 267,
      features: ['1TB SSD', '4K Gaming', 'Ray Tracing', 'Exclusive Games']
    },
    {
      id: 14,
      name: 'Xbox Series X',
      category: 'Gaming & Consoles',
      price: 680000,
      originalPrice: null,
      image: xbox,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 198,
      features: ['1TB SSD', '4K@120Hz', 'Game Pass', 'Backward Compatible']
    },
    {
      id: 15,
      name: 'Nintendo Switch 2',
      category: 'Gaming & Consoles',
      price: 420000,
      originalPrice: null,
      image: nintendoSwitch,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.7,
      reviews: 156,
      features: ['Portable', 'Docked', 'OLED Screen', 'Joy-Con Controllers']
    },
    {
      id: 16,
      name: 'DualSense Controller PS5',
      category: 'Gaming & Consoles',
      price: 125000,
      originalPrice: null,
      image: dualsense,
      badge: 'Accessoire',
      badgeColor: 'bg-purple-500',
      rating: 4.8,
      reviews: 156,
      features: ['Haptic Feedback', 'Adaptive Triggers', 'Built-in Mic', 'Wireless']
    },
    {
      id: 17,
      name: 'Xbox Elite Controller Series 2',
      category: 'Gaming & Consoles',
      price: 145000,
      originalPrice: 160000,
      image: xboxElite,
      badge: 'Promo -9%',
      badgeColor: 'bg-red-500',
      rating: 4.7,
      reviews: 89,
      features: ['Customizable', 'Premium Build', 'Wireless', 'Case Included']
    },
    {
      id: 18,
      name: 'Turtle Beach Stealth 600 Gen 3',
      category: 'Gaming & Consoles',
      price: 185000,
      originalPrice: 220000,
      image: turtleBeach,
      badge: 'Promo -16%',
      badgeColor: 'bg-red-500',
      rating: 4.6,
      reviews: 67,
      features: ['Wireless', 'Surround Sound', 'Game/Chat Balance', 'Flip Mute Mic']
    },

    // Ordinateurs & Laptops
    {
      id: 19,
      name: 'MacBook Pro 16" M3 Max',
      category: 'Ordinateurs & Laptops',
      price: 2850000,
      originalPrice: 3200000,
      image: macbookProM3,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 127,
      features: ['M3 Max', '32GB RAM', '1TB SSD', 'Retina Display']
    },
    {
      id: 20,
      name: 'Dell XPS 15',
      category: 'Ordinateurs & Laptops',
      price: 1850000,
      originalPrice: null,
      image: dellXPS,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 89,
      features: ['Intel i9', '32GB RAM', 'RTX 4060', 'OLED Display']
    },
    {
      id: 21,
      name: 'ASUS ROG Zephyrus G16',
      category: 'Ordinateurs & Laptops',
      price: 2200000,
      originalPrice: null,
      image: asusROG,
      badge: 'Gaming',
      badgeColor: 'bg-red-500',
      rating: 4.7,
      reviews: 76,
      features: ['Intel i9', 'RTX 4090', '32GB RAM', '240Hz Display']
    },
    {
      id: 22,
      name: 'Lenovo ThinkPad X1 Carbon',
      category: 'Ordinateurs & Laptops',
      price: 1650000,
      originalPrice: 1850000,
      image: lenovo,
      badge: 'Business',
      badgeColor: 'bg-blue-500',
      rating: 4.7,
      reviews: 142,
      features: ['Intel i7', '16GB RAM', '512GB SSD', 'Ultra-thin']
    },
    {
      id: 23,
      name: 'HP Pavilion 16',
      category: 'Ordinateurs & Laptops',
      price: 950000,
      originalPrice: 1100000,
      image: hp,
      badge: 'Promo -14%',
      badgeColor: 'bg-red-500',
      rating: 4.6,
      reviews: 98,
      features: ['Intel i5', '16GB RAM', '512GB SSD', 'Numeric Keypad']
    },
    {
      id: 24,
      name: 'Acer Swift Go 14',
      category: 'Ordinateurs & Laptops',
      price: 750000,
      originalPrice: null,
      image: acer,
      badge: 'Ultra-portable',
      badgeColor: 'bg-green-500',
      rating: 4.7,
      reviews: 110,
      features: ['Intel i7', '8GB RAM', '512GB SSD', 'Lightweight']
    },

    // Accessoires
    {
      id: 25,
      name: 'AirPods Pro (3rd Gen)',
      category: 'Accessoires',
      price: 380000,
      originalPrice: null,
      image: airpods,
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 234,
      features: ['ANC', 'Spatial Audio', '30h Total Battery', 'Adaptive Audio']
    },
    {
      id: 26,
      name: 'Samsung Galaxy Buds 3 Pro',
      category: 'Accessoires',
      price: 290000,
      originalPrice: null,
      image: galaxyBuds,
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 156,
      features: ['ANC', 'Ambient Sound', 'Hi-Fi', 'IPX7 Waterproof']
    },
    {
      id: 27,
      name: 'Anker 737 Power Bank 140W',
      category: 'Accessoires',
      price: 185000,
      originalPrice: null,
      image: anker,
      badge: 'Tech Essential',
      badgeColor: 'bg-blue-500',
      rating: 4.7,
      reviews: 189,
      features: ['140W Output', '24000mAh', 'Fast Charging', 'Multi-device']
    },
    {
      id: 28,
      name: 'Belkin USB-C Hub 7-in-1',
      category: 'Accessoires',
      price: 95000,
      originalPrice: 120000,
      image: belkin,
      badge: 'Promo -21%',
      badgeColor: 'bg-red-500',
      rating: 4.6,
      reviews: 142,
      features: ['7 Ports', 'Aluminum Body', 'Thunderbolt', 'Plug and Play']
    },
    {
      id: 29,
      name: 'Mophie Wireless Charging Pad',
      category: 'Accessoires',
      price: 65000,
      originalPrice: null,
      image: mophie,
      badge: 'Pratique',
      badgeColor: 'bg-green-500',
      rating: 4.7,
      reviews: 98,
      features: ['Qi Compatible', 'Fast Charging', 'Non-slip Surface', 'Compact']
    },
    {
      id: 30,
      name: 'Spigen Tempered Glass iPhone Screen Protector',
      category: 'Accessoires',
      price: 25000,
      originalPrice: null,
      image: spigen,
      badge: 'Protection',
      badgeColor: 'bg-blue-500',
      rating: 4.8,
      reviews: 412,
      features: ['Ultra-thin', 'Case-friendly', 'Easy Installation', 'Lifetime Warranty']
    },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'tous' || product.category === selectedCategory;
    const searchMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const categories = [
    'tous',
    'Smartphones & Tablettes',
    'TV & Audio',
    'Gaming & Consoles',
    'Ordinateurs & Laptops',
    'Accessoires',
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    });
    // Show success message
    alert(`${product.name} ajouté au panier!`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Header section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tous nos Produits</h1>
            <p className="text-xl text-blue-100">Découvrez notre sélection complète de produits technologiques</p>
          </div>
        </section>

        {/* Filters section */}
        <section className="bg-white border-b border-gray-200 py-8 sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {/* Search */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                <i className="ri-search-line text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-100 flex-1 outline-none text-gray-700"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category === 'tous' ? 'Tous les produits' : category}
                  </button>
                ))}
              </div>

              <div className="text-sm text-gray-600">
                Affichage de <span className="font-bold">{filteredProducts.length}</span> produit(s)
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <i className="ri-search-eye-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-xl text-gray-500">Aucun produit trouvé</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-72 bg-gray-50 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badge */}
                      <div
                        className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                      >
                        {product.badge}
                      </div>

                      {/* Quick actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                          <i className="ri-heart-line text-lg"></i>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                          <i className="ri-eye-line text-lg"></i>
                        </button>
                      </div>

                      {/* Price on hover */}
                      <div className="absolute inset-0 bg-black/60 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col w-full">
                          {product.features && (
                            <div className="mb-2 flex flex-wrap gap-1">
                              {product.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                          >
                            <i className="ri-shopping-bag-3-fill"></i>
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`ri-star-fill text-xs ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          {product.rating} ({product.reviews} avis)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {(product.price / 1000000).toFixed(2)}M FCFA
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {(product.originalPrice / 1000000).toFixed(2)}M
                          </span>
                        )}
                      </div>

                      {/* Add to cart button for all screens */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <i className="ri-shopping-bag-3-fill"></i>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
