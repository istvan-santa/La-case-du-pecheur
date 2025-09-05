import React from "react";
import { useTranslation } from "../lib/i18n";

export default function MenuList({ items, title }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-visual shadow-soft p-6">
      <h3 className="font-display font-semibold text-2xl text-deepnavy mb-6 text-center">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border-b border-sand/30 pb-4 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-body font-semibold text-lg text-deepnavy">
                {item.name}
              </h4>
              <div className="flex items-center">
                <span className="font-display font-bold text-lagoon text-lg">
                  {item.priceMUR} MUR
                </span>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded ml-2">
                  {t('pricesIndicative')}
                </span>
              </div>
            </div>
            <p className="text-gray-600 font-body text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}