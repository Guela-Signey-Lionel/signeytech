
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Nous analysons vos besoins et vous conseillons sur les meilleures solutions adaptées à votre budget.',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'Devis Personnalisé',
      description: 'Nous établissons un devis détaillé et transparent, sans frais cachés, adapté à vos exigences.',
      icon: 'ri-file-text-line'
    },
    {
      number: '03',
      title: 'Commande & Livraison',
      description: 'Une fois validé, nous préparons votre commande et organisons la livraison dans les meilleurs délais.',
      icon: 'ri-truck-line'
    },
    {
      number: '04',
      title: 'Installation & Formation',
      description: 'Nos techniciens installent vos équipements et vous forment à leur utilisation optimale.',
      icon: 'ri-tools-line'
    },
    {
      number: '05',
      title: 'Suivi & Maintenance',
      description: 'Nous assurons un suivi régulier et proposons des contrats de maintenance pour la durabilité.',
      icon: 'ri-customer-service-2-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Processus de Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus structuré et transparent pour vous garantir la meilleure expérience client 
            de la consultation à la maintenance.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <i className={`${step.icon} text-xl`}></i>
                      </div>
                      <div>
                        <span className="text-blue-600 font-bold text-lg">Étape {step.number}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Commencer votre projet
          </button>
        </div>
      </div>
    </section>
  );
}
