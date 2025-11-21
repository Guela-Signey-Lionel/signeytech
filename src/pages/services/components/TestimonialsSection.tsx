
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marie Kouassi',
      position: 'Directrice, Hôtel Central Palace',
      content: 'Excellent service ! L\'équipe a installé tous nos ordinateurs et systèmes de gestion. Le support technique est réactif et professionnel. Je recommande vivement.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20in%20hotel%20management%20office%2C%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20office%20background&width=100&height=100&seq=testimonial-marie&orientation=squarish'
    },
    {
      name: 'Jean-Baptiste Nzapa',
      position: 'Gérant, Pharmacie Moderne',
      content: 'Depuis 3 ans, ils s\'occupent de notre matériel informatique. Jamais de panne prolongée grâce à leur maintenance préventive. Service irréprochable.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20pharmacist%20in%20white%20coat%2C%20friendly%20expression%2C%20modern%20pharmacy%20background%2C%20healthcare%20professional&width=100&height=100&seq=testimonial-jean&orientation=squarish'
    },
    {
      name: 'Fatima Abdoulaye',
      position: 'Responsable IT, Banque Populaire',
      content: 'Partenaire de confiance pour notre infrastructure IT. Leur expertise technique et leur réactivité nous permettent de maintenir nos services bancaires sans interruption.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20woman%20IT%20manager%20in%20business%20suit%2C%20confident%20pose%2C%20modern%20bank%20office%20environment%2C%20technology%20background&width=100&height=100&seq=testimonial-fatima&orientation=squarish'
    },
    {
      name: 'Paul Mbongo',
      position: 'Directeur, École Internationale',
      content: 'Installation complète de notre salle informatique avec formation des enseignants. Excellent accompagnement et suivi. Les élèves adorent leurs nouveaux ordinateurs !',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20school%20director%20in%20educational%20environment%2C%20warm%20smile%2C%20modern%20classroom%20background%2C%20educational%20leadership&width=100&height=100&seq=testimonial-paul&orientation=squarish'
    },
    {
      name: 'Aminata Traoré',
      position: 'Propriétaire, Restaurant Le Savana',
      content: 'Réfrigérateurs, climatiseurs, système de caisse... tout fonctionne parfaitement depuis l\'installation. Service après-vente au top, intervention rapide en cas de besoin.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20restaurant%20owner%20in%20modern%20restaurant%20setting%2C%20welcoming%20smile%2C%20culinary%20business%20environment&width=100&height=100&seq=testimonial-aminata&orientation=squarish'
    },
    {
      name: 'David Konate',
      position: 'Entrepreneur, Start-up TechBangui',
      content: 'En tant que start-up, nous avions besoin d\'équipements fiables à prix abordable. Ils nous ont fourni des ordinateurs reconditionnés de qualité avec garantie complète.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20tech%20entrepreneur%20in%20modern%20startup%20office%2C%20innovative%20spirit%2C%20technology%20workspace%20background%2C%20creative%20professional&width=100&height=100&seq=testimonial-david&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages 
            sur la qualité de nos services et notre accompagnement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-600 mb-6">
              Plus de 500 entreprises et particuliers nous font confiance à Bangui. 
              Découvrez pourquoi ils choisissent nos services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Demander un devis
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
