import React from "react";
import { Calendar, Users, Home } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export default function DisabledBookingWidget({ showMessage = false }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-visual shadow-elegant p-8">
      <h3 className="font-display font-semibold text-2xl text-deepnavy mb-6 text-center">
        {t('booking.checkAvailability')}
      </h3>
      
      {showMessage && (
        <div className="bg-lagoon/10 border border-lagoon/20 rounded-lg p-4 mb-6">
          <p className="text-lagoon font-body text-center">
            {t('booking.comingSoon')}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Check-in */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 font-body">
            {t('booking.checkIn')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              disabled
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed"
              aria-disabled="true"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 font-body">
            {t('booking.checkOut')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              disabled
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed"
              aria-disabled="true"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 font-body">
            {t('booking.guests')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              disabled
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed appearance-none"
              aria-disabled="true"
            >
              <option>2 adultes</option>
            </select>
          </div>
        </div>

        {/* Bungalow Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 font-body">
            {t('booking.bungalowType')}
          </label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              disabled
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg font-body bg-gray-50 cursor-not-allowed appearance-none"
              aria-disabled="true"
            >
              <option>Tous types</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button - Disabled */}
      <button
        disabled
        title={t('disabledTooltip')}
        className="w-full bg-coral text-white font-body font-semibold py-4 px-8 rounded-lg text-lg opacity-50 cursor-not-allowed"
        aria-disabled="true"
      >
        {t('booking.checkAvailability')}
      </button>
    </div>
  );
}