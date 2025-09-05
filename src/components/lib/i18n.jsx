
export const translations = {
  fr: {
    brand: "La Case du Pêcheur",
    tagline: "Votre refuge authentique au cœur du lagon mauricien",
    nav: {
      home: "Accueil",
      bungalows: "Bungalows", 
      restaurant: "Restaurant",
      gallery: "Galerie",
      about: "À propos",
      contact: "Contact",
      booking: "Réservation"
    },
    bookingSoon: "Réservation en ligne bientôt disponible",
    payOnSiteMUR: "Paiement sur place en MUR. Les prix affichés peuvent varier selon le pays (indication).",
    pricesIndicative: "Prix indicatifs",
    disabledTooltip: "Bientôt disponible",
    bungalowTypes: {
      simple: "Simple",
      seaView: "Vue Mer", 
      family: "Familial",
      deluxe: "Deluxe"
    },
    restaurant: {
      menuFood: "Plats",
      menuDrinks: "Boissons"
    },
    hero: {
      title: "La Case du Pêcheur",
      subtitle: "Découvrez l'authenticité mauricienne dans un cadre préservé",
      cta: "Découvrir"
    },
    sections: {
      gallery: "Notre Galerie",
      bungalows: "Nos Bungalows", 
      restaurant: "Notre Restaurant",
      location: "Nous Trouver"
    },
    booking: {
      checkIn: "Arrivée",
      checkOut: "Départ", 
      guests: "Invités",
      bungalowType: "Type de bungalow",
      checkAvailability: "Vérifier les disponibilités",
      comingSoon: "La réservation en ligne arrive bientôt. Contactez-nous pour réserver."
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Une question, une demande de renseignement ? N'hésitez pas à nous écrire.",
      infoTitle: "Nos Coordonnées",
      addressTitle: "Adresse",
      phoneTitle: "Téléphone",
      emailTitle: "Email",
      formTitle: "Envoyer un message",
      mapPlaceholder: "Carte interactive bientôt disponible",
      form: {
        name: "Votre nom",
        namePlaceholder: "Ex: Jean Dupont",
        email: "Votre email",
        emailPlaceholder: "Ex: jean.dupont@email.com",
        message: "Votre message",
        messagePlaceholder: "Écrivez votre message ici...",
        submit: "Envoyer"
      }
    }
  },
  en: {
    brand: "La Case du Pêcheur",
    tagline: "Your authentic retreat in the heart of the Mauritian lagoon", 
    nav: {
      home: "Home",
      bungalows: "Bungalows",
      restaurant: "Restaurant", 
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      booking: "Booking"
    },
    bookingSoon: "Online booking coming soon",
    payOnSiteMUR: "Payment on-site in MUR. Displayed prices may vary by country (indication).",
    pricesIndicative: "Indicative prices",
    disabledTooltip: "Coming soon",
    bungalowTypes: {
      simple: "Simple",
      seaView: "Sea View",
      family: "Family", 
      deluxe: "Deluxe"
    },
    restaurant: {
      menuFood: "Food",
      menuDrinks: "Drinks"
    },
    hero: {
      title: "La Case du Pêcheur",
      subtitle: "Discover Mauritian authenticity in an unspoiled setting",
      cta: "Discover"
    },
    sections: {
      gallery: "Our Gallery",
      bungalows: "Our Bungalows",
      restaurant: "Our Restaurant", 
      location: "Find Us"
    },
    booking: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests", 
      bungalowType: "Bungalow type",
      checkAvailability: "Check availability", 
      comingSoon: "Online booking coming soon. Contact us to make a reservation."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question or an inquiry? Feel free to write to us.",
      infoTitle: "Our Contact Details",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      formTitle: "Send a message",
      mapPlaceholder: "Interactive map coming soon",
      form: {
        name: "Your name",
        namePlaceholder: "E.g: John Doe",
        email: "Your email",
        emailPlaceholder: "E.g: john.doe@email.com",
        message: "Your message",
        messagePlaceholder: "Write your message here...",
        submit: "Send"
      }
    }
  }
};

export const useTranslation = () => {
  // Simple state management for V1 - defaults to French
  const currentLang = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search).get('lang') || 'fr'
    : 'fr';
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const switchLanguage = (lang) => {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    window.location.reload(); // Simple reload for V1
  };

  return { t, currentLang, switchLanguage };
};
