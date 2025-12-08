
export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Signey Lionel GUELA',
      position: 'Directeur Général',
      description: 'Fondateur et visionnaire de l\'entreprise, Signey Lionel dirige notre équipe avec passion et expertise depuis 2024.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20business%20executive%20in%20formal%20suit%2C%20confident%20CEO%20portrait%2C%20modern%20office%20background%2C%20leadership%20presence%2C%20successful%20entrepreneur%2C%20Central%20African%20businessman%2C%20executive%20headshot&width=400&height=500&seq=team-ceo&orientation=portrait',
      social: {
        linkedin: '#',
        email: 'signeylguela@gmail.com'
      }
    },
    {
      name: 'Marie KONATE',
      position: 'Directrice Commerciale',
      description: 'Responsable des ventes et du développement commercial, Marie assure la croissance de nos activités avec dynamisme.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20in%20elegant%20business%20attire%2C%20confident%20sales%20director%20portrait%2C%20modern%20office%20setting%2C%20leadership%20qualities%2C%20successful%20female%20executive%2C%20Central%20African%20professional&width=400&height=500&seq=team-sales&orientation=portrait',
      social: {
        linkedin: '#',
        email: 'marie.konate@company.com'
      }
    },
    {
      name: 'Paul MBONGO',
      position: 'Responsable Technique',
      description: 'Expert en électronique et électroménager, Paul supervise notre service technique et assure la qualité de nos installations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20technical%20engineer%20in%20work%20uniform%2C%20confident%20technician%20portrait%2C%20electronics%20workshop%20background%2C%20technical%20expertise%2C%20skilled%20professional%2C%20Central%20African%20engineer&width=400&height=500&seq=team-tech&orientation=portrait',
      social: {
        linkedin: '#',
        email: 'paul.mbongo@company.com'
      }
    },
    {
      name: 'Sarah BANDA',
      position: 'Responsable Service Client',
      description: 'Garante de la satisfaction client, Sarah coordonne notre équipe de service client pour une expérience exceptionnelle.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20customer%20service%20manager%20in%20business%20attire%2C%20friendly%20and%20approachable%20portrait%2C%20modern%20customer%20service%20environment%2C%20professional%20smile%2C%20Central%20African%20businesswoman&width=400&height=500&seq=team-service&orientation=portrait',
      social: {
        linkedin: '#',
        email: 'sarah.banda@company.com'
      }
    }
  ];

  return (
    <section id="notre-equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez les professionnels passionnés qui font de notre entreprise 
            un leader dans le domaine de l'électronique en République Centrafricaine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <i className="ri-mail-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez Notre Équipe
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nous recherchons constamment des talents passionnés pour renforcer notre équipe. 
              Si vous partagez notre vision et souhaitez contribuer au développement technologique 
              de la République Centrafricaine, contactez-nous !
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-user-add-line mr-2"></i>
              Postuler Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}