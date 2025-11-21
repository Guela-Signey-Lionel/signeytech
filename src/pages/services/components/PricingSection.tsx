
export default function PricingSection() {
  const plans = [
    {
      name: 'Essentiel',
      price: '25,000',
      period: 'FCFA/mois',
      description: 'Parfait pour les particuliers et petites entreprises',
      features: [
        'Support technique de base',
        'Maintenance préventive trimestrielle',
        'Garantie 6 mois sur réparations',
        'Hotline téléphonique',
        'Diagnostic gratuit'
      ],
      popular: false,
      color: 'gray'
    },
    {
      name: 'Professionnel',
      price: '45,000',
      period: 'FCFA/mois',
      description: 'Idéal pour les entreprises en croissance',
      features: [
        'Support technique prioritaire',
        'Maintenance préventive mensuelle',
        'Garantie 1 an sur réparations',
        'Intervention sur site',
        'Formation du personnel',
        'Sauvegarde des données',
        'Remplacement temporaire'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Entreprise',
      price: 'Sur mesure',
      period: '',
      description: 'Solutions personnalisées pour grandes entreprises',
      features: [
        'Support technique 24/7',
        'Maintenance préventive hebdomadaire',
        'Garantie étendue 2 ans',
        'Technicien dédié',
        'Gestion complète du parc',
        'Monitoring en temps réel',
        'Contrat SLA personnalisé',
        'Consulting stratégique'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Formules de Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la formule qui correspond le mieux à vos besoins et à votre budget. 
            Tous nos plans incluent notre engagement qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                  Le plus populaire
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}>
                  {plan.price === 'Sur mesure' ? 'Nous contacter' : 'Choisir ce plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Besoin d'une solution personnalisée ? Contactez-nous pour un devis sur mesure.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
            Demander un devis personnalisé →
          </button>
        </div>
      </div>
    </section>
  );
}
