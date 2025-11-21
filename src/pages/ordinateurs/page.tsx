
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function OrdinateursPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [sortBy, setSortBy] = useState('populaire');

  const categories = [
    { id: 'tous', name: 'Tous les ordinateurs', count: 32 },
    { id: 'portables', name: 'Ordinateurs portables', count: 18 },
    { id: 'bureau', name: 'Ordinateurs de bureau', count: 8 },
    { id: 'gaming', name: 'Gaming', count: 6 },
    { id: 'ultrabook', name: 'Ultrabooks', count: 6 },
    { id: 'workstation', name: 'Workstations', count: 4 }
  ];

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16" M3 Pro',
      price: '2,499,000',
      originalPrice: '2,799,000',
      image: 'https://readdy.ai/api/search-image?query=Apple%20MacBook%20Pro%20laptop%20computer%20on%20clean%20white%20background%2C%20premium%20design%2C%20sleek%20aluminum%20finish%2C%20professional%20photography%2C%20high-end%20technology%20device%2C%20modern%20laptop%2C%20contemporary%20electronics%20showcase&width=400&height=300&seq=macbook-1&orientation=landscape',
      category: 'portables',
      brand: 'Apple',
      specs: ['Puce M3 Pro', '18 Go RAM', '512 Go SSD', 'Écran Liquid Retina XDR'],
      rating: 4.9,
      reviews: 127,
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 2,
      name: 'Dell XPS 13 Plus',
      price: '1,899,000',
      originalPrice: '2,199,000',
      image: 'https://readdy.ai/api/search-image?query=Dell%20XPS%20laptop%20computer%20on%20white%20background%2C%20premium%20ultrabook%20design%2C%20sleek%20silver%20finish%2C%20modern%20laptop%2C%20high-end%20technology%20device%2C%20professional%20product%20photography%2C%20contemporary%20electronics&width=400&height=300&seq=dell-xps&orientation=landscape',
      category: 'ultrabook',
      brand: 'Dell',
      specs: ['Intel Core i7-1360P', '16 Go RAM', '1 To SSD', 'Écran OLED 13.4"'],
      rating: 4.7,
      reviews: 89,
      badge: 'Nouveau',
      inStock: true
    },
    {
      id: 3,
      name: 'HP Pavilion Gaming 15',
      price: '1,299,000',
      originalPrice: '1,499,000',
      image: 'https://readdy.ai/api/search-image?query=HP%20gaming%20laptop%20computer%20on%20white%20background%2C%20black%20design%20with%20RGB%20lighting%2C%20gaming%20laptop%2C%20high-performance%20device%2C%20modern%20gaming%20computer%2C%20professional%20product%20photography&width=400&height=300&seq=hp-gaming&orientation=landscape',
      category: 'gaming',
      brand: 'HP',
      specs: ['AMD Ryzen 7 5800H', '16 Go RAM', '512 Go SSD', 'RTX 3060 6Go'],
      rating: 4.6,
      reviews: 156,
      badge: 'Promo',
      inStock: true
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad E15',
      price: '899,000',
      originalPrice: '1,099,000',
      image: 'https://readdy.ai/api/search-image?query=Lenovo%20ThinkPad%20business%20laptop%20on%20white%20background%2C%20professional%20black%20design%2C%20business%20laptop%20computer%2C%20corporate%20device%2C%20modern%20office%20technology%2C%20sleek%20professional%20laptop&width=400&height=300&seq=lenovo-thinkpad&orientation=landscape',
      category: 'portables',
      brand: 'Lenovo',
      specs: ['Intel Core i5-1135G7', '8 Go RAM', '256 Go SSD', 'Écran 15.6" FHD'],
      rating: 4.5,
      reviews: 73,
      badge: 'Économie',
      inStock: true
    },
    {
      id: 5,
      name: 'ASUS ROG Strix G15',
      price: '1,799,000',
      originalPrice: '1,999,000',
      image: 'https://readdy.ai/api/search-image?query=ASUS%20ROG%20gaming%20laptop%20on%20white%20background%2C%20aggressive%20gaming%20design%2C%20RGB%20lighting%2C%20high-performance%20gaming%20laptop%2C%20modern%20gaming%20computer%2C%20professional%20product%20photography&width=400&height=300&seq=asus-rog&orientation=landscape',
      category: 'gaming',
      brand: 'ASUS',
      specs: ['AMD Ryzen 9 5900HX', '32 Go RAM', '1 To SSD', 'RTX 3070 8Go'],
      rating: 4.8,
      reviews: 94,
      badge: 'Performance',
      inStock: true
    },
    {
      id: 6,
      name: 'Microsoft Surface Laptop 5',
      price: '1,599,000',
      originalPrice: '1,799,000',
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Surface%20laptop%20on%20white%20background%2C%20premium%20platinum%20finish%2C%20sleek%20ultrabook%20design%2C%20modern%20laptop%20computer%2C%20professional%20device%2C%20contemporary%20electronics%20showcase&width=400&height=300&seq=surface-laptop&orientation=landscape',
      category: 'ultrabook',
      brand: 'Microsoft',
      specs: ['Intel Core i7-1255U', '16 Go RAM', '512 Go SSD', 'Écran PixelSense 13.5"'],
      rating: 4.6,
      reviews: 67,
      badge: 'Premium',
      inStock: false
    },
    {
      id: 7,
      name: 'Acer Aspire 5',
      price: '649,000',
      originalPrice: '749,000',
      image: 'https://readdy.ai/api/search-image?query=Acer%20laptop%20computer%20on%20white%20background%2C%20silver%20finish%2C%20affordable%20laptop%20design%2C%20modern%20computer%2C%20budget-friendly%20device%2C%20professional%20product%20photography%2C%20contemporary%20electronics&width=400&height=300&seq=acer-aspire&orientation=landscape',
      category: 'portables',
      brand: 'Acer',
      specs: ['AMD Ryzen 5 5500U', '8 Go RAM', '256 Go SSD', 'Écran 15.6" FHD'],
      rating: 4.3,
      reviews: 112,
      badge: 'Budget',
      inStock: true
    },
    {
      id: 8,
      name: 'iMac 24" M3',
      price: '1,999,000',
      originalPrice: '2,299,000',
      image: 'https://readdy.ai/api/search-image?query=Apple%20iMac%20desktop%20computer%20on%20white%20background%2C%20colorful%20all-in-one%20design%2C%20modern%20desktop%20computer%2C%20sleek%20Apple%20design%2C%20professional%20workstation%2C%20contemporary%20electronics%20showcase&width=400&height=300&seq=imac-24&orientation=landscape',
      category: 'bureau',
      brand: 'Apple',
      specs: ['Puce M3', '16 Go RAM', '512 Go SSD', 'Écran Retina 4.5K 24"'],
      rating: 4.9,
      reviews: 45,
      badge: 'Nouveau',
      inStock: true
    },
    {
      id: 9,
      name: 'HP EliteBook 840 G9',
      price: '1,399,000',
      originalPrice: '1,599,000',
      image: 'https://readdy.ai/api/search-image?query=HP%20EliteBook%20business%20laptop%20on%20white%20background%2C%20professional%20silver%20design%2C%20premium%20business%20laptop%2C%20corporate%20device%2C%20modern%20office%20technology%2C%20sleek%20professional%20computer&width=400&height=300&seq=hp-elitebook&orientation=landscape',
      category: 'portables',
      brand: 'HP',
      specs: ['Intel Core i7-1255U', '16 Go RAM', '512 Go SSD', 'Écran 14" FHD'],
      rating: 4.7,
      reviews: 82,
      badge: 'Business',
      inStock: true
    },
    {
      id: 10,
      name: 'MSI Creator Z16P',
      price: '2,299,000',
      originalPrice: '2,599,000',
      image: 'https://readdy.ai/api/search-image?query=MSI%20Creator%20laptop%20on%20white%20background%2C%20professional%20creator%20laptop%20design%2C%20high-performance%20workstation%2C%20content%20creation%20device%2C%20modern%20laptop%20computer%2C%20professional%20product%20photography&width=400&height=300&seq=msi-creator&orientation=landscape',
      category: 'workstation',
      brand: 'MSI',
      specs: ['Intel Core i7-12700H', '32 Go RAM', '1 To SSD', 'RTX 3070 Ti 8Go'],
      rating: 4.8,
      reviews: 56,
      badge: 'Créateur',
      inStock: true
    },
    {
      id: 11,
      name: 'Dell Inspiron 15 3000',
      price: '549,000',
      originalPrice: '649,000',
      image: 'https://readdy.ai/api/search-image?query=Dell%20Inspiron%20laptop%20on%20white%20background%2C%20black%20affordable%20laptop%20design%2C%20budget%20computer%2C%20modern%20laptop%2C%20entry-level%20device%2C%20professional%20product%20photography%2C%20contemporary%20electronics&width=400&height=300&seq=dell-inspiron&orientation=landscape',
      category: 'portables',
      brand: 'Dell',
      specs: ['Intel Core i3-1115G4', '8 Go RAM', '256 Go SSD', 'Écran 15.6" HD'],
      rating: 4.2,
      reviews: 134,
      badge: 'Entrée',
      inStock: true
    },
    {
      id: 12,
      name: 'ASUS ZenBook 14',
      price: '1,199,000',
      originalPrice: '1,399,000',
      image: 'https://readdy.ai/api/search-image?query=ASUS%20ZenBook%20ultrabook%20on%20white%20background%2C%20premium%20gold%20finish%2C%20sleek%20ultrabook%20design%2C%20modern%20laptop%20computer%2C%20professional%20device%2C%20contemporary%20electronics%20showcase&width=400&height=300&seq=asus-zenbook&orientation=landscape',
      category: 'ultrabook',
      brand: 'ASUS',
      specs: ['AMD Ryzen 7 5700U', '16 Go RAM', '512 Go SSD', 'Écran 14" FHD'],
      rating: 4.6,
      reviews: 98,
      badge: 'Léger',
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ordinateurs & PC
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre gamme complète d'ordinateurs portables, de bureau et gaming. 
              Des marques de confiance pour tous vos besoins informatiques.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie Étendue</h3>
              <p className="text-gray-600">Tous nos ordinateurs bénéficient d'une garantie constructeur de 2 ans minimum</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600">Livraison gratuite à Bangui pour tout achat d'ordinateur</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Technique</h3>
              <p className="text-gray-600">Assistance technique gratuite et installation de logiciels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="populaire">Popularité</option>
                <option value="prix-asc">Prix croissant</option>
                <option value="prix-desc">Prix décroissant</option>
                <option value="note">Meilleures notes</option>
                <option value="nouveau">Nouveautés</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-product-shop>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.badge === 'Bestseller' ? 'bg-green-100 text-green-800' :
                      product.badge === 'Nouveau' ? 'bg-blue-100 text-blue-800' :
                      product.badge === 'Promo' ? 'bg-red-100 text-red-800' :
                      product.badge === 'Performance' ? 'bg-purple-100 text-purple-800' :
                      product.badge === 'Premium' ? 'bg-yellow-100 text-yellow-800' :
                      product.badge === 'Business' ? 'bg-indigo-100 text-indigo-800' :
                      product.badge === 'Créateur' ? 'bg-pink-100 text-pink-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">Rupture de stock</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 cursor-pointer">
                      <i className="ri-heart-line text-gray-600"></i>
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-400 text-sm"></i>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-xs text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="mb-3">
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.specs.slice(0, 2).map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-1"></i>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price} FCFA
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice} FCFA
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Ajouter au Panier
                      </>
                    ) : (
                      <>
                        <i className="ri-notification-line mr-2"></i>
                        Me notifier
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir SigneyTech ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos besoins informatiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Marques Authentiques</h3>
              <p className="text-gray-600">Produits 100% authentiques des plus grandes marques mondiales</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-price-tag-3-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prix Compétitifs</h3>
              <p className="text-gray-600">Les meilleurs prix du marché avec des promotions régulières</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Service Client</h3>
              <p className="text-gray-600">Support technique expert et service après-vente de qualité</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">Livraison express dans toute la République Centrafricaine</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
