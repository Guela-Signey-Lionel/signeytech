
export default function ContactCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Découvrir Nos Produits ?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Visitez notre magasin ou contactez-nous dès aujourd'hui pour découvrir 
            notre large gamme de produits électroniques et électroménagers de qualité.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-store-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visitez Notre Magasin</h3>
              <p className="text-blue-100">
                Avenue de l'Indépendance<br />
                Bangui, République Centrafricaine
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Appelez-Nous</h3>
              <p className="text-blue-100">
                +236 72 90 33 59<br />
                Lun-Ven: 8h-18h
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-whatsapp-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100">
                Assistance rapide<br />
                24h/7j disponible
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Voir Nos Produits
            </a>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              <i className="ri-customer-service-line mr-2"></i>
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}