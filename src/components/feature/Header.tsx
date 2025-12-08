import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const productCategories = [
    { name: 'Ordinateurs & Laptops', icon: 'ri-computer-line', link: '/ordinateurs', subcategories: ['PC Portables', 'PC Bureau', 'Accessoires'] },
    { name: 'Smartphones & Tablettes', icon: 'ri-smartphone-line', link: '/produits', subcategories: ['iPhone', 'Samsung', 'Huawei'] },
    { name: 'Électroménager', icon: 'ri-fridge-line', link: '/electromenager', subcategories: ['Réfrigérateurs', 'Machines à laver', 'Climatiseurs'] },
    { name: 'TV & Audio', icon: 'ri-tv-2-line', link: '/produits', subcategories: ['Téléviseurs', 'Home Cinéma', 'Enceintes'] },
    { name: 'Gaming & Consoles', icon: 'ri-gamepad-line', link: '/produits', subcategories: ['PlayStation', 'Xbox', 'Accessoires'] },
    { name: 'Accessoires', icon: 'ri-headphone-line', link: '/produits', subcategories: ['Écouteurs', 'Chargeurs', 'Coques'] },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produits?search=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <i className="ri-shopping-bag-3-fill text-white text-2xl"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent whitespace-nowrap" style={{ fontFamily: '"Pacifico", serif' }}>
              SigneyTech
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer">
              Accueil
            </Link>
            
            {/* Dropdown Produits */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer flex items-center">
                Produits
                <i className={`ri-arrow-down-s-line ml-1 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4">
                    {productCategories.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => handleCategoryClick(category.link)}
                        className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                          <i className={`${category.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {category.subcategories.map((sub, idx) => (
                              <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => handleCategoryClick('/produits')}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      Voir tous les produits
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer">
              Services
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer">
              À propos
            </Link>
            <Link to="/panier" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold cursor-pointer flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-4 py-2 rounded-lg">
              <i className="ri-file-text-line"></i>
              Passer la Commande
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-search-line text-xl"></i>
              </button>
              {isSearchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl p-3 animate-fadeIn"
                >
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                    <input
                      type="text"
                      placeholder="Rechercher un produit..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                      className="bg-gray-100 flex-1 outline-none text-gray-700"
                    />
                    <button
                      type="submit"
                      className="text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Cart */}
            <Link
              to="/panier"
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer relative"
            >
              <i className="ri-shopping-cart-line text-xl"></i>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Contact */}
            <button
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Contact
            </button>
          </div>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-semibold cursor-pointer"
              >
                Accueil
              </Link>
              
              {/* Produits Mobile */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-semibold cursor-pointer flex items-center justify-between"
                >
                  Produits
                  <i className={`ri-arrow-down-s-line transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {productCategories.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => handleCategoryClick(category.link)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                      >
                        <i className={`${category.icon} text-xl text-blue-600`}></i>
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-semibold cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="/a-propos"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-semibold cursor-pointer"
              >
                À propos
              </Link>
              <Link
                to="/panier"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors font-semibold cursor-pointer flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 mx-4 px-4 py-3"
              >
                <i className="ri-file-text-line"></i>
                Passer la Commande
              </Link>
              
              <div className="flex items-center gap-2 px-4 pt-4 border-t border-gray-200 mt-2">
                <button
                  onClick={handleContactClick}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Contact
                </button>
                <Link
                  to="/panier"
                  className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer relative"
                >
                  <i className="ri-shopping-cart-line text-xl"></i>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
