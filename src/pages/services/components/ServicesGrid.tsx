
export default function ServicesGrid() {
  const services = [
    {
      icon: 'ri-computer-line',
      title: 'Vente d\'Ordinateurs',
      description: 'Large gamme d\'ordinateurs portables et de bureau pour tous les besoins professionnels et personnels.',
      features: ['Ordinateurs neufs et reconditionnés', 'Conseils personnalisés', 'Garantie constructeur', 'Configuration sur mesure'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20laptop%20computers%20and%20desktop%20PCs%20displayed%20in%20electronics%20store%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-tech%20retail%20environment&width=400&height=300&seq=computers-service&orientation=landscape'
    },
    {
      icon: 'ri-fridge-line',
      title: 'Électroménager',
      description: 'Équipements électroménagers de qualité pour votre maison : réfrigérateurs, machines à laver, climatiseurs.',
      features: ['Grandes marques reconnues', 'Installation incluse', 'Service après-vente', 'Pièces détachées disponibles'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20home%20appliances%20including%20refrigerator%20washing%20machine%20and%20air%20conditioner%20in%20showroom%2C%20clean%20white%20background%2C%20professional%20retail%20display&width=400&height=300&seq=appliances-service&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Réparation & Maintenance',
      description: 'Service de réparation professionnel pour tous vos appareils électroniques et électroménagers.',
      features: ['Diagnostic gratuit', 'Réparation sur site', 'Pièces d\'origine', 'Intervention rapide'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20technician%20repairing%20electronic%20devices%20with%20tools%20and%20equipment%2C%20clean%20workshop%20environment%2C%20technical%20service%2C%20modern%20repair%20station&width=400&height=300&seq=repair-service&orientation=landscape'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Installation & Configuration',
      description: 'Installation professionnelle et configuration de vos équipements pour un fonctionnement optimal.',
      features: ['Installation à domicile', 'Configuration réseau', 'Formation utilisateur', 'Support technique'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20technician%20installing%20and%20configuring%20computer%20equipment%20at%20customer%20home%2C%20clean%20modern%20interior%2C%20technical%20installation%20service&width=400&height=300&seq=installation-service&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Garantie Étendue',
      description: 'Protection complète de vos investissements avec nos contrats de garantie étendue.',
      features: ['Couverture jusqu\'à 3 ans', 'Remplacement immédiat', 'Support prioritaire', 'Maintenance préventive'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20warranty%20and%20insurance%20documentation%20with%20electronic%20devices%2C%20clean%20office%20environment%2C%20customer%20service%2C%20protection%20guarantee&width=400&height=300&seq=warranty-service&orientation=landscape'
    },
    {
      icon: 'ri-truck-line',
      title: 'Livraison & Transport',
      description: 'Service de livraison rapide et sécurisé dans tout Bangui et ses environs.',
      features: ['Livraison le jour même', 'Transport sécurisé', 'Installation à domicile', 'Suivi en temps réel'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20delivery%20truck%20with%20electronic%20equipment%20and%20appliances%2C%20clean%20urban%20environment%2C%20logistics%20service%2C%20safe%20transportation&width=400&height=300&seq=delivery-service&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services Complets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins technologiques, 
            de l'achat à la maintenance de vos équipements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-lg">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
