
export default function HeroSection() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      // eslint-disable-next-line react/no-unknown-property
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20electronics%20store%20interior%20with%20professional%20team%20members%20working%20together%2C%20bright%20lighting%2C%20clean%20organized%20shelves%20with%20computers%20and%20appliances%2C%20contemporary%20retail%20environment%2C%20professional%20atmosphere%2C%20high-tech%20displays%2C%20welcoming%20customer%20service%20area&width=1920&height=800&seq=about-hero-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À Propos de Notre Entreprise
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Depuis plus de 2 ans, nous sommes votre partenaire de confiance pour tous vos besoins 
            en électronique et électroménager en République Centrafricaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#notre-histoire" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-book-open-line mr-2"></i>
              Notre Histoire
            </a>
            <a 
              href="#notre-equipe" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-team-line mr-2"></i>
              Notre Équipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}