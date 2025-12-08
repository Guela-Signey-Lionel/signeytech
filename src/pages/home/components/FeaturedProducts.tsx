import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseInt(product.price.replace(/,/g, '')),
      quantity: 1,
      image: product.image,
      category: product.category,
    });
    alert(`${product.name} ajouté au panier!`);
  };

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16" M3',
      category: 'Ordinateurs',
      price: '2,850,000',
      originalPrice: '3,200,000',
      image: 'https://readdy.ai/api/search-image?query=Apple%20MacBook%20Pro%2016%20inch%20with%20M3%20chip%20on%20clean%20white%20desk%2C%20sleek%20silver%20aluminum%20design%2C%20professional%20product%20photography%2C%20minimalist%20background%2C%20high-end%20laptop%2C%20premium%20quality%2C%20bright%20studio%20lighting%2C%20modern%20workspace&width=500&height=500&seq=product-macbook-pro&orientation=squarish',
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 127,
      features: ['M3 Pro', '32GB RAM', '1TB SSD']
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      category: 'Smartphones',
      price: '1,450,000',
      originalPrice: '1,650,000',
      image: 'https://readdy.ai/api/search-image?query=iPhone%2015%20Pro%20Max%20titanium%20blue%20color%20displayed%20elegantly%20on%20white%20surface%2C%20premium%20smartphone%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20latest%20Apple%20phone%2C%20high-end%20mobile%20device%2C%20bright%20studio%20lighting&width=500&height=500&seq=product-iphone-15&orientation=squarish',
      badge: 'Promo -12%',
      badgeColor: 'bg-red-500',
      rating: 4.8,
      reviews: 203,
      features: ['A17 Pro', '256GB', 'Titanium']
    },
    {
      id: 3,
      name: 'Samsung QLED 65"',
      category: 'TV & Audio',
      price: '1,200,000',
      originalPrice: '1,450,000',
      image: 'https://readdy.ai/api/search-image?query=Samsung%20QLED%2065%20inch%20television%20displaying%20vibrant%20colorful%20nature%20scene%2C%20ultra-thin%20bezel%2C%20modern%20flat%20screen%20TV%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20premium%20home%20entertainment%2C%20bright%20studio%20lighting&width=500&height=500&seq=product-samsung-tv&orientation=squarish',
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.7,
      reviews: 156,
      features: ['4K QLED', 'HDR10+', 'Smart TV']
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      category: 'Accessoires',
      price: '385,000',
      originalPrice: '450,000',
      image: 'https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20premium%20wireless%20headphones%20in%20black%20color%20on%20white%20surface%2C%20noise%20cancelling%20headphones%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20high-end%20audio%20equipment%2C%20bright%20studio%20lighting%2C%20modern%20design&width=500&height=500&seq=product-sony-headphones&orientation=squarish',
      badge: 'Promo -14%',
      badgeColor: 'bg-red-500',
      rating: 4.9,
      reviews: 342,
      features: ['ANC', '30h Battery', 'Hi-Res']
    },
    {
      id: 5,
      name: 'Dell XPS 15',
      category: 'Ordinateurs',
      price: '1,850,000',
      originalPrice: null,
      image: 'https://readdy.ai/api/search-image?query=Dell%20XPS%2015%20laptop%20with%20InfinityEdge%20display%20on%20modern%20desk%2C%20sleek%20silver%20design%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20premium%20business%20laptop%2C%20high-end%20computer%2C%20bright%20studio%20lighting&width=500&height=500&seq=product-dell-xps&orientation=squarish',
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.8,
      reviews: 89,
      features: ['Intel i9', '32GB', 'RTX 4060']
    },
    {
      id: 6,
      name: 'Samsung Galaxy S24 Ultra',
      category: 'Smartphones',
      price: '1,350,000',
      originalPrice: null,
      image: 'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20smartphone%20in%20titanium%20gray%20color%20on%20white%20surface%2C%20premium%20Android%20phone%20with%20S%20Pen%2C%20professional%20product%20photography%2C%20clean%20minimalist%20background%2C%20latest%20flagship%20phone%2C%20bright%20studio%20lighting&width=500&height=500&seq=product-galaxy-s24&orientation=squarish',
      badge: 'Top Vente',
      badgeColor: 'bg-yellow-500',
      rating: 4.8,
      reviews: 178,
      features: ['Snapdragon 8', '512GB', 'S Pen']
    },
    {
      id: 7,
      name: 'LG Réfrigérateur 450L',
      category: 'Électroménager',
      price: '950,000',
      originalPrice: '1,100,000',
      image: 'https://readdy.ai/api/search-image?query=LG%20modern%20stainless%20steel%20refrigerator%20450%20liters%20in%20contemporary%20kitchen%2C%20double%20door%20fridge%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20premium%20home%20appliance%2C%20bright%20studio%20lighting%2C%20sleek%20design&width=500&height=500&seq=product-lg-fridge&orientation=squarish',
      badge: 'Promo -14%',
      badgeColor: 'bg-red-500',
      rating: 4.6,
      reviews: 94,
      features: ['450L', 'Inverter', 'No Frost']
    },
    {
      id: 8,
      name: 'PlayStation 5 Slim',
      category: 'Gaming',
      price: '650,000',
      originalPrice: null,
      image: 'https://readdy.ai/api/search-image?query=PlayStation%205%20Slim%20console%20with%20DualSense%20controller%20in%20white%20color%20on%20clean%20surface%2C%20modern%20gaming%20console%2C%20professional%20product%20photography%2C%20minimalist%20white%20background%2C%20premium%20gaming%20system%2C%20bright%20studio%20lighting&width=500&height=500&seq=product-ps5-slim&orientation=squarish',
      badge: 'Nouveau',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 267,
      features: ['1TB SSD', '4K Gaming', 'Ray Tracing']
    },
  ];

  return (
    <section id="produits" className="py-24 bg-white" data-product-shop>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PRODUITS VEDETTES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Meilleures Offres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sélection premium des produits les plus populaires avec les meilleurs prix
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              data-product-shop
            >
              {/* Image */}
              <div className="relative h-72 bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
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
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{product.price} FCFA</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{product.originalPrice} FCFA</div>
                    )}
                  </div>
                </div>
                
                {/* Add to cart button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-shopping-cart-line text-lg"></i>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/produits')}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Voir tous les produits
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
