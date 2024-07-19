import React from 'react';

/**
 * Componente que renderiza un menú desplegable para seleccionar una raza de perro.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array<string>} props.razas - Lista de razas de perros disponibles para seleccionar.
 * @param {Function} props.onRazaSelect - Función que se llama cuando se selecciona una raza.
 * @return {JSX.Element} El JSX que renderiza el menú desplegable de selección de raza.
 */
const Raza = ({ razas, onRazaSelect }) => {
  return (
    <div>
      <select id="raza-select" onChange={(e) => onRazaSelect(e.target.value)}>
        <option value="">--Elige una raza--</option>
        {razas.map((raza) => (
          <option key={raza} value={raza}>
            {raza}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Raza;
