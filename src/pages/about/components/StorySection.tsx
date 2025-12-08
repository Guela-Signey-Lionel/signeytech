
import storyImage from '../../../images/Notre Histoire.avif';

export default function StorySection() {
  return (
    <section id="notre-histoire" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Fondée en 2024 à Bangui, notre entreprise a débuté comme un petit magasin familial 
                spécialisé dans la vente d'appareils électroniques. Avec une vision claire de 
                démocratiser l'accès aux technologies modernes en République Centrafricaine, 
                nous avons progressivement élargi notre gamme de produits.
              </p>
              <p>
                Au fil des années, nous avons tissé des partenariats solides avec les plus grandes 
                marques internationales, nous permettant d'offrir à nos clients des produits de 
                qualité supérieure à des prix compétitifs. Notre engagement envers l'excellence 
                du service client nous a permis de devenir l'un des leaders du secteur.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de servir des milliers de familles et d'entreprises 
                centrafricaines, en leur fournissant les outils technologiques nécessaires pour 
                améliorer leur quotidien et développer leurs activités.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-sm text-gray-600">Ans d'expérience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={storyImage}
              alt="Notre fondateur devant le magasin"
              className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-32">
              <img 
                src="https://readdy.ai/api/search-image?query=Small%20family%20electronics%20shop%20from%202008%2C%20vintage%20electronics%20store%20interior%2C%20old%20computers%20and%20appliances%2C%20nostalgic%20atmosphere%2C%20humble%20beginnings%2C%20African%20electronics%20store%2C%20retro%20technology%20displays&width=300&height=200&seq=about-story-2&orientation=landscape"
                alt="Nos débuts en 2024"
                className="w-full h-full object-cover object-top rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}