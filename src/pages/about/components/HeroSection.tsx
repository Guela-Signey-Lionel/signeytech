
import backgroundImage from '../../../images/Background A Propos.jpg';

export default function HeroSection() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À Propos de Notre Entreprise
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Depuis plus de 15 ans, nous sommes votre partenaire de confiance pour tous vos besoins 
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