
import React from "react";
import { useTranslation } from "../components/lib/i18n";
import { MENU } from "../components/data/mockData";
import MenuList from "../components/site/MenuList";

export default function RestaurantPage() {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const restaurantImages = [
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
      title: 'Salle principale du restaurant',
      description: 'Vue panoramique sur le lagon depuis notre salle principale'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      title: 'Terrasse face au lagon',
      description: 'Dînez les pieds dans le sable face au coucher de soleil'
    },
    {
      src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
      title: 'Spécialités mauriciennes',
      description: 'Nos chefs préparent des plats authentiques avec des produits locaux'
    },
    {
      src: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=600&fit=crop',
      title: 'Bar tropical',
      description: 'Cocktails exotiques et boissons locales dans une ambiance détendue'
    }
  ];

  return (
    <div className="min-h-screen bg-offwhite py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-deepnavy mb-4">
            {t('nav.restaurant')}
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Savourez l'authenticité mauricienne avec nos spécialités locales préparées avec des ingrédients frais
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-visual overflow-hidden shadow-elegant relative">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=500&fit=crop"
            alt="Restaurant La Case du Pêcheur"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="font-display font-semibold text-2xl mb-2">Restaurant La Case du Pêcheur</h2>
              <p className="font-body">Cuisine mauricienne authentique face au lagon</p>
            </div>
          </div>
        </div>

        {/* Restaurant Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display font-semibold text-3xl text-deepnavy mb-4">
              Ambiance & Cadre
            </h2>
            <p className="font-body text-gray-600">
              Découvrez l'atmosphère unique de notre restaurant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurantImages.map((image, index) => (
              <div key={index} className="group bg-white rounded-visual shadow-soft overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-deepnavy mb-2">
                    {image.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Notice */}
        <div className="bg-sand/30 border border-sand rounded-visual p-6 mb-12 text-center">
          <p className="font-body text-deepnavy">
            <span className="font-semibold">Notice :</span> {t('pricesIndicative')} - 
            Les prix peuvent varier selon la saison et la disponibilité des produits locaux.
          </p>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <MenuList items={MENU.food} title={t('restaurant.menuFood')} />
          <MenuList items={MENU.drinks} title={t('restaurant.menuDrinks')} />
        </div>

        {/* Restaurant Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-visual shadow-soft p-8">
            <h3 className="font-display font-semibold text-2xl text-deepnavy mb-4">
              Notre Philosophie
            </h3>
            <p className="font-body text-gray-600 leading-relaxed">
              Au restaurant de La Case du Pêcheur, nous mettons à l'honneur la richesse culinaire mauricienne. 
              Nos plats sont préparés avec des produits locaux, pêchés ou cultivés dans le respect des traditions de l'île.
            </p>
          </div>

          <div className="bg-white rounded-visual shadow-soft p-8">
            <h3 className="font-display font-semibold text-2xl text-deepnavy mb-4">
              Horaires d'Ouverture
            </h3>
            <div className="space-y-3 font-body text-gray-600">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Petit-déjeuner</span>
                <span className="text-lagoon font-semibold">7h00 - 10h30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Déjeuner</span>
                <span className="text-lagoon font-semibold">12h00 - 15h00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Dîner</span>
                <span className="text-lagoon font-semibold">19h00 - 22h00</span>
              </div>
              <div className="text-sm text-gray-500 mt-4 text-center">
                * Horaires susceptibles de changer selon la saison
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-lagoon to-seagreen rounded-visual p-8 text-center text-white">
          <h3 className="font-display font-semibold text-2xl mb-4">
            Réservez Votre Table
          </h3>
          <p className="font-body mb-6 max-w-2xl mx-auto">
            Pour une expérience culinaire authentique, réservez votre table et laissez-vous surprendre par nos saveurs mauriciennes.
          </p>
          <button
            disabled
            title={t('disabledTooltip')}
            className="bg-white text-lagoon font-body font-semibold px-8 py-3 rounded-lg opacity-75 cursor-not-allowed"
            aria-disabled="true"
          >
            Réserver une table
          </button>
        </div>
      </div>
    </div>
  );
}
