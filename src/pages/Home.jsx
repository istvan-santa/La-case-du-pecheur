import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "../components/lib/i18n";

// Import components
import Hero from "../components/site/Hero";
import GalleryGrid from "../components/site/GalleryGrid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-deepnavy mb-4">
            {t('sections.gallery')}
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez la beauté authentique de notre refuge mauricien
          </p>
        </div>
        <GalleryGrid />
        <div className="text-center mt-8">
          <Link
            to={createPageUrl("Gallery")}
            className="inline-flex items-center bg-lagoon text-white font-body font-medium px-8 py-4 rounded-visual hover:bg-lagoon/90 transition-all duration-200 shadow-soft hover:shadow-elegant"
          >
            Voir toute la galerie
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-deepnavy mb-4">
            {t('sections.location')}
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Idéalement situé à Grand Baie, au cœur du lagon mauricien
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-visual h-96 flex items-center justify-center shadow-soft">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-lagoon" />
              <h3 className="font-display font-semibold text-xl text-deepnavy mb-2">Localisation</h3>
              <p className="font-body">Carte interactive bientôt disponible</p>
              <div className="mt-4 bg-white rounded-lg p-4 shadow-soft inline-block">
                <p className="font-body text-sm text-gray-700">
                  <strong>Grand Baie, Île Maurice</strong><br />
                  Route côtière
                </p>
              </div>
            </div>
          </div>
          
          {/* Address Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-visual p-8 shadow-soft">
              <h3 className="font-display font-semibold text-2xl text-deepnavy mb-6">
                Notre Emplacement
              </h3>
              <div className="space-y-4 text-gray-600 font-body">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-coral mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-deepnavy">Adresse</p>
                    <p>Route côtière de Grand Baie</p>
                    <p>Île Maurice</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-lagoon/5 border border-lagoon/20 rounded-visual p-6">
              <h4 className="font-body font-semibold text-deepnavy mb-3 flex items-center">
                <span className="w-2 h-2 bg-seagreen rounded-full mr-3"></span>
                Accès facile
              </h4>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                À seulement 15 minutes de l'aéroport international Sir Seewoosagur Ramgoolam. 
                Navette disponible sur demande pour nos clients.
              </p>
            </div>

            <div className="bg-coral/5 border border-coral/20 rounded-visual p-6">
              <h4 className="font-body font-semibold text-deepnavy mb-3 flex items-center">
                <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                Environnement privilégié
              </h4>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                Face au lagon, dans un environnement préservé loin de l'agitation touristique.
                L'authenticité mauricienne à l'état pur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}