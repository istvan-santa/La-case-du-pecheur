

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { useTranslation } from "./components/lib/i18n";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const { t, currentLang, switchLanguage } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { key: 'home', url: createPageUrl("Home") },
    { key: 'restaurant', url: createPageUrl("Restaurant") },
    { key: 'booking', url: createPageUrl("Booking") },
    { key: 'contact', url: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand/20 shadow-soft">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-lagoon to-seagreen rounded-visual flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">CP</span>
              </div>
              <div>
                <h1 className="font-display font-semibold text-xl text-deepnavy">{t('brand')}</h1>
                <p className="text-sm text-gray-500 hidden sm:block">Île Maurice</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.url}
                  className={`font-body font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-lagoon/10 ${
                    location.pathname === item.url
                      ? 'text-lagoon bg-lagoon/10 shadow-sm'
                      : 'text-deepnavy hover:text-lagoon'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => switchLanguage('fr')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                    currentLang === 'fr' 
                      ? 'bg-white text-lagoon shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                    currentLang === 'en' 
                      ? 'bg-white text-lagoon shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Book CTA - Disabled */}
              <button
                disabled
                title={t('disabledTooltip')}
                className="hidden lg:inline-flex bg-coral text-white px-6 py-2 rounded-lg font-medium opacity-50 cursor-not-allowed"
                aria-disabled="true"
              >
                {t('nav.booking')}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-deepnavy hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-sand/20 bg-white/95 backdrop-blur-sm">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-body font-medium px-4 py-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.url
                        ? 'text-lagoon bg-lagoon/10 border-l-4 border-lagoon'
                        : 'text-deepnavy hover:text-lagoon hover:bg-lagoon/5'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="flex justify-center mt-4 pt-4 border-t border-gray-200">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => switchLanguage('fr')}
                      className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                        currentLang === 'fr' 
                          ? 'bg-white text-lagoon shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => switchLanguage('en')}
                      className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                        currentLang === 'en' 
                          ? 'bg-white text-lagoon shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                
                <button
                  disabled
                  title={t('disabledTooltip')}
                  className="mx-4 mt-4 bg-coral text-white px-6 py-3 rounded-lg font-medium opacity-50 cursor-not-allowed"
                  aria-disabled="true"
                >
                  {t('nav.booking')}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Booking Soon Banner */}
      <div className="bg-gradient-to-r from-lagoon to-seagreen text-white py-3">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-sm">
            {t('bookingSoon')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-deepnavy text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-lagoon to-seagreen rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold">CP</span>
                </div>
                <h3 className="font-display font-semibold text-xl">{t('brand')}</h3>
              </div>
              <p className="text-gray-300 font-body leading-relaxed">
                {t('tagline')}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-lagoon">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-coral" />
                  <span className="text-gray-300 font-body">Grand Baie, Île Maurice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-coral" />
                  <span className="text-gray-300 font-body">+230 xxx xxxx</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-coral" />
                  <span className="text-gray-300 font-body">contact@lacasedupecheur.mu</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-lagoon">Suivez-nous</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-body text-sm">
              {t('payOnSiteMUR')}
            </p>
            <p className="text-gray-500 font-body text-xs mt-2">
              © 2024 La Case du Pêcheur. V1 Vitrine - Réservation en ligne bientôt disponible.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

