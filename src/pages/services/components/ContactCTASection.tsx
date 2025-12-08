
export default function ContactCTASection() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20technology%20service%20center%20with%20professional%20team%20working%20on%20computers%20and%20electronic%20devices%2C%20clean%20organized%20workspace%2C%20customer%20service%20environment&width=1200&height=400&seq=contact-cta&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé. 
          Notre équipe d'experts est là pour vous accompagner.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Appelez-nous</h3>
            <p className="text-white/90">+236 72 90 33 59</p>
            <p className="text-white/90">+237 687 789 930</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Écrivez-nous</h3>
            <p className="text-white/90">signeytech@gmail.com</p>
            <p className="text-white/90">signeylguela@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visitez-nous</h3>
            <p className="text-white/90">Avenue de l'Indépendance</p>
            <p className="text-white/90">Bangui, République Centrafricaine</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Demander un devis gratuit
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Prendre rendez-vous
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/90 mb-4">
            <strong>Horaires d'ouverture :</strong> Lundi - Samedi : 8h00 - 18h00 | Dimanche : 10h00 - 16h00
          </p>
          <p className="text-white/90">
            <strong>Service d'urgence :</strong> Disponible 24h/7j pour nos clients sous contrat
          </p>
        </div>
      </div>
    </section>
  );
}
