import React from "react";
import { Users } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export default function BungalowCard({ bungalow }) {
  const { t } = useTranslation();

  const typeColors = {
    simple: 'bg-seagreen/10 text-seagreen border-seagreen',
    seaView: 'bg-lagoon/10 text-lagoon border-lagoon',
    family: 'bg-coral/10 text-coral border-coral',
    deluxe: 'bg-purple-100 text-purple-700 border-purple-200'
  };

  return (
    <div className="group bg-white rounded-visual shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={bungalow.img}
          alt={`Bungalow ${t(`bungalowTypes.${bungalow.type}`)}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${typeColors[bungalow.type]} mb-3`}>
          {t(`bungalowTypes.${bungalow.type}`)}
        </span>

        {/* Capacity */}
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="w-5 h-5 mr-2" />
          <span className="font-body text-sm">
            {bungalow.capacity} {bungalow.capacity > 1 ? 'personnes' : 'personne'}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-display font-bold text-deepnavy">
              {bungalow.priceMUR} MUR
            </span>
            <span className="text-gray-500 font-body text-sm ml-2">/ nuit</span>
          </div>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
            {t('pricesIndicative')}
          </span>
        </div>

        {/* CTA Button - Disabled */}
        <button
          disabled
          title={t('disabledTooltip')}
          className="w-full bg-lagoon text-white font-body font-medium py-3 px-6 rounded-lg opacity-50 cursor-not-allowed transition-all duration-200"
          aria-disabled="true"
        >
          Réserver
        </button>
      </div>
    </div>
  );
}