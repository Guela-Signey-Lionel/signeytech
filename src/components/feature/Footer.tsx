import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
                <i className="ri-shopping-bag-3-fill text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-bold text-white" style={{ fontFamily: '"Pacifico", serif' }}>
                SigneyTech
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en électronique et électroménager à Bangui depuis 2024.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-xl"></i>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-xl"></i>
              </button>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Catégories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ordinateurs" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Ordinateurs
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/electromenager" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  Électroménager
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <i className="ri-arrow-right-s-line"></i>
                  TV & Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <i className="ri-map-pin-line text-blue-500 text-xl flex-shrink-0 mt-1"></i>
                <span>Avenue de l'Indépendance, Bangui, RCA</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="ri-phone-line text-blue-500 text-xl flex-shrink-0 mt-1"></i>
                <div>
                  <div>+236 72 90 33 59</div>
                  <div>+237 687 789 930</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="ri-mail-line text-blue-500 text-xl flex-shrink-0 mt-1"></i>
                <div>
                  <div>signeytech@gmail.com</div>
                  <div>signeylguela@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="ri-time-line text-blue-500 text-xl flex-shrink-0 mt-1"></i>
                <div>
                  <div>Lun-Ven: 8h-18h</div>
                  <div>Sam: 9h-17h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Restez Informé</h3>
            <p className="text-gray-400 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et nouveautés
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} SigneyTech. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Conditions d'utilisation
              </a>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Powered by Signey Lionel GUELA
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
