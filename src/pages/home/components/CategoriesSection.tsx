import { useNavigate } from 'react-router-dom';

export default function CategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Ordinateurs & Laptops',
      description: 'PC portables, ordinateurs de bureau, accessoires informatiques',
      icon: 'ri-computer-line',
      color: 'from-blue-500 to-blue-600',
      image: 'https://readdy.ai/api/search-image?query=Modern%20sleek%20laptop%20computer%20on%20minimalist%20desk%20with%20wireless%20mouse%20and%20accessories%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-end%20technology%2C%20contemporary%20workspace%20setup%2C%20bright%20natural%20lighting%2C%20premium%20quality%20electronics&width=600&height=400&seq=category-computers&orientation=landscape',
      link: '/ordinateurs',
      count: '150+'
    },
    {
      id: 2,
      title: 'Smartphones & Tablettes',
      description: 'Derniers modèles iPhone, Samsung, Huawei et plus',
      icon: 'ri-smartphone-line',
      color: 'from-purple-500 to-purple-600',
      image: 'https://readdy.ai/api/search-image?query=Latest%20premium%20smartphones%20and%20tablets%20displayed%20elegantly%20on%20white%20surface%2C%20modern%20mobile%20devices%2C%20clean%20minimalist%20background%2C%20professional%20product%20photography%2C%20high-end%20technology%20showcase%2C%20bright%20studio%20lighting%2C%20contemporary%20electronics&width=600&height=400&seq=category-phones&orientation=landscape',
      link: '/produits',
      count: '200+'
    },
    {
      id: 3,
      title: 'Électroménager',
      description: 'Réfrigérateurs, machines à laver, climatiseurs',
      icon: 'ri-fridge-line',
      color: 'from-green-500 to-green-600',
      image: 'https://readdy.ai/api/search-image?query=Modern%20home%20appliances%20including%20refrigerator%20washing%20machine%20and%20air%20conditioner%20in%20contemporary%20kitchen%20setting%2C%20clean%20white%20background%2C%20professional%20product%20photography%2C%20high-quality%20household%20electronics%2C%20bright%20lighting%2C%20premium%20appliances%20showcase&width=600&height=400&seq=category-appliances&orientation=landscape',
      link: '/electromenager',
      count: '100+'
    },
    {
      id: 4,
      title: 'TV & Audio',
      description: 'Écrans plasma, home cinéma, systèmes audio',
      icon: 'ri-tv-2-line',
      color: 'from-red-500 to-red-600',
      image: 'https://readdy.ai/api/search-image?query=Large%20modern%20flat%20screen%20television%20with%20home%20theater%20sound%20system%20in%20contemporary%20living%20room%2C%20clean%20minimalist%20setup%2C%20professional%20product%20photography%2C%20premium%20entertainment%20electronics%2C%20bright%20ambient%20lighting%2C%20sleek%20design&width=600&height=400&seq=category-tv-audio&orientation=landscape',
      link: '/produits',
      count: '80+'
    },
    {
      id: 5,
      title: 'Gaming & Consoles',
      description: 'PlayStation, Xbox, accessoires gaming',
      icon: 'ri-gamepad-line',
      color: 'from-orange-500 to-orange-600',
      image: 'https://readdy.ai/api/search-image?query=Gaming%20console%20setup%20with%20controllers%20and%20accessories%20on%20modern%20desk%2C%20clean%20background%2C%20professional%20product%20photography%2C%20high-end%20gaming%20equipment%2C%20contemporary%20gaming%20station%2C%20bright%20studio%20lighting%2C%20premium%20electronics&width=600&height=400&seq=category-gaming&orientation=landscape',
      link: '/produits',
      count: '60+'
    },
    {
      id: 6,
      title: 'Accessoires',
      description: 'Câbles, chargeurs, coques, écouteurs',
      icon: 'ri-headphone-line',
      color: 'from-teal-500 to-teal-600',
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20premium%20electronic%20accessories%20including%20wireless%20headphones%20chargers%20cables%20and%20phone%20cases%20arranged%20neatly%20on%20white%20surface%2C%20clean%20minimalist%20background%2C%20professional%20product%20photography%2C%20modern%20tech%20accessories%2C%20bright%20lighting&width=600&height=400&seq=category-accessories&orientation=landscape',
      link: '/produits',
      count: '300+'
    },
  ];

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            NOS CATÉGORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explorez Notre Gamme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des milliers de produits de qualité dans toutes les catégories technologiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(category.link)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg">
                  <i className={`${category.icon} text-3xl bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}></i>
                </div>
                
                {/* Count badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900">{category.count} produits</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Découvrir</span>
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
