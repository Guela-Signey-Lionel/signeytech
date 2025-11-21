import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.85) 50%, rgba(59, 130, 246, 0.7) 100%), url('https://readdy.ai/api/search-image?query=Modern%20premium%20electronics%20store%20showroom%20with%20sleek%20displays%20of%20laptops%20smartphones%20tablets%20and%20home%20appliances%2C%20professional%20LED%20lighting%2C%20minimalist%20white%20and%20blue%20interior%20design%2C%20glass%20shelves%2C%20contemporary%20retail%20space%2C%20bright%20clean%20atmosphere%2C%20high-end%20technology%20showcase%2C%20spacious%20layout%20with%20geometric%20patterns&width=1920&height=1080&seq=hero-electronics-premium&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte à gauche */}
          <div className="text-white space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">🎉 Nouveautés 2025 disponibles</span>
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
                <div className="text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-sm text-blue-100">Ans d'Expérience</div>
              </div>
            </div>
          </div>

          {/* Image de la personne à droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20confident%20African%20businessperson%20holding%20latest%20smartphone%20with%20warm%20genuine%20smile%2C%20looking%20towards%20left%20side%2C%20wearing%20modern%20business%20casual%20attire%2C%20clean%20simple%20background%2C%20natural%20professional%20lighting%2C%20high%20quality%20portrait%20photography%2C%20person%20displaying%20smartphone%20screen%2C%20friendly%20approachable%20expression%2C%20contemporary%20style&width=400&height=500&seq=hero-person-tech&orientation=portrait"
                alt="Expert technologie SigneyTech"
                className="relative w-96 h-[500px] object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-2xl shadow-2xl">
                <i className="ri-smartphone-fill text-4xl"></i>
              </div>
              <div className="absolute -top-6 -left-6 bg-white text-blue-600 p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <span className="font-bold text-lg">4.9/5</span>
                </div>
              </div>
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
