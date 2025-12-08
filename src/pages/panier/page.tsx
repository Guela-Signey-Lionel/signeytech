import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useCart } from '../../context/CartContext';

export default function PanierPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    contact: '',
    adresse: '',
    suggestion: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = (e: any) => {
    e.preventDefault();
    
    // Construire le message de commande
    const productsText = items.map((item) => `${item.name} (x${item.quantity})`).join('\n');
    const orderMessage = `
Nouvelle Commande:
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Contact: ${formData.contact}
Adresse: ${formData.adresse}

Produits commandés:
${productsText}

Total: ${((totalPrice * 1.18) / 1000000).toFixed(2)}M FCFA

Suggestion/Remarque:
${formData.suggestion || 'Aucune'}
    `.trim();

    // Envoyer par email via formspree
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.action = 'https://formspree.io/f/xyzrqlyq';
    formElement.innerHTML = `
      <input type="hidden" name="email" value="signeylguela@gmail.com">
      <input type="hidden" name="message" value="${orderMessage.replace(/"/g, '&quot;')}">
    `;
    document.body.appendChild(formElement);
    formElement.submit();
    document.body.removeChild(formElement);

    // Message de confirmation
    alert('Merci! Votre commande a été envoyée avec succès. Nous vous contacterons bientôt.');
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      contact: '',
      adresse: '',
      suggestion: '',
    });
    setShowOrderForm(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Mon Panier</h1>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <i className="ri-shopping-cart-empty-line text-6xl text-gray-300 mb-4"></i>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Votre panier est vide</h2>
                <p className="text-gray-600 mb-8">Découvrez nos produits et commencez vos achats!</p>
                <Link
                  to="/produits"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  <i className="ri-shopping-bag-3-fill mr-2"></i>
                  Voir les produits
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-6"
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-xl"
                      />

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{item.category}</p>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-blue-600">
                            {(item.price / 1000000).toFixed(2)}M FCFA
                          </div>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-xl"></i>
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <p className="text-gray-600 text-sm mb-2">Sous-total</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {(
                            (item.price * item.quantity) /
                            1000000
                          ).toFixed(2)}
                          M
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Résumé
                    </h3>

                    <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex justify-between text-gray-600">
                        <span>Sous-total:</span>
                        <span>{(totalPrice / 1000000).toFixed(2)}M FCFA</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Livraison:</span>
                        <span className="text-green-600 font-semibold">
                          Gratuite
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>TVA (18%):</span>
                        <span>
                          {(
                            (totalPrice * 0.18) /
                            1000000
                          ).toFixed(2)}
                          M FCFA
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
                      <span>Total:</span>
                      <span className="text-blue-600">
                        {(
                          (totalPrice * 1.18) /
                          1000000
                        ).toFixed(2)}
                        M FCFA
                      </span>
                    </div>

                    <button 
                      onClick={() => setShowOrderForm(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mb-3 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <i className="ri-shopping-bag-3-fill"></i>
                      Passer la commande
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full border-2 border-gray-300 hover:border-red-300 text-gray-700 hover:text-red-600 font-semibold py-3 rounded-lg transition-colors cursor-pointer"
                    >
                      Vider le panier
                    </button>

                    <Link
                      to="/produits"
                      className="block text-center text-blue-600 hover:text-blue-700 font-semibold mt-4 cursor-pointer"
                    >
                      <i className="ri-arrow-left-line mr-2"></i>
                      Continuer les achats
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* Order Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <i className="ri-shopping-bag-3-fill"></i>
                Passer votre commande
              </h2>
              <button
                onClick={() => setShowOrderForm(false)}
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
              {/* Informations personnelles */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informations personnelles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Votre prénom"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Contact et adresse */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact et adresse</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Numéro de contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="+236 72 90 33 59"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse de livraison <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      placeholder="Votre adresse complète"
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Produits commandés */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Produits commandés</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">
                          {((item.price * item.quantity) / 1000000).toFixed(2)}M FCFA
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t-2 border-gray-300 flex justify-between items-center font-bold text-lg">
                    <span>Total TTC:</span>
                    <span className="text-blue-600">{((totalPrice * 1.18) / 1000000).toFixed(2)}M FCFA</span>
                  </div>
                </div>
              </div>

              {/* Suggestion */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Remarques supplémentaires</h3>
                <textarea
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleInputChange}
                  placeholder="Avez-vous des remarques ou des suggestions spéciales? (optionnel)"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-check-line"></i>
                  Confirmer la commande
                </button>
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
