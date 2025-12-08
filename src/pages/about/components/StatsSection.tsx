
export default function StatsSection() {
  const stats = [
    {
      number: '10,000+',
      label: 'Clients Satisfaits',
      icon: 'ri-user-heart-line'
    },
    {
      number: '5,000+',
      label: 'Produits Vendus',
      icon: 'ri-shopping-bag-line'
    },
    {
      number: '50+',
      label: 'Marques Partenaires',
      icon: 'ri-handshake-line'
    },
    {
      number: '98%',
      label: 'Taux de Satisfaction',
      icon: 'ri-star-line'
    }
  ];

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20electronics%20store%20with%20happy%20customers%20shopping%2C%20diverse%20African%20families%20choosing%20computers%20and%20appliances%2C%20bright%20retail%20environment%2C%20successful%20business%20atmosphere%2C%20customer%20satisfaction%2C%20technology%20shopping%20experience&width=1920&height=600&seq=about-stats-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nos Réalisations en Chiffres
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ces chiffres témoignent de notre engagement constant envers l'excellence 
            et la satisfaction de nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}