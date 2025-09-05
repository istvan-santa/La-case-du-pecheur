import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useTranslation } from "../lib/i18n";
import { ChevronDown, Calendar, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="font-body text-xl sm:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
                to={createPageUrl("Booking")}
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-lagoon text-white font-body font-semibold px-8 py-4 rounded-visual text-lg transition-all duration-300 hover:bg-lagoon/90 shadow-elegant hover:scale-105"
            >
                <Calendar className="w-5 h-5 mr-3" />
                {t('nav.booking')}
            </Link>
            <Link
                to={createPageUrl("Restaurant")}
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-coral text-white font-body font-semibold px-8 py-4 rounded-visual text-lg transition-all duration-300 hover:bg-coral/90 shadow-elegant hover:scale-105"
            >
                <UtensilsCrossed className="w-5 h-5 mr-3" />
                {t('nav.restaurant')}
            </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </section>
  );
}