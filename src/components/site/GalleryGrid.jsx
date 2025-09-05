import React from "react";
import { GALLERY_IMAGES } from "../data/mockData";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {GALLERY_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`group overflow-hidden rounded-visual cursor-pointer transition-all duration-300 hover:shadow-elegant ${
            index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' :
            index === 3 ? 'col-span-2 md:col-span-1' : ''
          }`}
        >
          <img
            src={image}
            alt={`Galerie photo ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ aspectRatio: index === 0 || index === 3 ? '4/5' : '4/3' }}
          />
        </div>
      ))}
    </div>
  );
}