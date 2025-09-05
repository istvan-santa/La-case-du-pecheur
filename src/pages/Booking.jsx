import React from "react";
import { Filter, Eye } from "lucide-react";
import { useTranslation } from "../components/lib/i18n";
import { ALL_BUNGALOWS } from "../components/data/mockData";
import BungalowCard from "../components/site/BungalowCard";
import DisabledBookingWidget from "../components/site/DisabledBookingWidget";

export default function BookingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-offwhite py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-deepnavy mb-4">
            {t('nav.bungalows')}
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez votre refuge authentique avec vue sur le lagon
          </p>
        </div>

        {/* Booking Widget */}
        <div className="mb-12">
            <DisabledBookingWidget showMessage={true} />
        </div>

        {/* Filters - Disabled */}
        <div className="bg-white rounded-visual shadow-soft p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-body font-semibold text-lg text-deepnavy flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtres
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Bientôt disponible
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Filter controls ... */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 font-body">Type</label>
              <select disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed">
                <option>Tous les types</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 font-body">Capacité</label>
              <select disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed">
                <option>Toutes capacités</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 font-body">Prix</label>
              <select disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed">
                <option>Tous les prix</option>
              </select>
            </div>
             <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 font-body">Vue</label>
              <select disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed">
                <option>Toutes les vues</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 font-body">
            {ALL_BUNGALOWS.length} bungalows disponibles
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Eye className="w-4 h-4" />
            <span>Vue grille</span>
          </div>
        </div>

        {/* Bungalows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_BUNGALOWS.map((bungalow) => (
              <BungalowCard key={bungalow.id} bungalow={bungalow} />
            ))}
        </div>
        
        {/* Legal notice */}
        <div className="text-center mt-12 text-sm text-gray-500 font-body">
            <p>{t('payOnSiteMUR')}</p>
        </div>

      </div>
    </div>
  );
}