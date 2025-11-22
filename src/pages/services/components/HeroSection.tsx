
export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      // eslint-disable-next-line react/no-unknown-property
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20technology%20services%20team%20working%20with%20computers%20and%20electronic%20devices%20in%20modern%20office%20environment%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20high-tech%20atmosphere%2C%20modern%20workspace%20with%20multiple%20screens%20and%20equipment&width=1200&height=600&seq=services-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Nos Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Des solutions complètes pour tous vos besoins technologiques. 
          De la vente à la maintenance, nous vous accompagnons à chaque étape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Découvrir nos services
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
}
