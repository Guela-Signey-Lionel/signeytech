
export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Qualité Garantie',
      description: 'Nous sélectionnons rigoureusement nos produits auprès des meilleures marques mondiales pour vous offrir une qualité irréprochable.',
      color: 'bg-blue-600'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Service Client Excellence',
      description: 'Notre équipe dédiée vous accompagne avant, pendant et après votre achat pour une expérience client exceptionnelle.',
      color: 'bg-green-600'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Prix Compétitifs',
      description: 'Grâce à nos partenariats directs avec les fabricants, nous vous proposons les meilleurs prix du marché centrafricain.',
      color: 'bg-purple-600'
    },
    {
      icon: 'ri-truck-line',
      title: 'Livraison Rapide',
      description: 'Service de livraison efficace dans toute la région de Bangui avec possibilité d\'expédition vers l\'intérieur du pays.',
      color: 'bg-orange-600'
    },
    {
      icon: 'ri-tools-line',
      title: 'Support Technique',
      description: 'Notre équipe technique qualifiée assure l\'installation, la maintenance et la réparation de vos équipements.',
      color: 'bg-red-600'
    },
    {
      icon: 'ri-heart-line',
      title: 'Engagement Local',
      description: 'Entreprise 100% centrafricaine, nous contribuons au développement économique et technologique de notre pays.',
      color: 'bg-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ces principes fondamentaux guident chacune de nos actions et définissent 
            notre engagement envers nos clients et notre communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}