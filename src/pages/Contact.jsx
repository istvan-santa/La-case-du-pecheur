import React from "react";
import { useTranslation } from "../components/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-offwhite py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-deepnavy mb-4">
              {t('contact.title')}
            </h1>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-white rounded-visual shadow-soft p-8 lg:p-10 space-y-8">
              <h3 className="font-display font-semibold text-2xl text-deepnavy">
                {t('contact.infoTitle')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lagoon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-lagoon" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-deepnavy mb-1">{t('contact.addressTitle')}</h4>
                    <p className="font-body text-gray-600">
                      Route côtière de Grand Baie<br />
                      Grand Baie, Île Maurice
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-seagreen/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-seagreen" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-deepnavy mb-1">{t('contact.phoneTitle')}</h4>
                    <p className="font-body text-gray-600">
                      +230 123 4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-deepnavy mb-1">{t('contact.emailTitle')}</h4>
                    <p className="font-body text-gray-600">
                      contact@lacasedupecheur.mu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Disabled */}
            <div className="bg-white rounded-visual shadow-soft p-8 lg:p-10">
              <h3 className="font-display font-semibold text-2xl text-deepnavy mb-6">
                {t('contact.formTitle')}
              </h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-body font-medium text-sm text-gray-700">{t('contact.form.name')}</label>
                  <Input id="name" type="text" placeholder={t('contact.form.namePlaceholder')} disabled className="cursor-not-allowed"/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-body font-medium text-sm text-gray-700">{t('contact.form.email')}</label>
                  <Input id="email" type="email" placeholder={t('contact.form.emailPlaceholder')} disabled className="cursor-not-allowed"/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-body font-medium text-sm text-gray-700">{t('contact.form.message')}</label>
                  <Textarea id="message" placeholder={t('contact.form.messagePlaceholder')} disabled className="h-32 resize-none cursor-not-allowed"/>
                </div>
                <Button type="submit" disabled title={t('disabledTooltip')} className="w-full bg-coral text-white font-body font-semibold py-3 text-lg opacity-50 cursor-not-allowed" aria-disabled="true">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-16 bg-white rounded-visual shadow-soft overflow-hidden h-96">
              <div className="h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-lagoon/50" />
                  <p className="font-body text-lg">{t('contact.mapPlaceholder')}</p>
                  <p className="font-body text-sm">Grand Baie, Île Maurice</p>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}