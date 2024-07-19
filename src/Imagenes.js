import React from 'react';

/**
 * Componente que muestra una galería de imágenes de perros.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array<string>} props.imagenes - Lista de URLs de las imágenes de perros.
 * @return {JSX.Element} El JSX que renderiza la galería de imágenes.
 */
const Imagenes = ({ imagenes }) => {
  return (
    <div className="image-gallery">
      {imagenes.map((url, index) => (
        <div key={index} className="image-wrapper">
          <img src={url} alt="dog" />
        </div>
      ))}
    </div>
  );
};

export default Imagenes;
