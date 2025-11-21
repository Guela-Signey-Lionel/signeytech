
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function ElectromenagerPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [sortBy, setSortBy] = useState('populaire');

  const categories = [
    { id: 'tous', name: 'Tous les appareils', count: 40 },
    { id: 'refrigerateurs', name: 'Réfrigérateurs', count: 10 },
    { id: 'lave-linge', name: 'Lave-linge', count: 8 },
    { id: 'cuisinieres', name: 'Cuisinières', count: 6 },
    { id: 'climatiseurs', name: 'Climatiseurs', count: 8 },
    { id: 'micro-ondes', name: 'Micro-ondes', count: 8 }
  ];

  const products = [
    {
      id: 1,
      name: 'Réfrigérateur Samsung 500L',
      price: '899,000',
      originalPrice: '1,099,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20stainless%20steel%20refrigerator%20on%20white%20background%2C%20premium%20home%20appliance%2C%20contemporary%20kitchen%20equipment%2C%20sleek%20design%2C%20high-end%20household%20appliance%2C%20professional%20product%20photography&width=400&height=300&seq=refrigerator-1&orientation=landscape',
      category: 'refrigerateurs',
      brand: 'Samsung',
      specs: ['500L de capacité', 'No Frost', 'Classe A++', 'Distributeur d\'eau'],
      rating: 4.6,
      reviews: 73,
      badge: 'Économie',
      inStock: true
    },
    {
      id: 2,
      name: 'Lave-linge LG 8kg',
      price: '649,000',
      originalPrice: '749,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20white%20washing%20machine%20on%20white%20background%2C%20front-loading%20washer%2C%20contemporary%20home%20appliance%2C%20sleek%20laundry%20equipment%2C%20household%20appliance%2C%20professional%20product%20photography&width=400&height=300&seq=washing-machine&orientation=landscape',
      category: 'lave-linge',
      brand: 'LG',
      specs: ['8kg de capacité', '1400 tr/min', '14 programmes', 'Vapeur TurboWash'],
      rating: 4.5,
      reviews: 89,
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 3,
      name: 'Climatiseur Daikin 12000 BTU',
      price: '799,000',
      originalPrice: '899,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20white%20air%20conditioner%20unit%20on%20white%20background%2C%20split%20system%20AC%2C%20contemporary%20cooling%20appliance%2C%20sleek%20design%2C%20home%20climate%20control%2C%20professional%20product%20photography&width=400&height=300&seq=air-conditioner&orientation=landscape',
      category: 'climatiseurs',
      brand: 'Daikin',
      specs: ['12000 BTU/h', 'Inverter', 'Classe A+++', 'Télécommande'],
      rating: 4.8,
      reviews: 156,
      badge: 'Premium',
      inStock: true
    },
    {
      id: 4,
      name: 'Cuisinière Whirlpool 4 feux',
      price: '459,000',
      originalPrice: '529,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20gas%20stove%20cooktop%20on%20white%20background%2C%20four%20burner%20gas%20range%2C%20contemporary%20kitchen%20appliance%2C%20stainless%20steel%20cooking%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=gas-stove&orientation=landscape',
      category: 'cuisinieres',
      brand: 'Whirlpool',
      specs: ['4 feux gaz', 'Four électrique', 'Grill', 'Allumage automatique'],
      rating: 4.4,
      reviews: 67,
      badge: 'Promo',
      inStock: true
    },
    {
      id: 5,
      name: 'Micro-ondes Panasonic 25L',
      price: '189,000',
      originalPrice: '219,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20microwave%20oven%20on%20white%20background%2C%20stainless%20steel%20finish%2C%20contemporary%20kitchen%20appliance%2C%20compact%20cooking%20device%2C%20household%20appliance%2C%20professional%20product%20photography&width=400&height=300&seq=microwave&orientation=landscape',
      category: 'micro-ondes',
      brand: 'Panasonic',
      specs: ['25L de capacité', '900W', 'Grill', '10 programmes auto'],
      rating: 4.3,
      reviews: 94,
      badge: 'Compact',
      inStock: true
    },
    {
      id: 6,
      name: 'Réfrigérateur LG 350L',
      price: '699,000',
      originalPrice: '799,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20silver%20refrigerator%20on%20white%20background%2C%20medium%20size%20fridge%2C%20contemporary%20kitchen%20appliance%2C%20sleek%20household%20equipment%2C%20home%20appliance%2C%20professional%20product%20photography&width=400&height=300&seq=refrigerator-2&orientation=landscape',
      category: 'refrigerateurs',
      brand: 'LG',
      specs: ['350L de capacité', 'Smart Inverter', 'Multi Air Flow', 'Door Cooling+'],
      rating: 4.5,
      reviews: 112,
      badge: 'Smart',
      inStock: true
    },
    {
      id: 7,
      name: 'Lave-linge Bosch 7kg',
      price: '579,000',
      originalPrice: '649,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20white%20Bosch%20washing%20machine%20on%20white%20background%2C%20front-loading%20washer%2C%20premium%20home%20appliance%2C%20German%20engineering%2C%20household%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=bosch-washer&orientation=landscape',
      category: 'lave-linge',
      brand: 'Bosch',
      specs: ['7kg de capacité', '1200 tr/min', 'EcoSilence Drive', '15 programmes'],
      rating: 4.7,
      reviews: 78,
      badge: 'Silencieux',
      inStock: false
    },
    {
      id: 8,
      name: 'Climatiseur Samsung 18000 BTU',
      price: '1,199,000',
      originalPrice: '1,399,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20white%20Samsung%20air%20conditioner%20on%20white%20background%2C%20large%20capacity%20AC%20unit%2C%20premium%20cooling%20appliance%2C%20smart%20home%20climate%20control%2C%20professional%20product%20photography&width=400&height=300&seq=samsung-ac&orientation=landscape',
      category: 'climatiseurs',
      brand: 'Samsung',
      specs: ['18000 BTU/h', 'Digital Inverter', 'WiFi', 'Filtre HD'],
      rating: 4.9,
      reviews: 45,
      badge: 'WiFi',
      inStock: true
    },
    {
      id: 9,
      name: 'Four Électrique Brandt 60L',
      price: '329,000',
      originalPrice: '389,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electric%20oven%20on%20white%20background%2C%20stainless%20steel%20finish%2C%20contemporary%20kitchen%20appliance%2C%20built-in%20oven%20design%2C%20household%20cooking%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=electric-oven&orientation=landscape',
      category: 'cuisinieres',
      brand: 'Brandt',
      specs: ['60L de capacité', 'Chaleur tournante', '8 programmes', 'Pyrolyse'],
      rating: 4.4,
      reviews: 63,
      badge: 'Multifonction',
      inStock: true
    },
    {
      id: 10,
      name: 'Lave-vaisselle Siemens 12 couverts',
      price: '749,000',
      originalPrice: '849,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20dishwasher%20on%20white%20background%2C%20stainless%20steel%20finish%2C%20contemporary%20kitchen%20appliance%2C%20built-in%20dishwasher%20design%2C%20household%20cleaning%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=dishwasher&orientation=landscape',
      category: 'lave-linge',
      brand: 'Siemens',
      specs: ['12 couverts', 'Classe A+++', '6 programmes', 'Départ différé'],
      rating: 4.6,
      reviews: 91,
      badge: 'Efficace',
      inStock: true
    },
    {
      id: 11,
      name: 'Congélateur Horizontal Hisense 200L',
      price: '449,000',
      originalPrice: '519,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20chest%20freezer%20on%20white%20background%2C%20white%20horizontal%20freezer%2C%20contemporary%20home%20appliance%2C%20large%20capacity%20freezer%2C%20household%20storage%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=chest-freezer&orientation=landscape',
      category: 'refrigerateurs',
      brand: 'Hisense',
      specs: ['200L de capacité', 'Classe A+', 'Dégivrage manuel', 'Panier amovible'],
      rating: 4.3,
      reviews: 87,
      badge: 'Stockage',
      inStock: true
    },
    {
      id: 12,
      name: 'Climatiseur Mobile Delonghi 9000 BTU',
      price: '599,000',
      originalPrice: '699,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20portable%20air%20conditioner%20on%20white%20background%2C%20white%20mobile%20AC%20unit%2C%20contemporary%20cooling%20appliance%2C%20portable%20climate%20control%2C%20household%20cooling%20equipment%2C%20professional%20product%20photography&width=400&height=300&seq=portable-ac&orientation=landscape',
      category: 'climatiseurs',
      brand: 'Delonghi',
      specs: ['9000 BTU/h', 'Portable', 'Télécommande', 'Minuterie 24h'],
      rating: 4.2,
      reviews: 76,
      badge: 'Portable',
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Électroménager
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Équipez votre maison avec nos appareils électroménagers de qualité. 
              Des marques reconnues pour simplifier votre quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Économie d'Énergie</h3>
              <p className="text-gray-600">Appareils classe A+ et A++ pour réduire votre consommation électrique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation Gratuite</h3>
              <p className="text-gray-600">Installation et mise en service gratuite par nos techniciens qualifiés</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SAV Réactif</h3>
              <p className="text-gray-600">Service après-vente disponible 6j/7 pour tous vos appareils</p>
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
                      ? 'bg-green-600 text-white'
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
                className="px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                      product.badge === 'Promo' ? 'bg-red-100 text-red-800' :
                      product.badge === 'Smart' ? 'bg-blue-100 text-blue-800' :
                      product.badge === 'WiFi' ? 'bg-indigo-100 text-indigo-800' :
                      product.badge === 'Multifonction' ? 'bg-orange-100 text-orange-800' :
                      product.badge === 'Portable' ? 'bg-cyan-100 text-cyan-800' :
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
                    <span className="text-sm text-green-600 font-medium">{product.brand}</span>
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

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Marques Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les plus grandes marques d'électroménager
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Samsung', 'LG', 'Bosch', 'Whirlpool', 'Panasonic', 'Daikin'].map((brand) => (
              <div key={brand} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-700">{brand}</span>
                </div>
                <p className="text-sm text-gray-600">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conseils d'Utilisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimisez l'utilisation de vos appareils électroménagers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <i className="ri-snowflake-line text-xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Réfrigérateur</h3>
              <p className="text-gray-600">Maintenez une température entre 3-5°C pour une conservation optimale et une économie d'énergie.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <i className="ri-shirt-line text-xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lave-linge</h3>
              <p className="text-gray-600">Utilisez la bonne quantité de lessive et nettoyez régulièrement le filtre pour prolonger la durée de vie.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                <i className="ri-temp-cold-line text-xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climatiseur</h3>
              <p className="text-gray-600">Nettoyez les filtres mensuellement et maintenez une température de 24-26°C pour un confort optimal.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
